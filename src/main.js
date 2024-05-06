import { createApp } from 'vue'
import App from './App.vue'
import router from './Router'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css'; 
import mitt from "mitt"
const app =createApp(App)

//Emitter Config

const emitter = mitt();
app.provide('emitter',emitter)
app.use(router)
app.mount("#app")
