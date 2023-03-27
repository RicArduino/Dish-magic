import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from "@/vuex";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import VueTelInput from "vue-tel-input";


createApp(App).use(router).use(store).use(VueTelInput).mount('#app')
