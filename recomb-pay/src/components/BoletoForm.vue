<template>
    <v-row>
        <v-col cols="12" md="6">
            <v-form @submit.prevent="submitForm">
                <v-text-field v-model="name" label="Name" required :rules="[nameRule]"></v-text-field>
                <v-text-field v-model="lastName" label="Last Name" required :rules="[lastNameRule]"></v-text-field>
            </v-form>
        </v-col>
        <v-col cols="12" md="6">
            <v-form @submit.prevent="submitForm">
                <v-text-field v-model="cpf" label="CPF" required :rules="[cpfRule]"></v-text-field>
                <v-text-field v-model="email" label="Email" required :rules="[emailRule]"></v-text-field>
            </v-form>
        </v-col>
        <v-col cols="12">
            <v-btn type="submit" color="primary">Submit</v-btn>
        </v-col>
    </v-row>     
        
</template>

<script>
export default {
    data() {
        return {
            name: '',
            lastName: '',
            cpf: '',
            email: '',
        };
    },
    computed: {
        cpfRule() {
            return (v) => {
                if (!v) return 'CPF is required';
                if (v.length !== 11) return 'CPF must have 11 digits';
                if (!/^\d+$/.test(v)) return 'CPF must contain only numbers';
                return true;
            };
        },
        emailRule() {
            return (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid';
        },
        nameRule() {
            return (v) => !!v || 'Name is required';
        },
        lastNameRule() {
            return (v) => !!v || 'Last Name is required';
        },
    },
    methods: {
        submitForm() {
            console.log(this.name, this.lastName, this.cpf, this.email);
            console.log('Form submitted!');
        }
    },
};
</script>