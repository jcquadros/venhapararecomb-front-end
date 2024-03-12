<template>
    <v-container>
        <v-form @submit.prevent="submitForm" ref="form">
            <v-row>
                <v-col cols="12">
                    <BandeiraForm @bandeira-selected="updateBandeira" />
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" md="6">
                    <v-text-field v-model="titular" label="Titular" :rules="[titularRule]"></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                    <v-text-field v-model="cpfCnpj" label="CPF/CNPJ" :rules="[cpfCnpjRule]"></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                    <v-select v-model="parcelas" :items="parcelasLista" label="Parcelas" :rules="[parcelasRule]"></v-select>
                </v-col>
                <v-col cols="12" md="6">
                    <v-text-field v-model="cvv" label="CVV" :rules="[cvvRule]"></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                    <v-text-field v-model="validade" label="Data de Validade" :rules="[validadeRule]"></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                    <v-text-field v-model="numeroCartao" label="Número do Cartão" :rules="[numeroCartaoRule]"></v-text-field>
                </v-col>
                <v-col cols="12">
                    <v-btn type="submit" color="primary">Submit</v-btn>
                </v-col>
            </v-row>
        </v-form>
    </v-container>
</template>

<script>
import BandeiraForm from './BandeiraForm.vue';

export default {
    components: {
        BandeiraForm,
    },
    data() {
        return {
            titular: '',
            cpfCnpj: '',
            parcelas: null, // Alterado para null para que o v-select não tenha um valor padrão
            cvv: '',
            validade: '',
            numeroCartao: '',
            bandeira: '',
            parcelasLista: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        };
    },
    computed: {
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
            return (v) => { return !!v || 'Titular is required'; };
        },
        parcelasRule() {
            return (v) => { return !!v || 'Parcelas is required'; };
        },
    },
    methods: {
        submitForm() {
            console.log(this.titular, this.cpfCnpj, this.parcelas, this.cvv, this.validade, this.numeroCartao, this.bandeira);
        },
        updateBandeira(bandeira) {
            this.bandeira = bandeira;
        },
    },
};
</script>