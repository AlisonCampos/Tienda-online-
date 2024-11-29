<template>
  <div class="home">
    <Navbar />
    <div class="change-password">
      <h2 class="text-center">Cambiar Contraseña</h2>
      <form @submit.prevent="changePassword" class="form-container">
        <div class="form-group">
          <label for="current-password">Contraseña Actual:</label>
          <input
            type="password"
            id="current-password"
            v-model="form.currentPassword"
            class="form-control"
            required
          />
        </div>
        <div class="form-group">
          <label for="new-password">Nueva Contraseña:</label>
          <input
            type="password"
            id="new-password"
            v-model="form.newPassword"
            class="form-control"
            required
          />
        </div>
        <div class="form-group">
          <label for="confirm-password">Confirmar Nueva Contraseña:</label>
          <input
            type="password"
            id="confirm-password"
            v-model="form.confirmPassword"
            class="form-control"
            required
          />
        </div>
        <button type="submit" class="btn btn-primary">Actualizar Contraseña</button>
      </form>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "ChangePassword",
  components: {
    Navbar,
  },
  data() {
    return {
      form: {
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      },
    };
  },
  methods: {
    changePassword() {
      if (this.form.newPassword !== this.form.confirmPassword) {
        alert("Las contraseñas no coinciden");
        return;
      }
      console.log("Contraseña actualizada:", this.form);
      alert("Contraseña actualizada con éxito");
    },
  },
};
</script>

<style scoped>
/* Contenedor principal */
.change-password {
  max-width: 450px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
}

/* Encabezado */
h2 {
  color: #013220;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1.5rem;
}

/* Estilo del formulario */
.form-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

label {
  font-size: 16px;
  font-weight: 600;
  color: #1c1c1c;
  margin-bottom: 0.5rem;
}

input {
  width: 100%;
  padding: 0.75rem;
  font-size: 16px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  transition: border-color 0.3s ease;
}

input:focus {
  border-color: #013220;
  outline: none;
}

/* Botón */
button {
  width: 100%;
  padding: 0.75rem;
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
  background-color: #013220;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #015432;
}

/* Sombra y espaciado */
.change-password {
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}
</style>
