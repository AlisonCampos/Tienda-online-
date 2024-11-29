<template>
  <div class="home">
    <Navbar />

    <!-- Contenido de búsqueda -->
    <div class="container mt-5">
      <!-- Barra de búsqueda -->
      <div class="search-bar mb-5 d-flex justify-content-center position-relative">
        <input type="text" v-model="searchQuery" @input="filterProducts" class="form-control search-input shadow-sm"
          placeholder="Buscar tendencias..." />
        <!-- Lista de sugerencias -->
        <ul v-if="searchQuery && filteredProducts.length > 0" class="suggestions-list list-group shadow-sm">
          <li v-for="(product, index) in filteredProducts" :key="index" class="list-group-item suggestion-item"
            @click="selectProduct(product)">
            {{ product.title }}
          </li>
        </ul>
      </div>

      <!-- Título de Tendencias -->
      <h2 class="text-center mb-4 title-section">Búsqueda de Tendencias</h2>

      <!-- Grid de Productos -->
      <div class="row">
        <div v-for="(product, index) in filteredProducts" :key="index"
          class="col-lg-3 col-md-6 mb-4 d-flex justify-content-center">
          <ProductCard :title="product.title" :image="product.image" :type="product.type" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import ProductCard from "@/components/ProductCard.vue";

export default {
  name: "Search",
  components: {
    Navbar,
    ProductCard,
  },
  data() {
    return {
      searchQuery: "", // Consulta de búsqueda
      trendingProducts: [
        { title: "Trajes de noche", image: "https://via.placeholder.com/300", type: "trajes-de-noche" },
        { title: "Vestidos de gala", image: "https://via.placeholder.com/300", type: "vestidos-de-gala" },
        { title: "Vestidos de cóctel", image: "https://via.placeholder.com/300", type: "vestidos-de-coctel" },
        { title: "Trajes de gala", image: "https://via.placeholder.com/300", type: "trajes-de-gala" },
      ],
      filteredProducts: [], // Productos filtrados
    };
  },
  methods: {
    // Filtrar productos en base a la consulta de búsqueda
    filterProducts() {
      const query = this.searchQuery.trim().toLowerCase();
      if (query) {
        this.filteredProducts = this.trendingProducts.filter((product) =>
          product.title.toLowerCase().includes(query)
        );
      } else {
        this.filteredProducts = []; // Vaciar sugerencias si no hay búsqueda
      }
    },
    // Seleccionar un producto de la lista de sugerencias
    selectProduct(product) {
      this.searchQuery = product.title; // Mostrar el título del producto en el input
      this.filteredProducts = [product]; // Mostrar solo el producto seleccionado
    },
  },
  mounted() {
    this.filteredProducts = []; // Inicialmente no mostrar productos
  },
};
</script>

<style scoped>
/* Paleta de colores aplicada con diseño refinado */

/* Barra de búsqueda */
.search-input {
  width: 100%;
  max-width: 600px;
  border-radius: 50px;
  padding: 10px 20px;
  background-color: #E0E0E0;
  border: 2px solid #757575;
  color: #1C1C1C;
  font-size: 1rem;
  transition: border-color 0.3s ease;
  position: relative;
}

.search-input:focus {
  border-color: #013220;
  outline: none;
}

/* Lista de sugerencias */
.suggestions-list {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 600px;
  background-color: #FFFFFF;
  border-radius: 0 0 10px 10px;
  border: 1px solid #E0E0E0;
  z-index: 1000;
  overflow: hidden;
}

.suggestion-item {
  padding: 10px 15px;
  cursor: pointer;
  color: #1C1C1C;
  transition: background-color 0.2s ease;
}

.suggestion-item:hover {
  background-color: #E0E0E0;
}

/* Título */
.title-section {
  font-size: 2rem;
  font-weight: bold;
  color: #013220;
}
</style>
