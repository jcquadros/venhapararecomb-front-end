<template>
    <!-- Formulário de Cartão de Crédito -->
    <v-form ref="form" v-model="valid" lazy-validation>
        <v-row>
            <!-- Campo de Bandeira -->
            <v-col cols="12" md="6">
                <v-select v-model="formData.bandeira" :items="bandeirasLista" label="bandeira" :rules="[bandeiraRule]"></v-select>
            </v-col>
            <!-- Campo de Titular -->
            <v-col cols="12" md="6">
                <v-text-field v-model="formData.titular" label="Titular" :rules="[titularRule]"></v-text-field>
            </v-col>
            <!-- Campo de CPF/CNPJ -->
            <v-col cols="12" md="6">
                <v-text-field v-model="formData.cpfCnpj" label="CPF/CNPJ" :rules="[cpfCnpjRule]"></v-text-field>
            </v-col>
            <!-- Campo de Número do Cartão -->
            <v-col cols="12" md="6">
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
            <!-- Campo de Parcelas -->
            <v-col cols="12" md="6">
                <v-select v-model="formData.parcelas" :items="parcelasLista" label="Parcelas" :rules="[parcelasRule]"></v-select>
            </v-col>
            
            <!-- Botão de Validar -->
            <v-col cols="12">
                <v-btn :disabled="!valid" color="success" @click="validate">Validar</v-btn>
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
            cpfCnpj: '',
            parcelas: null,
            validade: '',
            numeroCartao: '',
            cvv: '',
        },
        bandeirasLista: ['Visa', 'Mastercard', 'Elo'],
        parcelasLista: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
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
        cpfCnpjRule() {
            return (v) => {
                if (!v) return 'CPF/CNPJ is required';
                else if (!/^\d+$/.test(v)) return 'CPF/CNPJ must contain only numbers';
                else if (v.length !== 11 && v.length !== 14) return 'CPF/CNPJ must have 11 or 14 digits';
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
    },
};
</script>