<template>
  <div class="order-tracking">
    <Navbar />
    <div class="container py-4">
      <h1 class="text-center mb-4">Seguimiento de Pedido</h1>

      <!-- Barra de estados -->
      <div class="progress-container">
        <div class="step" :class="{ active: currentStep >= 1 }">
          <div class="circle">1</div>
          <p>Procesando</p>
        </div>
        <div class="step" :class="{ active: currentStep >= 2 }">
          <div class="circle">2</div>
          <p>En Envío</p>
        </div>
        <div class="step" :class="{ active: currentStep >= 3 }">
          <div class="circle">3</div>
          <p>En Ruta</p>
        </div>
        <div class="step" :class="{ active: currentStep >= 4 }">
          <div class="circle">4</div>
          <p>Entregado</p>
        </div>
      </div>

      <!-- Detalle del pedido -->
      <div class="order-details mt-5 d-flex align-items-start">
        <!-- Imagen del producto -->
        <img
          :src="cart[0]?.images?.[0] || defaultImage"
          alt="Imagen del Producto"
          class="product-image me-4"
        />

        <!-- Información del pedido -->
        <div class="order-info">
          <h4>Detalles del Pedido</h4>
          <ul>
            <li><strong>Tracking ID:</strong> {{ order.id }}</li>
            <li><strong>Fecha:</strong> {{ order.date }}</li>
            <li><strong>Producto:</strong> {{ cart[0]?.title || "Producto no disponible" }}</li>
            <li><strong>Precio:</strong> ${{ cart[0]?.price?.toFixed(2) || "0.00" }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "OrderTracking",
  components: {
    Navbar,
  },
  data() {
    return {
      cart: JSON.parse(localStorage.getItem("cart")) || [], 
      currentStep: 2, // Cambia este valor para representar el estado actual (1 a 4)
      order: {
        id: "1234567890",
        date: "25 de noviembre de 2024",
      },
      defaultImage:
        "https://via.placeholder.com/180?text=Imagen+no+disponible", // Imagen por defecto
    };
  },
};
</script>

<style scoped>
/* Fondo general */
.order-tracking {
  background-color: #ffffff;
  min-height: 100vh;
}

/* Título */
h1 {
  color: #013220;
  font-weight: bold;
}

/* Barra de progreso */
.progress-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin: 40px 0;
}

.step {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.step .circle {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #e0e0e0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #757575;
  font-weight: bold;
  font-size: 18px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.step.active .circle {
  background-color: #013220;
  color: #ffffff;
}

.step p {
  margin-top: 10px;
  font-size: 16px;
  color: #757575;
  font-weight: bold;
}

.step.active p {
  color: #013220;
}

/* Línea de conexión */
.progress-container::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 5%;
  right: 5%;
  height: 4px;
  background-color: #e0e0e0;
  z-index: -1;
}

.step.active ~ .step::before {
  background-color: #013220;
}

.step::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  right: -50%;
  height: 4px;
  background-color: inherit;
  transform: translateY(-50%);
  z-index: -1;
}

.step:first-child::before {
  left: 0;
}

.step:last-child::before {
  right: 0;
}

/* Detalles del pedido */
.order-details {
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 900px;
  margin: auto;
}

.order-info {
  color: #1c1c1c;
}

.order-info h4 {
  color: #013220;
  font-size: 20px;
  font-weight: bold;
}

.order-info ul {
  list-style: none;
  padding: 0;
}

.order-info li {
  margin-bottom: 10px;
  font-size: 16px;
}

.order-info li strong {
  color: #013220;
}

.product-image {
  width: 180px;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>
