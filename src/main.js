/*
 * Copyright 2019 Continuous Performance Test
 * 
 * 
 * This file is part of Continuous Performance Test.
 * https://github.com/continuousperftest/service-ui
 * 
 * Continuous Performance Test is free software: you can redistribute it and/or modify it under the
 * terms of the GNU General Public License as published by the Free Software Foundation, either
 * version 3 of the License, or (at your option) any later version.
 * 
 * Continuous Performance Test is distributed in the hope that it will be useful, but WITHOUT ANY
 * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR
 * PURPOSE. See the GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License along with Continuous
 * Performance Test. If not, see <http://www.gnu.org/licenses/>.
 */

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