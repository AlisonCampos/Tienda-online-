<template>
  <div class="home">
    <div class="login-container text-center">
      <h1 class="mb-4">Zone Fashion</h1>
      <h2 class="mb-4 subtitle">Login</h2>
      <form @submit.prevent="handleLogin">
        <div class="mb-3">
          <input type="email" v-model="email" class="form-control elegant-input" placeholder="Email" required />
        </div>
        <div class="mb-3">
          <input type="password" v-model="password" class="form-control elegant-input" placeholder="Contraseña"
            required />
        </div>
        <div class="mb-3 text-start">
          <router-link to="/forgot-password" class="forgot-password-link">
            ¿Olvidó su contraseña?
          </router-link>
        </div>
        <button type="submit" class="btn btn-primary w-100 mb-3 elegant-button">
          Iniciar Sesión
        </button>
        <router-link to="/register" class="btn btn-outline-primary w-100 elegant-outline-button">
          Crear Cuenta MyZF
        </router-link>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    handleLogin() {
      if (this.email && this.password) {
        this.$router.push("/");
      } else {
        alert("Por favor, completa todos los campos.");
      }
    },
  },
};
</script>

<style scoped>
/* Contenedor del formulario */
.login-container {
  background-color: #ffffff;
  color: #1c1c1c;
  max-width: 420px;
  margin: 6% auto;
  padding: 2.5rem 2rem;
  border-radius: 12px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  font-family: 'Arial', sans-serif;
}

/* Títulos */
h1 {
  font-size: 2rem;
  color: #1c1c1c;
  font-weight: bold;
}

.subtitle {
  font-size: 1.25rem;
  color: #757575;
  font-weight: 600;
}

/* Inputs elegantes */
.elegant-input {
  background-color: #e0e0e0;
  border: none;
  border-radius: 8px;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  color: #1c1c1c;
}

.elegant-input:focus {
  outline: none;
  border: 2px solid #013220;
  box-shadow: 0 0 4px rgba(1, 50, 32, 0.5);
}

/* Botón primario */
.elegant-button {
  background-color: #1c1c1c;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  color: #ffffff;
  padding: 0.75rem;
  transition: all 0.3s ease-in-out;
}

.elegant-button:hover {
  background-color: #013220;
  transform: scale(1.05);
}

/* Botón de contorno */
.elegant-outline-button {
  color: #1c1c1c;
  border: 2px solid #1c1c1c;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.75rem;
  transition: all 0.3s ease-in-out;
}

.elegant-outline-button:hover {
  background-color: #e0e0e0;
  color: #013220;
}

/* Enlace de contraseña */
.forgot-password-link {
  color: #757575;
  font-size: 0.9rem;
  text-decoration: none;
  transition: color 0.3s ease-in-out;
}

.forgot-password-link:hover {
  color: #013220;
}

/* Estilo general */
body {
  background-color: #e0e0e0;
  font-family: 'Arial', sans-serif;
}

a {
  text-decoration: none;
}
</style>
