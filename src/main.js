import Vue from "vue";
import App from "./App.vue";
import MAceEditor from 'vue-m-ace-editor';
import 'brace';
import 'brace/mode/markdown';
import 'brace/mode/javascript';
import 'brace/theme/monokai';
import vuetify from './plugins/vuetify';
Vue.config.productionTip = false;
Vue.use(MAceEditor)
new Vue({
    vuetify,
    render: h => h(App)
}).$mount("#app");