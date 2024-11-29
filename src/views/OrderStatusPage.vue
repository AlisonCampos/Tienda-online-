<template>
    <div class="home">
        <Navbar />
        <div class="order-status-page">
            <!-- Contenedor principal -->
            <div class="order-status-container">
                <div class="order-status-header">
                    <h1>Estado de tu Pedido</h1>
                </div>

                <div class="order-status-content">
                    <!-- Información del producto -->
                    <div class="order-status-product">
                        <img :src="cart[0]?.images[0]" alt="Imagen del Producto" class="order-product-image" />
                        <div class="order-product-info">
                            <h3>{{ cart[0]?.title }}</h3>
                        </div>
                    </div>

                    <!-- Detalles del pedido -->
                    <div class="order-details">
                        <h4>Detalles del Envío</h4>
                        <p>Estado del pedido: <span>{{ orderStatus }}</span></p>
                        <p>Tracking ID: <span>{{ trackingID }}</span></p>
                        <p>Fecha estimada de entrega: <span>{{ estimatedDeliveryDate }}</span></p>
                    </div>
                    <div  class="order-extra-details">
                        <h4>Detalles adicionales</h4>
                        <p>Total de la compra: <span>${{ total.toFixed(2) }}</span></p>
                        <p>Método de pago: <span>{{ paymentMethod }}</span></p>
                    </div>

                    <button class="btn btn-primary"  @click="toggleDetails">
                       Seguimiento del pedido 
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
    name: "OrderStatus",
    components: {
        Navbar,
    },
    data() {
        return {
            cart: JSON.parse(localStorage.getItem("cart")) || [], 
            orderStatus: 'En preparación', 
            trackingID: '1234567890',
            estimatedDeliveryDate: '2024-12-01',
            showDetails: false, 
            total: 499.99, 
            paymentMethod: "Tarjeta de crédito", 
        };
    },
    methods: {
        toggleDetails() {
            this.$router.push('/order');
        },
    },
};
</script>

<style scoped>
.order-status-page {
    font-family: 'Arial', sans-serif;
    max-width: 1200px;
    margin: 30px auto;
    display: flex;
    justify-content: center;
}

.order-status-container {
    justify-content: center;
    min-height: 100vh;
    max-width: 800px;
    background-color: #FFFFFF;
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    border: 1px solid #E0E0E0;
}

.order-status-header {
    background-color: #013220;
    color: #FFFFFF;
    text-align: center;
    padding: 20px 10px;
    justify-content: center;
}

.order-status-header h1 {
    margin: 0;
    font-size: 24px;
    font-weight: bold;
}

.order-status-content {
    padding: 20px;
}

.order-status-product {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    gap: 20px;
    border-bottom: 1px solid #E0E0E0;
    padding-bottom: 20px;
}

.order-product-image {
    width: 120px;
    height: 120px;
    object-fit: cover;
    border-radius: 8px;
    border: 1px solid #E0E0E0;
}

.order-product-info h3 {
    font-size: 20px;
    font-weight: bold;
    color: #1C1C1C;
    margin: 0;
}

.order-details {
    margin-top: 20px;
}

.order-details h4 {
    font-size: 18px;
    margin-bottom: 15px;
    color: #013220;
    border-bottom: 2px solid #E0E0E0;
    padding-bottom: 5px;
}

.order-details p {
    font-size: 16px;
    margin: 8px 0;
    color: #757575;
}

.order-details span {
    font-weight: bold;
    color: #1C1C1C;
}

.btn-primary {
    background-color: #013220;
    color: #FFFFFF;
    padding: 15px 20px;
    border-radius: 8px;
    border: none;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin-top: 20px;
    display: block;
    text-align: center;
    width: 100%;
    outline: none; /* Evita el borde azul al hacer clic */
}

.btn-primary:focus {
    outline: none; /* Evita el borde azul cuando está enfocado */
}

.btn-primary:hover {
    background-color: #1C1C1C;
}


.order-extra-details {
    margin-top: 20px;
    background-color: #E0E0E0;
    padding: 15px;
    border-radius: 8px;
    border: 1px solid #E0E0E0;
}

.order-extra-details h4 {
    font-size: 18px;
    color: #013220;
    margin-bottom: 10px;
}

.order-extra-details p {
    font-size: 16px;
    margin: 8px 0;
    color: #757575;
}

.order-extra-details span {
    font-weight: bold;
    color: #1C1C1C;
}
</style>
