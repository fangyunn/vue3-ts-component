import { createApp } from 'vue'
import App from './App.vue'
import Element from './components/container/index'


const app = createApp(App)
app.use(Element)
  .mount('#app')
