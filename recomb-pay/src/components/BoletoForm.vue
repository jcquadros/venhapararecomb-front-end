<template>
    <!-- Formulário usando Vuetify -->
    <v-form ref="form" v-model="valid" lazy-validation>
        <v-row>
            <!-- Campo de Nome -->
            <v-col cols="12" md="6">
                <v-text-field v-model="formData.name" label="Nome" required :rules="[nameRule]"></v-text-field>
            </v-col>
            <!-- Campo de Sobrenome -->
            <v-col cols="12" md="6">
                <v-text-field v-model="formData.lastName" label="Sobrenome" required :rules="[lastNameRule]"></v-text-field>
            </v-col>
            <!-- Campo de Email -->
            <v-col cols="12" md="6">
                <v-text-field v-model="formData.email" label="Email" required :rules="[emailRule]"></v-text-field>
            </v-col>
            <!-- Campo de CPF -->
            <v-col cols="12" md="6">
                <v-text-field v-model="formData.cpf" label="CPF" required :rules="[cpfRule]"></v-text-field>
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
    data : () => ({
        valid: true,
        formData: {
            name: '',
            lastName: '',
            email: '',
            cpf: '',
        },
    }),
    computed: {
        // regras de validação
        nameRule() {
            return (v) => !!v || 'Nome é obrigatório';
        },
        lastNameRule() {
            return (v) => !!v || 'Sobrenome é obrigatório';
        },
        emailRule() {
            return (v) => /.+@.+\..+/.test(v) || 'O email deve ser válido';
        },
        cpfRule() {
            return (v) => {
                if (!v) return 'CPF é obrigatório';
                if (!/^\d+$/.test(v)) return 'CPF deve conter apenas números';
                if (v.length !== 11) return 'CPF deve ter 11 dígitos';
                return true;
            };
        },
    },
    methods: {
        validate() {
            if (this.$refs.form.validate()) {
                this.$emit('validated', true, this.formData);
            }
        },
    },
};
</script>