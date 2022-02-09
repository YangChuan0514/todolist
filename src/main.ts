import { createApp } from 'vue'
import App from './App.vue'
import { useElementPlus } from './plugins/element-plus'
import router from './router/index'
import store from './store/index'
createApp(App).use(useElementPlus).use(store).use(router).mount('#app')
