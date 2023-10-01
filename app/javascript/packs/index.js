import { createApp } from "vue/dist/vue.esm-bundler";
import IndexView from "@/components/index.vue";

const Index = createApp({
  components: {
    "index-view": IndexView,
  },
});

Index.mount("#index-container");
