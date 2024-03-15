<template>
    <!-- Formulário de Cartão de Crédito -->
    <v-form ref="form" v-model="valid" lazy-validation>
        <v-row>
            <!-- Campo de Bandeira -->
            <v-col cols="12">
                <v-select v-model="formData.bandeira" :items="bandeirasLista" label="bandeira" :rules="[bandeiraRule]"></v-select>
            </v-col>
            <!-- Campo de Número do Cartão -->
            <v-col cols="12">
                <v-text-field v-model="formData.numeroCartao" label="Número do Cartão" :rules="[numeroCartaoRule]"></v-text-field>
            </v-col>
            <!-- Campo de CVV -->
            <v-col cols="12" md="6">
                <v-text-field v-model="formData.cvv" label="CVV" :rules="[cvvRule]"></v-text-field>
            </v-col>
            <!-- Campo de Validade -->
            <v-col cols="12" md="6">
                <v-text-field v-model="formData.validade" label="Data de Validade" :rules="[validadeRule]"></v-text-field>
            </v-col>
            <!-- Campo de Titular -->
            <v-col cols="12">
                <v-text-field v-model="formData.titular" label="Titular" :rules="[titularRule]"></v-text-field>
            </v-col>
            <!-- Campo de CPF/CNPJ -->
            <v-col :cols="selectCols">
                <v-select v-model="formData.tipoDocumento" :items="documentosLista" label="Tipo de documento" required></v-select>
            </v-col>
            <v-col :cols="inputCols"  v-if="isTipoDocumentoSelected">
                <v-text-field v-model="formData.ocumento" :label="selectedTipoDocumentoLabel" required :rules="[selectedTipoDocumentoRules]"></v-text-field>
            </v-col>
            <!-- Campo de Parcelas -->
            <v-col cols="12">
                <v-select v-model="formData.parcelas" :items="parcelasLista" label="Parcelas" :rules="[parcelasRule]"></v-select>
            </v-col>
            
            <!-- Botão de Validar -->
            <v-col cols="12">
                <v-spacer></v-spacer>
                <v-btn :disabled="!valid"  @click.prevent.once="validate" color="primary">Confirmar Pagamento</v-btn>
            </v-col>
        </v-row>
    </v-form>
</template>

<script>
export default {
    data: () => ({
        valid: true,
        formData: {
            titular: '',
            bandeira: '',
            documento: '',
            parcelas: null,
            validade: '',
            numeroCartao: '',
            cvv: '',
            tipoDocumento: ''
        },
        bandeirasLista: ['Visa', 'Mastercard', 'Elo'],
        parcelasLista: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        documentosLista: ['CPF', 'CNPJ'],
    }),
    methods: {
        validate() {
            if (this.$refs.form.validate()) {
                console.log('Formulário válido');
                this.$emit('validated', true, this.formData);
            }
        },
    },
    computed: {
        // regras de validação
        cpfRule() {
            return (v) => {
                if (!v) return 'CPF é obrigatório';
                if (!/^[0-9]{11}$/.test(v)) return 'CPF inválido';
                return true;
            };
        },
        cnpjRule() {
            return (v) => {
                if (!v) return 'CNPJ é obrigatório';
                if (!/^[0-9]{14}$/.test(v)) return 'CNPJ inválido';
                return true;
            };
        },
        cvvRule() {
            return (v) => {
                if (!v) return 'CVV is required';
                else if (!/^\d+$/.test(v)) return 'CVV must contain only numbers';
                else if (v.length !== 3) return 'CVV must have 3 digits';
                return true;
            };
        },
        validadeRule() {
            return (v) => {
                if (!v) return 'Validade is required';
                else if (!/^\d{2}\/\d{4}$/.test(v)) return 'Validade must have the format MM/YYYY';
                // converter para inteiro
                const [month, year] = v.split('/').map((v) => parseInt(v));
                const currentYear = new Date().getFullYear();
                const currentMonth = new Date().getMonth() + 1;
                if (month > 12) return 'Validade must have a valid month';
                if (year < currentYear) return 'Validade must be greater than the current year';
                if (year === currentYear && month < currentMonth) return 'Validade must be greater than the current month'; 
                return true;
            };
        },
        numeroCartaoRule() {
            return (v) => {
                if (!v) return 'Número do Cartão is required';
                if (!/^\d+$/.test(v)) return 'Número do Cartão must contain only numbers';
                if (v.length !== 16) return 'Número do Cartão must have 16 digits';
                return true;
            };
        },
        titularRule() {
            return (v) => {
                return !!v || 'Titular is required';
            };
        },
        parcelasRule() {
            return (v) => {
                return !!v || 'Parcelas is required';
            };
        },
        bandeiraRule() {
            return (v) => {
                return !!v || 'Bandeira is required';
            };
        },
        isTipoDocumentoSelected() {
            return !!this.formData.tipoDocumento;
        },
        selectCols() {
            return this.isTipoDocumentoSelected ? '4' : '12';
        },
        inputCols() {
            return this.isTipoDocumentoSelected ? '8' : '0';
        },
        selectedTipoDocumentoLabel() {
            return this.formData.tipoDocumento === 'CPF' ? 'CPF' : 'CNPJ';
        },
        selectedTipoDocumentoRules() {
            return this.formData.tipoDocumento === 'CPF' ? this.cpfRule : this.cnpjRule;
        },
    },
    watch: {
        'formData.tipoDocumento'(newValue) {
            if (newValue === 'CPF') {
                this.formData.ocumento = '';
            } else {
                this.formData.ocumento = '';
            }
        },
    },
};
</script>