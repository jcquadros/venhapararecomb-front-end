<template>
    <!-- Contêiner onde o formulário de pagamento será renderizado -->
    <div id="paymentBrick_container"></div>
</template>

<script>
import { loadMercadoPago } from "@mercadopago/sdk-js";

export default {
    mounted() {
        this.loadMercadoPago();
    },
    methods: {
        // Função para carregar o MercadoPago assincronamente
        async loadMercadoPago() {
            await loadMercadoPago();
            const mp = new window.MercadoPago("TEST-4797abff-c66b-40b1-8656-35690e456fa2");
            this.renderPaymentBrick(mp);
        },
        // Função para renderizar o formulário de pagamento do retirado da documetação do mercado pago
        renderPaymentBrick(mp) {
            const bricksBuilder = mp.bricks();
            const settings = {
                initialization: {
                    amount: 100,
                    preferenceId: "<PREFERENCE_ID>",
                },
                customization: {
                    paymentMethods: {
                        ticket: "all",
                        bankTransfer: "all",
                        creditCard: "all",
                    },
                },
                callbacks: {
                    onReady: () => {
                        // callback chamado quando o Brick estiver pronto
                    },
                    onSubmit: async ({ selectedPaymentMethod, formData }) => {
                        // callback chamado ao clicar no botão de submissão dos dados
                        console.log(selectedPaymentMethod, formData);
                    },
                    onError: (error) => {
                        // callback chamado para todos os casos de erro do Brick
                        console.error(error);
                    },
                },
            };

            window.paymentBrickController = bricksBuilder.create(
                "payment",
                "paymentBrick_container",
                settings
            );
        },
    },
    beforeUnmount() {
        if (this.paymentBrickController) {
            this.paymentBrickController.unmount();
        }
    },
};
</script>