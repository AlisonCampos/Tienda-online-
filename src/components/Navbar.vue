<template>
  <header class="navbar">
    <!-- Menú desplegable -->
    <div class="menu">
      <button class="menu-icon" @click="toggleMenu">
        <i class="fas fa-bars"></i>
      </button>
      <div v-if="menuOpen" class="">
        <router-link to="/" class="dropdown-link">Inicio</router-link>
        <router-link to="/purchases" class="dropdown-link">Mis compras</router-link>
      </div>
    </div>
    <!-- Campo de búsqueda -->
    <div class="search" @click="goToSearchPage">
      <input type="text" placeholder="Buscar..." class="search-input" />
      <button class="search-button">
        <i class="fas fa-search"></i>
      </button>
    </div>
    <!-- Nombre de la tienda -->
    <h1 class="logo">Zone Fashion</h1>
    <!-- Íconos a la derecha -->
    <div class="icons">
      <!-- Favoritos con contador -->
      <button class="icon-button position-relative" @click="goToFavorites">
        <i class="fas fa-heart"></i>
      </button>
      
      <!-- Ícono de Usuario -->
      <button class="icon-button" @click="goToUserProfile">
        <i class="fas fa-user"></i>
      </button>
      <!-- Carrito con contador -->
      <button class="icon-button position-relative" @click="goToCart">
        <i class="fas fa-shopping-bag"></i>
        <span v-if="cart.length > 0"
          class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {{ cart.length }}
        </span>
      </button>
      <!-- Nuevo Ícono: Iniciar Sesión -->
      <button class="icon-button" @click="goToLogin">
        <i class="fas fa-sign-in-alt"></i>
      </button>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      menuOpen: false,
      cart: JSON.parse(localStorage.getItem("cart")) || [],
    };
  },
  methods: {
    goToFavorites() {
      this.$router.push("/favorites");
    },
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    goToCart() {
      this.$router.push("/cart");
    },
    goToLogin() {
      this.$router.push("/login");
    },
    goToUserProfile() {
      this.$router.push("/user-profile");
    },
    goToSearchPage() {
      this.$router.push("/search");
    },
  },
  watch: {
    cart(newCart) {
      localStorage.setItem("cart", JSON.stringify(newCart));
    },
  },
};
</script>

<style scoped>
:root {
  --white: #ffffff;
  --light-gray: #e0e0e0;
  --gray: #757575;
  --dark-green: #013220;
  --black: #1c1c1c;
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--white);
  color: var(--black);
  padding: 1rem 2rem;
  position: relative;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.menu {
  position: relative;
}

.menu-icon {
  background: none;
  border: none;
  color: var(--black);
  font-size: 1.5rem;
  cursor: pointer;
}

.dropdown-menu {
  position: absolute;
  top: 3rem;
  left: 0;
  background-color: var(--white);
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  padding: 0.5rem 0;
}

.dropdown-link {
  display: block;
  color: var(--black);
  text-decoration: none;
  padding: 0.5rem 1rem;
  transition: background 0.3s ease;
}

.dropdown-link:hover {
  background-color: var(--light-gray);
}

.search {
  display: flex;
  align-items: center;
  background-color: var(--light-gray);
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  /* Cambia el cursor a puntero para indicar que es clickeable */
}

.search-input {
  border: none;
  outline: none;
  padding: 0.5rem;
  flex: 1;
  color: var(--black);
}

.search-button {
  background: none;
  border: none;
  color: var(--dark-green);
  padding: 0.5rem;
  cursor: pointer;
}

.search-button i {
  font-size: 1.2rem;
}

.logo {
  font-size: 1.8rem;
  font-weight: bold;
  text-align: center;
  color: var(--black);
  flex: 1;
}

.icons {
  display: flex;
  gap: 1rem;
}

.icon-button {
  background: none;
  border: none;
  color: var(--black);
  font-size: 1.5rem;
  cursor: pointer;
  transition: transform 0.3s ease, color 0.3s ease;
}

.icon-button:hover {
  transform: scale(1.1);
  color: var(--dark-green);
}

.position-relative {
  position: relative;
}

.badge {
  font-size: 0.75rem;
  padding: 0.4em 0.6em;
  transform: translate(-50%, -50%);
  display: inline-block;
}
</style>
