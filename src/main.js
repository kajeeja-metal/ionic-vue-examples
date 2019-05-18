// Base dependencies
import Vue from 'vue'
import Ionic from '@modus/ionic-vue'
import router from '@/router'

// Ionic core styles
import '@ionic/core/css/ionic.bundle.css'

// Import IonVuePage component
import IonVuePage from '@/components/IonVuePage.vue'
import vueCustomElement from 'vue-custom-element'


// Enable the ionic-vue plugin
Vue.use(Ionic)
Vue.use(vueCustomElement)

// Register as global component to be used as boilerplate
Vue.component('IonVuePage', IonVuePage)

// Create a new Vue instance
new Vue({
  router,
}).$mount('#app')

Vue.customElement("item-native", app, {shadow: true, shadowCss: 'a { background-color: blue; }'});