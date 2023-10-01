import { createApp } from "vue/dist/vue.esm-bundler";
import FooterIndexView from "@/components/footer/index.vue";

const FooterIndex = createApp({
  components: {
    "footer-index-view": FooterIndexView,
  },
});

FooterIndex.mount("#footer-index-container");
