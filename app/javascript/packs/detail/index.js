import { createApp } from "vue/dist/vue.esm-bundler";
import DetailIndexView from "@/components/detail/index.vue";

const DetailShow = createApp({
  components: {
    "detail-index-view": DetailIndexView,
  },
});

DetailShow.mount("#detail-index-container");
