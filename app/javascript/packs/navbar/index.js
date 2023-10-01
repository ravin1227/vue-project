import { createApp } from "vue/dist/vue.esm-bundler";
import NavbarIndexView from "@/components/navbar/index.vue";

const NavbarIndex = createApp({
  components: {
    "navbar-index-view": NavbarIndexView,
  },
});

NavbarIndex.mount("#navbar-index-container");
