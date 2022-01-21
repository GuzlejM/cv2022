import { createApp } from 'vue'
import { createStore } from 'vuex'

import App from './App.vue'

import './assets/tailwind.css'

const store = createStore({
  state() {
    return {
      activeTab: 0,
    };
  }
})
const app = createApp(App);

app.use(store);

app.mount('#app');
