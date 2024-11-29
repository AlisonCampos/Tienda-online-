<template>
    <div class="cart">
        <Navbar />

        <!-- Contenedor principal -->
        <div class="cart-content">
            <!-- Lado izquierdo: Imagen del producto -->
            <div class="cart-left">
                <div class="cart-left-image">
                    <img :src="cart[0]?.images[0]" :alt="cart[0]?.title" class="cart-item-image" />
                    <div class="cart-image-zoom">
                        <i class="fas fa-search-plus"></i>
                    </div>
                </div>
            </div>

            <!-- Detalles del producto -->
            <div class="cart-left-info">
                <h2>{{ cart[0]?.title }}</h2>
                <p>Color: Verde Esmeralda</p>
                <p>Talla: S</p>
                <div class="cart-left-alert">
                    <i class="fas fa-info-circle"></i>
                    <span>
                        El producto será entregado por una de nuestras tiendas.
                    </span>
                </div>
                <!-- Alineación de select y precio -->
                <div class="cart-left-actions">
                    <div class="left-align">
                        <select>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>
                    <div class="right-align">
                        <span>MXN $2,000.00</span>
                    </div>
                </div>
                <div class="cart-left-buttons">
                    <!-- Botones con iconos -->
                    <button class="btn btn-secondary">
                        <i class="fas fa-heart"></i> Agregar a la lista de deseos
                    </button>
                    <button class="btn btn-danger" @click="removeFromCart(0)">
                        <i class="fas fa-trash"></i> Eliminar
                    </button>
                </div>
            </div>

            <!-- Resumen del pedido -->
            <div class="cart-right">
                <div class="cart-summary">
                    <h3>Resumen de Pedido</h3>
                    <div class="summary-details">
                        <p>Subtotal: <span>${{ cartTotal.toFixed(2) }}</span></p>
                        <p>Envío: <span>$150.00</span></p>
                        <p>Total: <span>${{ (cartTotal + 150).toFixed(2) }}</span></p>
                    </div>
                    <div class="summary-buttons">
                        <button class="btn btn-primary summary-checkout" @click="checkout">Avanzar al Pago</button>
                        <button class="btn btn-secondary summary-paypal">Paypal</button>
                    </div>
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
        </div>
    </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
    name: "Cart",
    components: {
        Navbar,
    },
    data() {
        return {
            cart: JSON.parse(localStorage.getItem("cart")) || [], // Recuperar el carrito del localStorage
        };
    },
    computed: {
        cartTotal() {
            // Calcular el total de los precios de los productos en el carrito
            return this.cart.reduce((total, product) => total + product.price, 0);
        },
    },
    methods: {
        removeFromCart(index) {
            // Eliminar el producto del carrito
            this.cart.splice(index, 1);
            localStorage.setItem("cart", JSON.stringify(this.cart)); // Actualizar el localStorage
        },
        checkout() {
            this.$router.push("/payment");
        },
    },
};
</script>
<style scoped>
.cart {
    font-family: 'Arial', sans-serif;
    color: #1C1C1C;
}

.cart-content {
    display: flex;
    gap: 20px;
    margin-top: 20px;
    justify-content: space-between;
}

/* Lado izquierdo */
.cart-left {
    flex: 2;
}

.cart-left-image {
    position: relative;
    width: 100%;
    height: 100%;
    max-width: 500px;
    margin: 0 auto;
    border-radius: 8px;
    overflow: hidden;
    transition: transform 0.3s ease;
}

.cart-item-image {
    width: 100%;
    height: auto;
    transition: transform 0.3s ease;
}

/* Efecto de zoom al pasar el mouse */
.cart-left-image:hover .cart-item-image {
    transform: scale(1.2);
}

.cart-image-zoom {
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 50%;
    padding: 5px;
    cursor: pointer;
}

.cart-image-zoom i {
    font-size: 16px;
    color: #333;
}

/* Detalles del producto */
.cart-left-info {
    padding: 20px;
    border: 1px solid #E0E0E0;
    border-radius: 8px;
    background-color: #FFFFFF;
}

.cart-left-info h2 {
    font-size: 20px;
    margin-bottom: 10px;
}

.cart-left-alert {

    align-items: center;

    background-color: #FFFFFF;
    border: 1px solid #757575;
    padding: 10px;
    border-radius: 8px;

}

.cart-left-alert i {
    font-size: 16px;
    color: #013220;
}

.cart-left-actions {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
}

.left-align select {
    width: 60px;
    padding: 5px;
    border-radius: 5px;
}

.right-align {
    text-align: right;
}

.cart-left-buttons {
    display: flex;
    gap: 10px;
    margin-top: 20px;
}

.cart-left-buttons .btn i {
    margin-right: 5px;
}

/* Resumen del pedido */
.cart-right {
    flex: 1;
}

.cart-summary {
    padding: 20px;
    border: 1px solid #E0E0E0;
    border-radius: 8px;
    background-color: #FFFFFF;
}

.cart-summary h3 {
    font-size: 18px;
    margin-bottom: 20px;
}

.summary-buttons {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.btn-primary {
    background-color: #013220;
    color: #FFFFFF;
}

.btn-secondary {
    background-color: #757575;
    color: #FFFFFF;
}

/* Apartados adicionales */
.cart-details>div {
    padding: 15px;
    border: 1px solid #E0E0E0;
    border-radius: 8px;
    background-color: #F9F9F9;
    margin-top: 10px;
    display: flex;
    align-items: center;
    gap: 15px;
}

.cart-details i {
    font-size: 24px;
    color: #757575;
}
</style>