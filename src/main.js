import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
import store from './store/index'

router.beforeEach((to, from, next) => {
    /* 路由发生变化修改页面title */
    if (to.meta.title) {
    document.title = to.meta.title
    }
    next()
})

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
