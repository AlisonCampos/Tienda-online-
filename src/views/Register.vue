<template>
  <div class="register-container text-center">
    <h1 class="mb-4">Zone Fashion</h1>
    <h2 class="mb-4 subtitle">Registro</h2>
    <form @submit.prevent="handleRegister">
      <div class="mb-3">
        <input
          type="email"
          v-model="email"
          class="form-control elegant-input"
          placeholder="Email"
          required
        />
      </div>
      <div class="mb-3">
        <input
          type="tel"
          v-model="phone"
          class="form-control elegant-input"
          placeholder="Teléfono"
          required
        />
      </div>
      <div class="mb-3">
        <input
          type="password"
          v-model="password"
          class="form-control elegant-input"
          placeholder="Contraseña"
          required
        />
      </div>
      <button type="submit" class="btn btn-primary w-100 mb-3 elegant-button">
        Crear Cuenta
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "RegisterPage",
  data() {
    return {
      email: "",
      phone: "",
      password: "",
    };
  },
  methods: {
    handleRegister() {
      if (this.email && this.phone && this.password) {
        this.$router.push("/login");
      } else {
        alert("Por favor, completa todos los campos.");
      }
    },
  },
};
</script>

<style scoped>
/* Estilo global */
body {
  background-color: #e0e0e0;
  font-family: 'Arial', sans-serif;
  color: #1c1c1c;
}

/* Contenedor de registro */
.register-container {
  max-width: 420px;
  margin: 5% auto;
  background-color: #ffffff;
  padding: 2.5rem 2rem;
  border-radius: 12px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
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

/* Estilo de los campos de entrada */
.elegant-input {
  background-color: #e0e0e0;
  border: none;
  border-radius: 8px;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  color: #1c1c1c;
  margin-bottom: 1rem;
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

/* Estilo de enlaces */
a {
  color: #757575;
  text-decoration: none;
  font-size: 0.9rem;
}

a:hover {
  color: #013220;
}
</style>
