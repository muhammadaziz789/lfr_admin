let isDarkValue = JSON.parse(localStorage.getItem('isDark'))
import {createApp, markRaw} from 'vue'
import App from './App.vue'
import {createPinia} from 'pinia'
import router from './router'
import instance from "./plugins/axios";
import 'animate.css'
import '@/assets/scss/main.scss'
import './styles/tailwind.css'
import FlagIcon from 'vue-flag-icon'

import Skeleton from './components/base/Skeleton.vue'
import NullData from '@/components/base/NullData.vue'
import VConfirm from '@/components/base/v-confirm.vue'
import Filter from './components/base/Filter.vue'
import { vue3Debounce } from 'vue-debounce'

import {abilitiesPlugin} from '@casl/vue';
import {ability} from './plugins/ability';

import dayjs from 'dayjs';
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

import VPagination from "@hennge/vue3-pagination";
import "@hennge/vue3-pagination/dist/vue3-pagination.css";

import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';

import VueSelect from '@/components/base/v-select.vue'

// import Datepicker from 'vue3-date-time-picker';
// import 'vue3-date-time-picker/dist/main.css'
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

import FunctionsPupup from './components/base/FunctionsPopup.vue';

import i18n from './plugins/i18n/index'


import PerfectScrollbar from 'vue3-perfect-scrollbar'
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css'

import VueApexCharts from "vue3-apexcharts";

const options = {
    transition: "Vue-Toastification__bounce",
    maxToasts: 20,
    newestOnTop: true,
    position: "bottom-right",
    timeout: 5000,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    draggable: true,
    draggablePercent: 0.6,
    showCloseButtonOnHover: false,
    hideProgressBar: false,
    closeButton: "button",
    icon: true,
    rtl: false
};


const app = createApp(App)

const pinia = createPinia()
pinia.use(({store}) => {
    store.$router = markRaw(router)
});
app.use(pinia)


app.use(router)
app.use(i18n)
// app.config.globalProperties.$t = i18n.global.t


app.use(Toast, options);
app.use(abilitiesPlugin, ability, {
    useGlobalProperties: true
})

app.component('Skeleton', Skeleton)
app.component('NullData', NullData)
app.component('v-select', vSelect)
app.component('VConfirm', VConfirm)
app.component('VueSelect', VueSelect)
app.component('Filter', Filter)

app.component('Datepicker', Datepicker);

app.component('v-pagination', VPagination);

app.component('functions-popup', FunctionsPupup)

app.config.globalProperties.$dayjs = dayjs
app.config.globalProperties.$isDark = isDarkValue
app.directive('debounce', vue3Debounce({ lock: true }))

app.provide('$axios', instance);

app.use(PerfectScrollbar)

app.use(VueApexCharts);

app.use(FlagIcon)

app.mount('#app')