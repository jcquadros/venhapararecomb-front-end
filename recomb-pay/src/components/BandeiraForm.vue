<template>
        <v-select
            v-model="selectedBandeira"
            :items="bandeiras"
            label="Bandeira"
            required
            :rules="[bandeiraRule]"
            @change="emitBandeira"
        ></v-select>
</template>

<script>
export default {
    emits: ['bandeiraSelected'],
    data() {
        return {
            selectedBandeira: '',
            bandeiras: ['Mastercard', 'Visa', 'Elo']
        };
    },
    computed: {
        bandeiraRule() {
            return (v) => !!v || 'Bandeira is required';
        }
    },
    methods: {
        emitBandeira() {
            this.$emit('bandeiraSelected', this.selectedBandeira);
        }
    }
};
</script>
