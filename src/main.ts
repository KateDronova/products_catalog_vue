import { createApp } from "vue";
import App from "./App.vue";
import components from '@/components/UI';
import router from "./router/router";
import store from "./store/store";
import VIntersection from "@/directives/VIntersection";

const app = createApp(App);

components.forEach((component) => app.component(component.name, component));
app.directive("intersection", VIntersection);

app.use(router).use(store).mount("#app");
