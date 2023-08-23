import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import router from './router'

Vue.config.productionTip = false


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false
Vue.use(ElementUI);

Vue.prototype.$bus = new Vue();


new Vue({
    render: h => h(App),
    router,
}).$mount('#app')