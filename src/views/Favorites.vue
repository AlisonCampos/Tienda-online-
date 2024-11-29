<template>
  <div class="home">
    <Navbar />
    <div class="container py-4">
      <h1 class="text-center">Mis Favoritos</h1>

      <!-- Grid de productos favoritos -->
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div v-for="(product, index) in staticFavorites" :key="index" class="col">
          <ProductCardWithFavorite
            :id="product.id"
            :title="product.title"
            :image="product.image"
            :price="product.price"
            :isFavorite="true"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import ProductCardWithFavorite from "@/components/ProductCardWithFavorite.vue";

export default {
  name: "Favorites",
  components: {
    Navbar,
    ProductCardWithFavorite,
  },
  data() {
    return {
      // Datos estáticos de favoritos
      staticFavorites: [
        {
          id: "1",
          title: "Vestido de Gala Rosa",
          image: "https://ariststyles.com/cdn/shop/files/a0893_blush_1_n.jpg?v=1709276407&width=1445",
          price: 2500.0,
        },
        {
          id: "7",
          title: "Traje Formal Azul Marino",
          image: "https://i.pinimg.com/236x/29/23/2a/29232ac1ce0633baf9b938d06919cc30.jpg",
          price: 3200.0,
        },
        {
          id: "8",
          title: "Conjunto Violeta Dama",
          image: "https://i.pinimg.com/736x/2a/f2/87/2af287cdd3a9b6c536b97381789df13c.jpg",
          price: 1800.0,
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Estilos específicos para la página */
.text-center {
  color: #1C1C1C;
}

.btn-dark {
  background-color: #013220;
  border: none;
}

.btn-dark:hover {
  background-color: #016A34;
}
</style>
