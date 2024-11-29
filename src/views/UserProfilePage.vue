<template>
  <div class="user-profile">
    <Navbar />
    <div class="container py-5">
      <h1 class="text-center mb-5">Mi Perfil</h1>

      <!-- Card de Perfil -->
      <div class="card profile-card mx-auto text-center">
        <img class="profile-image mx-auto" :src="user.avatar" alt="Imagen del usuario" />
        <div class="card-body">
          <h3>{{ user.name }}</h3>
          <p class="text-muted">{{ user.email }}</p>
          <p><strong>Dirección:</strong> {{ user.address }}</p>

          <div class="d-flex justify-content-center mt-4">
            <button class="btn btn-primary mx-2" @click="editProfile">Editar Perfil</button>
            <button class="btn btn-secondary mx-2" @click="changePassword">Cambiar Contraseña</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "UserProfile",
  components: {
    Navbar,
  },
  data() {
    return {
      user: {
        name: "Juan Pérez",
        email: "juan.perez@example.com",
        address: "Calle Falsa 123, Ciudad, País",
        avatar: "https://static.vecteezy.com/system/resources/previews/025/869/567/non_2x/profile-image-of-woman-avatar-for-social-networks-with-half-circle-fashion-bright-illustration-in-trendy-style-vector.jpg", // Imagen por defecto
      },
    };
  },
  methods: {
    editProfile() {
      this.$router.push("/edit-profile");
    },
    changePassword() {
      this.$router.push("/change-password");
    },
  },
};
</script>

<style scoped>
.user-profile {
  background-color: #ffffff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

h1 {
  color: #013220;
  font-weight: bold;
}

.profile-card {
  max-width: 500px;
  border: none;
  background-color: #f9f9f9;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  padding: 30px;
  border-radius: 16px;
}

.profile-image {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin: 0 auto 20px;
  border: 4px solid #e0e0e0;
}

.card-body h3 {
  color: #013220;
  font-weight: bold;
  margin-bottom: 10px;
}

.card-body p {
  font-size: 16px;
  margin-bottom: 10px;
}

.card-body p.text-muted {
  color: #757575;
}

.btn {
  padding: 10px 24px;
  border-radius: 24px;
  font-size: 16px;
  font-weight: bold;
  transition: all 0.3s ease;
}

.btn-primary {
  background-color: #013220;
  color: #ffffff;
  border: none;
}

.btn-primary:hover {
  background-color: #015432;
  color: #ffffff;
}

.btn-secondary {
  background-color: #757575;
  color: #ffffff;
  border: none;
}

.btn-secondary:hover {
  background-color: #5e5e5e;
  color: #ffffff;
}
</style>
