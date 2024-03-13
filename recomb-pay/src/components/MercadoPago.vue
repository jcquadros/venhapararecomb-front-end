<template>
    <div id="paymentBrick_container"></div>
</template>

<script>
import { loadMercadoPago } from "@mercadopago/sdk-js";

export default {
    mounted() {
        this.$nextTick(() => {
            this.loadMercadoPago();
        });
    },
    methods: {
        async loadMercadoPago() {
            await loadMercadoPago();
            const mp = new window.MercadoPago("TEST-4797abff-c66b-40b1-8656-35690e456fa2");
            this.renderPaymentBrick(mp);
        },
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
                        return new Promise((resolve, reject) => {
                            console.log("Form data:", formData);
                            fetch("/process_payment", {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json",
                                },
                                body: JSON.stringify(formData),
                            })
                                .then((response) => response.json())
                                .then((response) => {
                                    console.log(response.json());
                                    // receber o resultado do pagamento
                                    console.log('Selected payment method:', selectedPaymentMethod);
                                    resolve();
                                })
                                .catch((error) => {
                                    console.error(error);
                                    // lidar com a resposta de erro ao tentar criar o pagamento
                                    reject();
                                });
                        });
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