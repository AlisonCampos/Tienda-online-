<template>
  <div class="home">
    <Navbar />
    <div class="edit-profile">
      <h2 class="text-center">Editar Perfil</h2>
      <form @submit.prevent="updateProfile" class="form-container">
        <div class="form-group">
          <label for="name">Nombre:</label>
          <input type="text" id="name" v-model="form.name" class="form-control" required />
        </div>
        <div class="form-group">
          <label for="email">Correo Electrónico:</label>
          <input type="email" id="email" v-model="form.email" class="form-control" required />
        </div>
        <button type="submit" class="btn btn-primary">Guardar Cambios</button>
      </form>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "EditProfile",
  components: {
    Navbar,
  },
  data() {
    return {
      form: {
        name: "Juan Pérez", // Cambiar por datos actuales del usuario
        email: "juan.perez@example.com",
      },
    };
  },
  methods: {
    updateProfile() {
      console.log("Perfil actualizado:", this.form);
      alert("Perfil actualizado con éxito");
    },
  },
};
</script>

<style scoped>
/* Estilo general del contenedor */
.edit-profile {
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

/* Formulario */
.form-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-group {
  margin-bottom: 1rem;
}

label {
  color: #1c1c1c;
  font-weight: 600;
  margin-bottom: 0.5rem;
  display: block;
}

input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-size: 16px;
  color: #1c1c1c;
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
.edit-profile {
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}
</style>
