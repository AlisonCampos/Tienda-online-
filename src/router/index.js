import Vue from 'vue'
import VueRouter from 'vue-router'

// Importa las vistas
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Home from "../views/Home.vue";
import Search from "../views/Search.vue";
import ProductDetail from "../views/ProductDetail.vue";
import ProductCategory from "../views/ProductCategory.vue";
import Favorites from "@/views/Favorites.vue"
import Cart from "../views/Cart.vue";
import Payment from '@/views/Payment.vue';
import OrderStatusPage from "../views/OrderStatusPage.vue";
import Order from "../views/Orders.vue";
import Purchases from "../views/PurchaseList.vue";
import UserProfilePage from '@/views/UserProfilePage.vue';
import EditProfile from '@/views/EditProfile.vue';
import ChangePassword from '@/views/ChangePassword.vue';

Vue.use(VueRouter)

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/login", name: "Login", component: Login },
  { path: "/register", name: "Register", component: Register },
  { path: "/search", name: "Search", component: Search },
  { path: "/product/:id", name: "ProductDetail", component: ProductDetail, props: true },
  { path: "/category/:type", name: "ProductCategory", component: ProductCategory, props: true  },
  { path: "/favorites", component: Favorites },
  { path: "/cart", name: "Cart", component: Cart },
  { path: "/payment", name: "Payment", component: Payment },
  { path: "/order-status", name: "OrderStatus", component: OrderStatusPage },
  { path: "/order", name: "Order", component: Order},
  { path: "/purchases", name: "Purchases", component: Purchases},
  { path: "/user-profile", name: "UserProfilePage", component: UserProfilePage},
  { path: "/edit-profile", name: "EditProfile", component: EditProfile},
  { path: "/change-password", name: "ChangePassword", component: ChangePassword},
  
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
