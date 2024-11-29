<template>
  <div class="purchase-list">
    <Navbar />
    <div class="container py-4">
      <h1 class="text-center mb-4">Mis Compras</h1>

      <!-- Listado de compras -->
      <div v-if="purchases.length" class="row">
        <div v-for="(purchase, index) in purchases" :key="index" class="col-md-6 col-lg-4 mb-4">
          <PurchaseCard :purchase="purchase" @card-clicked="goToOrder" />
        </div>
      </div>

      <div v-else class="text-center">
        <p class="no-purchases">No has realizado compras aún.</p>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import PurchaseCard from "@/components/PurchaseCard.vue";

export default {
  name: "PurchaseList",
  components: {
    Navbar,
    PurchaseCard,
  },
  data() {
    return {
      purchases: [], 
    };
  },
  mounted() {
    this.loadPurchases();
  },
  methods: {
    loadPurchases() {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      this.purchases = cart.map((item) => ({
        product: {
          title: item.title,
          image: item.images[0], 
          price: 150.50, 
        },
        orderId: "1234567890" + item.id, 
        date: "" + new Date().toLocaleDateString(), 
        quantity: 1,
        total: 150.50, 
        delivered: false, 
      }));
    },
    goToOrder(orderId) {
      this.$router.push({ path: "/order"});
    },
  },
};
</script>



<style scoped>
.purchase-list {
  background-color: #ffffff;
  min-height: 100vh;
}

h1 {
  color: #013220;
  font-weight: bold;
}

.no-purchases {
  color: #757575;
  font-size: 18px;
  margin-top: 20px;
}
</style>


