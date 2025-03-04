import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@fortawesome/fontawesome-free/css/all.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
