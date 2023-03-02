import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import "@fortawesome/fontawsome-free/css/all.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "fa" || "md",
  },
  theme: {
    themes: {
      dark: {
        background: "#eeeeee",
      },
    },
  },
});
