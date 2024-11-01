import {createApp} from "vue";
import App from "@/App.vue";
import router from "@/router/index.js";
import {setupPinia} from "@/store/index.js";
import setupDirective from "@/directive/index.js";
import './permission.js'
import 'prismjs/themes/prism.css';

export const app = createApp(App);
setupPinia(app);
setupDirective(app)
app.use(router);
app.mount("#app");
