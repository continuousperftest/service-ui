
import Vue from 'vue'
import App from './App.vue'

// more grace import third package !
import moment from 'moment'
import axios from 'axios'
import curvejs from 'curvejs'
import VueFeatherIcon from "vue-feather-icon"

Object.defineProperty(Vue.prototype, '$moment', { value: moment });
Object.defineProperty(Vue.prototype, '$axios', { value: axios });
Object.defineProperty(Vue.prototype, '$curvejs', { value: curvejs });

Vue.use(VueFeatherIcon)

// eslint-disable-next-line no-new
new Vue({
    el: '#app',
    render: h => h(App)
});