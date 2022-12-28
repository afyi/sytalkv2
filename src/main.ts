import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";

import "@/static/index.scss";

const app = createApp(App);

const pinia = createPinia();

// 用于从外部index.html中拿到相应的文件
app.config.globalProperties.$config = window.SYTALK_CONFIG || {}

app.use(pinia).mount('#sytalk');