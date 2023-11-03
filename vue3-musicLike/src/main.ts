import { createApp } from "vue";
import "./style.css";
import Root from '../src/views/Root.vue'
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "./assets/base.scss";
import router from "./router";
const app = createApp(Root);
app.use(ElementPlus);
app.use(router);
app.mount("#app");
