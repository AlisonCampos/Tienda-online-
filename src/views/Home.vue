<template>
  <div class="home">
    <Navbar />
    <main class="main-content">
      <section class="hero">
        <h2 class="hero-title">Elegancia y sofisticación en cada detalle</h2>
        <p class="hero-subtitle">Descubre nuestra selección exclusiva de prendas de gala.</p>
       
      </section>

      <!-- Product Grid -->
      <section class="container">
        <div class="row row-cols-1 row-cols-md-4 g-4">
          <ProductCard v-for="(product, index) in products" :key="index" :title="product.title" :image="product.image"
            :type="product.type" />
        </div>
      </section>
    </main>
    <footer>
      <p>© 2024 Zone Fashion. Todos los derechos reservados.</p>
      <p>Contacto: 556789123456</p>
      <p>Correo: zonefashioncontacto@gmail.com</p>
    </footer>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import ProductCard from "@/components/ProductCard.vue";
export default {
  components: {
    Navbar,
    ProductCard
  },
  name: "Home",
  data() {
    return {
      products: [
        { title: "Trajes de noche", image: " https://www.pronovias.com/media/catalog/product/s/p/sparkle_2418_b.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=747&width=560&canvas=560:747 ", type: "trajes-de-noche" },
        { title: "Vestidos de gala", image: "https://www.pronovias.com/media/catalog/product/e/s/essential_2431_b.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=747&width=560&canvas=560:747 ", type: "vestidos-de-gala" },
        { title: "Vestidos de cóctel", image: "https://ss510.liverpool.com.mx/sm/1149003939.jpg", type: "vestidos-de-coctel" },
        { title: "Trajes de gala", image: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXil4lodK3quPJjRTen4jekGQzuODDp_ZTig&s", type: "trajes-de-gala" }
      ]
    };
  },
};
</script>

<style scoped>
/* Variables de color */
:root {
  --white: #ffffff;
  --light-gray: #e0e0e0;
  --gray: #757575;
  --dark-green: #013220;
  --black: #1c1c1c;
}

h2 {
  color: var(--dark-green);
}

p {
  margin-top: 1rem;
  font-size: 1.2rem;
  color: var(--gray);
}

.hero {
  text-align: center;
  padding: 2rem;
  background-color: var(--dark-green);
  color: var(--white);
}

.hero-title {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: var(--white);
}

.hero-subtitle {
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

.cta-button {
  padding: 0.8rem 1.5rem;
  background-color: var(--white);
  color: var(--dark-green);
  border: none;
  font-weight: bold;
  border-radius: 5px;
  text-decoration: none;
}

.cta-button:hover {
  background-color: var(--light-gray);
}

.container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  padding: 2rem;
}

.footer {
  text-align: center;
  background-color: var(--black);
  color: var(--white);
  padding: 1rem;
  margin-top: auto;
}
</style>
