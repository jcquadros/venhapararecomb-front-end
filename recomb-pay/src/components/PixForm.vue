<template>
    <v-card>
        <v-card-title>Formulário de Pix</v-card-title>
        <v-card-text>
            <v-form ref="form" v-model="valid">
            </v-form>
        </v-card-text>
        <v-card-actions>
            <v-spacer></v-spacer>
            <!-- Botão de Validar -->
            <v-btn @click.prevent.once="validate" color="primary">Confirmar Pagamento</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    data() {
        return {
            valid: true,
            formData: {
                // nao contem campos
            },
        };
    },
    methods: {
        // Metodo para validar o formulario
        validate() {
            if (this.$refs.form.validate()) {
                console.log('Formulário válido');
                this.$emit('validated', true, this.formData);
            }
        },
    },
};
</script>