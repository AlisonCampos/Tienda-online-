<template>
  <div class="purchase-card"  @click="navigateToOrder">
    <img :src="purchase.product.image" alt="Producto" class="product-image" />
    <div class="purchase-info">
      <h5>{{ purchase.product.title }}</h5>
      <ul>
        <li><strong>Tracking ID:</strong> {{ purchase.orderId }}</li>
        <li><strong>Fecha:</strong> {{ purchase.date }}</li>
        <li><strong>Cantidad:</strong> {{ purchase.quantity }}</li>
        <li>
          <strong>Total:</strong> ${{ purchase.total.toFixed(2) }} <!-- Muestra el total estático -->
        </li>
        <li>
          <strong>Estado:</strong> 
          <span
            :class="{'status-delivered': purchase.delivered, 'status-pending': !purchase.delivered}"
          >
            {{ purchase.delivered ? "Entregado" : "Pendiente" }}
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "PurchaseCard",
  props: {
    purchase: {
      type: Object,
      required: true,
    },
  },
  methods: {
    navigateToOrder() {
      this.$emit("card-clicked", this.purchase.orderId); // Emite el evento con el ID de la orden
    },
  },
};
</script>

<style scoped>
.purchase-card {
  background-color: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}

.purchase-card:hover {
  transform: scale(1.03);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.product-image {
  width: 100%;
  max-height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 15px;
}

.purchase-info h5 {
  color: #013220;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}

.purchase-info ul {
  list-style: none;
  padding: 0;
  font-size: 14px;
}

.purchase-info li {
  margin-bottom: 8px;
  color: #757575;
}

.purchase-info li strong {
  color: #013220;
}

.status-delivered {
  color: #013220;
  font-weight: bold;
}

.status-pending {
  color: #ff0000;
  font-weight: bold;
}
</style>
