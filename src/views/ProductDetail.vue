<template>
  <div class="home">
    <Navbar />
    <div class="product-details" v-if="product">
      <!-- Carrusel de imágenes -->
      <div class="product-image">
        <div class="carousel">
          <div v-for="(image, index) in product.images" :key="index" class="carousel-item"
            :class="{ active: index === currentImageIndex }">
            <img :src="image" :alt="product.title" class="details-image" @mouseover="zoomImage(true)"
              @mouseleave="zoomImage(false)" :style="{ transform: isImageZoomed ? 'scale(1.2)' : 'scale(1)' }" />
          </div>
        </div>
        <!-- Navegación del carrusel -->
        <button @click="prevImage" class="carousel-button prev">‹</button>
        <button @click="nextImage" class="carousel-button next">›</button>
      </div>

      <!-- Información del producto centrada a la derecha -->
      <div class="details-info">
        <!-- Tallas y corazón de favoritos en la parte superior -->
        <div class="top-info">
          <div class="size-buttons">
            <button v-for="size in product.sizes" :key="size"
              :class="['btn', 'btn-outline-secondary', 'size-button', { selected: selectedSize === size }]"
              @click="selectSize(size)">
              {{ size }}
            </button>
          </div>
          <button class="btn btn-link favorite-button" @click="toggleFavorite">
            <i :class="isFavorite ? 'fas fa-heart' : 'far fa-heart'"></i>
          </button>
        </div>

        <!-- Nombre del producto, precio y botón de agregar al carrito -->
        <h1 class="details-title">{{ product.title }}</h1>
        <p class="details-price">Precio: ${{ product.price.toFixed(2) }}</p>
        <button class="btn btn-dark add-to-cart" @click="addToCart" style="background-color: #013220;">
          Agregar al carrito
        </button>

        <!-- Descripción del producto -->
        <p class="details-description">{{ product.description }}</p>
      </div>
    </div>

    <div v-else>
      <p>Cargando detalles del producto...</p>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "ProductDetail",
  components: {
    Navbar,
  },
  data() {
    return {
      product: null, // Información del producto
      isHovered: false, // Para saber si el cursor está sobre la imagen
      isFavorite: false, // Para manejar si el producto está en favoritos
      currentImageIndex: 0, // Índice de la imagen actual en el carrusel
      selectedSize: null, // Talla seleccionada
      isImageZoomed: false, // Para controlar el zoom de la imagen
      cart: [] // Carrito de compras
    };
  },
  methods: {
    fetchProduct() {
      // Obtener el ID desde los parámetros de la URL
      const productId = this.$route.params.id;

      // Aquí simulas obtener los datos de productos, pero en un proyecto real deberías obtener los datos de una API o desde el estado global
      const products = [
        {
          id: "1",
          title: "Vestido Rosa Gala",
          images: [
            "https://ariststyles.com/cdn/shop/files/a0893_blush_1_n.jpg?v=1709276407&width=1445",
            "https://via.placeholder.com/400x400?text=Vestido+Rojo+Gala+2"
          ],
          price: 250.99,
          description: "Elegante vestido rosa.",
          sizes: ["S", "M", "L", "XL"]
        },
        {
          id: "2",
          title: "Vestido Azul Rey Gala",
          images: [
            "https://almudenaboutique.com/wp-content/uploads/2024/05/vestido-largo-azul-rey-fiesta-evento-noche-5.jpg",
            "https://almudenaboutique.com/wp-content/uploads/2024/05/vestido-largo-azul-rey-fiesta-evento-noche-3.jpg"
          ],
          price: 199.99,
          description: "Vestido azul ideal para bodas.",
          sizes: ["M", "L", "XL"]
        },
        {
          id: "3",
          title: "Vestido Azul Gala",
          images: [
            "https://i.pinimg.com/736x/93/6e/d9/936ed99e0d9bbf5e130ba64af9d6cd8c.jpg",
            "https://via.placeholder.com/400x400?text=Vestido+Negro+Cóctel+2"
          ],
          price: 150.50,
          description: "Vestido negro para ocasiones formales.",
          sizes: ["S", "M", "L"]
        },
        {
          id: "4",
          title: "Vestido Cóctel Rosa",
          images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjPavsBvxfNBsGUYixEJNl7D_K-xYoW3n2XQ&s",
            "https://via.placeholder.com/400x400?text=Vestido+Negro+Cóctel+2"
          ],
          price: 150.50,
          description: "Vestido rosa para ocasiones formales.",
          sizes: ["S", "M", "L"]
        },
        {
          id: "5",
          title: "Vestido Cóctel Rojo",
          images: [
            "https://m.media-amazon.com/images/I/81kgRE187JL.AC_UY350.jpg",
            "https://via.placeholder.com/400x400?text=Vestido+Negro+Cóctel+2"
          ],
          price: 150.50,
          description: "Vestido rojo para ocasiones formales.",
          sizes: ["S", "M", "L"]
        },
        {
          id: "6",
          title: "Traje Negro Noche",
          images: [
            "https://i.pinimg.com/550x/f0/e5/46/f0e54667547705acf196df9948799864.jpg",
            "https://via.placeholder.com/400x400?text=Vestido+Negro+Cóctel+2"
          ],
          price: 150.50,
          description: "Traje negro para ocasiones formales.",
          sizes: ["S", "M", "L"]
        },
        {
          id: "7",
          title: "Traje Azul Noche",
          images: [
            "https://i.pinimg.com/236x/29/23/2a/29232ac1ce0633baf9b938d06919cc30.jpg",
            "https://via.placeholder.com/400x400?text=Vestido+Negro+Cóctel+2"
          ],
          price: 150.50,
          description: "Traje azul para ocasiones formales.",
          sizes: ["S", "M", "L"]
        },
        {
          id: "8",
          title: "Conjunto Violeta Dama",
          images: [
            "https://i.pinimg.com/736x/2a/f2/87/2af287cdd3a9b6c536b97381789df13c.jpg",
            "https://via.placeholder.com/400x400?text=Vestido+Negro+Cóctel+2"
          ],
          price: 150.50,
          description: "Vestido negro para ocasiones formales.",
          sizes: ["S", "M", "L"]
        },
        {
          id: "9",
          title: "Traje Gris Noche",
          images: [
            "https://i.pinimg.com/736x/37/53/a2/3753a22e79ef25d82f0b11426cfbb0ff.jpg",
            "https://via.placeholder.com/400x400?text=Vestido+Negro+Cóctel+2"
          ],
          price: 150.50,
          description: "Vestido negro para ocasiones formales.",
          sizes: ["S", "M", "L"]
        },
      ];

      // Encontrar el producto correspondiente al ID
      this.product = products.find((product) => product.id === productId);
    },
    hoverImage(isHovered) {
      // Cambiar el estado de la imagen cuando el cursor pasa sobre ella
      this.isHovered = isHovered;
    },
    zoomImage(isZoomed) {
      // Controlar el zoom de la imagen
      this.isImageZoomed = isZoomed;
    },
    toggleFavorite() {
      // Cambiar el estado de favorito
      this.isFavorite = !this.isFavorite;
    },
    selectSize(size) {
      // Seleccionar la talla y marcar el botón
      this.selectedSize = size;
    },
    addToCart() {
      if (!this.selectedSize) {
        alert("Por favor, selecciona una talla antes de agregar al carrito.");
        return;
      }

      const productInCart = {
        ...this.product,
        size: this.selectedSize
      };

      // Agregar el producto al carrito
      this.cart.push(productInCart);

      // Guardar el carrito en localStorage
      localStorage.setItem("cart", JSON.stringify(this.cart));

      // Actualizar el carrito visualmente en otros componentes
      this.$emit("cart-updated", this.cart);
    },
    prevImage() {
      // Cambiar a la imagen anterior en el carrusel
      this.currentImageIndex = (this.currentImageIndex - 1 + this.product.images.length) % this.product.images.length;
    },
    nextImage() {
      // Cambiar a la imagen siguiente en el carrusel
      this.currentImageIndex = (this.currentImageIndex + 1) % this.product.images.length;
    }
  },
  mounted() {
    // Llamamos a fetchProduct para cargar los datos del producto al montar el componente
    this.fetchProduct();
  },
};
</script>

