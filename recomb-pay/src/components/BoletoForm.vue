<template>
    <v-form ref="form" v-model="valid" lazy-validation>
        <v-row>
            <v-col cols="12" md="6">
                <v-text-field v-model="name" label="Nome" required :rules="[nameRule]"></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
                <v-text-field v-model="lastName" label="Sobrenome" required :rules="[lastNameRule]"></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
                <v-text-field v-model="email" label="Email" required :rules="[emailRule]"></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
                <v-text-field v-model="cpf" label="CPF" required :rules="[cpfRule]"></v-text-field>
            </v-col>
            <v-col cols="12">
                <v-btn :disabled="!valid" color="success" @click="validate">
                    Validar
                </v-btn>
            </v-col>
        </v-row>
    </v-form>
</template>

<script>
export default {
    data() {
        return {
            valid: true,
            name: '',
            lastName: '',
            email: '',
            cpf: '',
            snackbar: false
        };
    },
    methods: {
        validate() {
            if (this.$refs.form.validate()) {
                this.snackbar = true;
                console.log('Formulário válido');
            }
        }
    },
    computed: {
        cpfRule() {
            return (v) => {
                if (!v) return 'CPF é obrigatório';
                if (!/^\d+$/.test(v)) return 'CPF deve conter apenas números';
                if (v.length !== 11) return 'CPF deve ter 11 dígitos';
                return true;
            };
        },
        emailRule() {
            return (v) => /.+@.+\..+/.test(v) || 'O email deve ser válido';
        },
        nameRule() {
            return (v) => !!v || 'Nome é obrigatório';
        },
        lastNameRule() {
            return (v) => !!v || 'Sobrenome é obrigatório';
        }
    }
};
</script>