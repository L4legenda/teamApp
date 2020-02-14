import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import router from "./routes/routing.js"
import store from "./store/index.js"

Vue.use(VueRouter);

Vue.config.productionTip = false

new Vue({
	render: h => h(App),
	router,
	store
}).$mount('#app')