<style scoped>
.product-details {
  display: flex;
  justify-content: space-between;
  padding: 2rem;
}

.product-image {
  width: 50%;
  /* Ocupa la mitad de la página */
  padding-right: 2rem;
  position: relative;
}

.carousel {
  display: flex;
  overflow: hidden;
}

.carousel-item {
  display: none;
  width: 100%;
}

.carousel-item.active {
  display: block;
}

.details-image {
  width: 100%;
  border-radius: 8px;
  transition: transform 0.3s ease;
}

.carousel-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  font-size: 2rem;
  padding: 0.5rem;
  cursor: pointer;
}

.carousel-button.prev {
  left: 0;
}

.carousel-button.next {
  right: 0;
}

.details-info {
  width: 50%;
  /* Ocupa la otra mitad */
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* Centrado vertical */
  align-items: center;
  /* Centrado horizontal */
  text-align: center;
  /* Alinear texto al centro */
}

.top-info {
  display: flex;
  justify-content: space-between;
  width: 100%;
  /* Asegura que el contenido se distribuya en todo el ancho */
  margin-bottom: 1rem;
  align-items: center;
  /* Centra los elementos dentro de la fila */
}

.size-buttons {
  display: flex;
}

.size-button {
  margin: 0.5rem;
  font-size: 1rem;
}

.size-button.selected {
  background-color: #013220;
  color: white;
}

.favorite-button {
  font-size: 1.5rem;
}

.favorite-button i {
  color: #e74c3c;
}

.details-title {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.details-price {
  font-size: 1.5rem;
  color: #013220;
  margin-bottom: 1rem;
}

.add-to-cart {
  font-size: 1.2rem;
  padding: 0.8rem 2rem;
  background-color: #013220;
  color: white;
  border: none;
  cursor: pointer;
}

.details-description {
  margin-top: 2rem;
  color: #757575;
}
</style>
