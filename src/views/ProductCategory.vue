<template>
    <div class="home">
        <Navbar />
        <main class="main-content">
            <section class="hero">
                <h1 class="text-center text-capitalize">{{ categoryName }}</h1>
            </section>
            <div class="container py-4">
                <h1 class="text-center text-capitalize">{{ categoryName }}</h1>
                <div class="row row-cols-1 row-cols-md-3 g-4">
                    <ProductCardWithFavorite v-for="(product, index) in filteredProducts" :key="product.id"
                        :id="product.id" :title="product.title" :image="product.image" :price="product.price"
                        :isFavorite="favorites.includes(product.id)" @toggle-favorite="toggleFavorite" />
                </div>
            </div>
        </main>
    </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import ProductCardWithFavorite from "@/components/ProductCardWithFavorite.vue";

export default {
    name: "ProductCategory",
    components: {
        Navbar,
        ProductCardWithFavorite
    },
    props: ["type"],
    data() {
        return {
            products: [
                { id: "1", title: "Vestido Rosa Gala", image: "https://ariststyles.com/cdn/shop/files/a0893_blush_1_n.jpg?v=1709276407&width=1445 ", price: 250.99, type: "vestidos-de-gala" },
                { id: "2", title: "Vestido Azul Rey Gala", image: "https://almudenaboutique.com/wp-content/uploads/2024/05/vestido-largo-azul-rey-fiesta-evento-noche-5.jpg", price: 199.99, type: "vestidos-de-gala" },
                { id: "3", title: "Vestido Azul Gala", image: "https://i.pinimg.com/736x/93/6e/d9/936ed99e0d9bbf5e130ba64af9d6cd8c.jpg ", price: 250.99, type: "vestidos-de-gala" },
                { id: "4", title: "Vestido Cóctel Rosa", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjPavsBvxfNBsGUYixEJNl7D_K-xYoW3n2XQ&s", price: 150.50, type: "vestidos-de-coctel" },
                { id: "5", title: "Vestido Cóctel Rojo", image: "https://m.media-amazon.com/images/I/81kgRE187JL.AC_UY350.jpg", price: 150.50, type: "vestidos-de-coctel" },
                { id: "6", title: "Traje Negro Noche", image: "https://i.pinimg.com/550x/f0/e5/46/f0e54667547705acf196df9948799864.jpg", price: 300.00, type: "trajes-de-gala" },
                { id: "7", title: "Traje Azul Noche", image: "https://i.pinimg.com/236x/29/23/2a/29232ac1ce0633baf9b938d06919cc30.jpg", price: 300.00, type: "trajes-de-gala" },
                { id: "8", title: "Conjunto Violeta Dama", image: "https://i.pinimg.com/736x/2a/f2/87/2af287cdd3a9b6c536b97381789df13c.jpg", price: 300.00, type: "trajes-de-noche" },
                { id: "9", title: "Traje Gris Noche", image: " https://i.pinimg.com/736x/37/53/a2/3753a22e79ef25d82f0b11426cfbb0ff.jpg", price: 300.00, type: "trajes-de-noche" },
            ],
            favorites: []
        };
    },
    computed: {
        categoryName() {
            return this.type.replace("-", " ");
        },
        filteredProducts() {
            return this.products.filter(product => product.type === this.type);
        }
    },
    methods: {
        toggleFavorite(productId) {
            // Verifica si el producto ya está en favoritos
            const index = this.favorites.indexOf(productId);

            if (index === -1) {
                // Si no está, agregarlo a favoritos
                this.favorites.push(productId);
            } else {
                // Si está, eliminarlo de favoritos
                this.favorites.splice(index, 1);
            }
            this.$emit("update-favorites", this.favorites);
        },
    }

};
</script>
<style scoped>
.hero {
    text-align: center;
    padding: 2rem;
    background-color: var(--dark-green);
    color: var(--white);
}
</style>