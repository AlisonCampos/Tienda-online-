<template>
    <div class="payment-page">
        <Navbar />
        <!-- Contenedor principal -->
        <div class="payment-content">
            <!-- Lado izquierdo: Apartados -->
            <div class="payment-left">
                <!-- Identificación -->
                <div class="payment-section">
                    <h3>Identificación</h3>
                    <form>
                        <input type="text" placeholder="Nombre completo" required />
                        <input type="email" placeholder="Correo electrónico" required />
                        <input type="tel" placeholder="Teléfono" required />
                    </form>
                </div>

                <!-- Opciones de entrega -->
                <div class="payment-section">
                    <h3>Opciones de entrega</h3>
                    <form>
                        <label>
                            <input type="radio" name="delivery-option" /> Envío estándar
                        </label>
                        <label>
                            <input type="radio" name="delivery-option" /> Envío urgente
                        </label>
                    </form>
                </div>

                <!-- Métodos de pago -->
                <div class="payment-section">
                    <h3>Métodos de pago</h3>
                    <form>
                        <label>
                            <input type="radio" name="payment-method" /> Tarjeta de crédito
                        </label>
                        <label>
                            <input type="radio" name="payment-method" /> PayPal
                        </label>
                    </form>
                </div>
            </div>

            <!-- Lado derecho: Resumen del carrito -->
            <div class="payment-right">
                <div class="cart-summary">
                    <h3>Resumen de tu compra</h3>

                    <!-- Resumen del producto -->
                    <div class="cart-item-summary">
                        <img :src="cart[0]?.images[0]" :alt="cart[0]?.title" class="cart-item-image-summary" />
                        <div class="cart-item-info">
                            <p>{{ cart[0]?.title }}</p>
                            <p>MXN $2,000.00</p>
                        </div>
                    </div>

                    <!-- Detalles de pago -->
                    <div class="cart-details">
                        <p>Subtotal: <span>$2,000.00</span></p>
                        <p>Envío: <span>$150.00</span></p>
                        <p>Total: <span>$2,150.00</span></p>
                    </div>

                    <!-- Apartados adicionales -->
                    <div class="cart-details">
                        <div class="cart-payment">
                            <i class="fas fa-credit-card"></i>
                            <h4>Tarjetas de crédito aceptadas:</h4>
                            <p>Visa, American Express y MasterCard</p>
                        </div>
                        <div class="cart-shipping">
                            <i class="fas fa-shipping-fast"></i>
                            <h4>Envío estándar de cortesía</h4>
                        </div>
                        <div class="cart-returns">
                            <i class="fas fa-undo"></i>
                            <h4>Cambios y devoluciones:</h4>
                            <p>Sin costo</p>
                        </div>
                    </div>
                </div>

                <!-- Botón de Finalizar Compra -->
                <button class="btn btn-primary" @click="finishPayment">Finalizar Compra</button>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
    name: "Payment",
    components: {
        Navbar,
    },
    data() {
        return {
            cart: JSON.parse(localStorage.getItem("cart")) || [], // Recuperar el carrito del localStorage
        };
    },
    methods: {
        finishPayment() {
            this.$router.push('/order-status');
        }
    }
}
</script>

<style scoped>
.payment-page {
    font-family: 'Arial', sans-serif;

}

/* Contenido principal */
.payment-content {
    display: flex;
    justify-content: space-between;
    width: 100%;
}

/* Lado izquierdo: Apartados */
.payment-left {
    flex: 1;
    padding: 20px;
    background-color: #FFFFFF;
    border-radius: 8px;
    border: 1px solid #E0E0E0;
}

.payment-section {
    margin-bottom: 30px;
}

.payment-section h3 {
    font-size: 20px;
    margin-bottom: 10px;
}

.payment-section input,
.payment-section label {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #E0E0E0;
    border-radius: 5px;
}

.payment-section label {
    display: block;
    margin-bottom: 5px;
}

.payment-section input[type="radio"] {
    width: auto;
    margin-right: 10px;
}

.payment-section input:focus {
    border-color: #013220;
}

/* Lado derecho: Resumen del carrito */
.payment-right {
    flex: 1;
    padding: 20px;
    background-color: #FFFFFF;
    border-radius: 8px;
    border: 1px solid #E0E0E0;
}

.cart-summary {
    margin-bottom: 30px;
}

.cart-item-summary {
    display: flex;
    gap: 10px;
    align-items: center;
}

.cart-item-image-summary {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 5px;
}

.cart-item-info p {
    margin: 0;
    font-size: 14px;
    color: #333;
}

.cart-details {
    margin-top: 20px;
}

.cart-details p {
    font-size: 16px;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
}

.cart-details .cart-payment,
.cart-details .cart-shipping,
.cart-details .cart-returns {
    display: flex;
    gap: 10px;
    align-items: center;
    margin-bottom: 15px;
}

.cart-details i {
    font-size: 24px;
    color: #757575;
}

.cart-details h4 {
    margin: 0;
    font-size: 14px;
    color: #333;
}

/* Botón Finalizar Compra */
.btn-primary {
    background-color: #013220;
    color: #FFFFFF;
    padding: 15px 30px;
    border-radius: 8px;
    width: 100%;
    cursor: pointer;
    text-align: center;
    border: none;
}

.btn-primary:hover {
    background-color: #1C1C1C;
}
</style>