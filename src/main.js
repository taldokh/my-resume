import Vue from 'vue'
import vuetify from '@/plugins/vuetify'
import VueScrollmagic from 'vue-scrollmagic'
import App from './App.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

Vue.use(VueScrollmagic)

Vue.config.productionTip = false

new Vue({
  created() {
    AOS.init();
  },
  vuetify,
  render: h => h(App),
}).$mount('#app')
