<template>
    <div class="card h-100 position-relative" @click="goToProductDetail">
        <!-- Imagen del producto -->
        <img :src="image" class="card-img-top" alt="Product image" />

        <!-- Contenido de la card -->
        <div class="card-body">
            <h5 class="card-title">{{ title }}</h5>
            <p class="card-text">Precio: ${{ price.toFixed(2) }}</p>
        </div>

        <!-- Botón de favorito en la parte superior derecha -->
        <button class="btn btn-link position-absolute top-0 end-0 m-3 p-0 text-danger" @click.stop="toggleFavorite">
            <i :class="isFavorite ? 'fas fa-heart' : 'far fa-heart'"></i>
        </button>
    </div>
</template>

<script>
export default {
    name: "ProductCardWithFavorite",
    props: {
        id: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        isFavorite: {
            type: Boolean,
            required: true, // Prop de estado de favorito
        },
    },
    methods: {
        toggleFavorite() {
            // Emitir evento al padre con el ID del producto
            this.$emit("toggle-favorite", this.id);
        },
        goToProductDetail() {
            // Navegar a la vista de detalles del producto
            this.$router.push({ name: 'ProductDetail', params: { id: this.id } });
        }
    },
};
</script>

<style scoped>
.card {
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s;
}

.card:hover {
    transform: scale(1.02);
}

.card-body {
    padding: 1.25rem;
}

.card-img-top {
    border-radius: 10px 10px 0 0;
}

/* Estilo para el botón de favorito en la esquina superior derecha */
button {
    font-size: 1.5rem;
    background-color: transparent;
    border: none;
}

button:hover {
    cursor: pointer;
}
</style>