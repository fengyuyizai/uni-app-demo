import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'

import store from './store/store'
Vue.config.productionTip = false

Vue.use(Vuex)

App.mpType = 'app'

const app = new Vue({
  store: new Vuex.Store(store),
  ...App
})
app.$mount()
