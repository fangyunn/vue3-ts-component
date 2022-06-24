import { createApp } from 'vue'
import App from './App.vue'
import Element from './components/container/index'
import ElButton from './components/button/index'
import ElForm from './components/form/index'
const app = createApp(App)
// 全局变量
app.config.globalProperties.$AILEMENT = {
  size: 'large'
}
app.use(Element)
  .use(ElButton)
  .use(ElForm)
  .mount('#app')
