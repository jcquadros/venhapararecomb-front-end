<template>
    <v-form ref="form" v-model="valid">
        <v-row>
            <!-- Botao validar -->
            <v-col cols="12">
                <v-spacer></v-spacer>
                <v-btn @click.prevent.once="validate" color="primary">Confirmar Pagamento</v-btn>
                
            </v-col>
        </v-row>
    </v-form>
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