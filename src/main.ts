// import './assets/main.scss'
// import router from '@/router'
// import { createPinia } from 'pinia'

// import { createApp } from 'vue'

// import App from './App.vue'


// import "element-plus/dist/index.css"

// const app = createApp(App)


// async function asyncRegister() {
//     const createPinia=(await import("pinia")).createPinia;
//     app.use(createPinia());
//     const router =(await import("@/router")).default;
//     app.use(router);
//     app.mount('#app');
// } 

// asyncRegister();

import './assets/main.scss'
import "element-plus/dist/index.css"
import { createApp } from 'vue'

async function asyncRegister() {
    // 动态导入 pinia 模块
    const { createPinia } = await import('pinia')
    // 创建 Pinia 实例
    const pinia = createPinia()
    
    // 创建 Vue 应用程序实例
    const App = (await import('./App.vue')).default
    const app = createApp(App)

    // 使用 Pinia 实例
    app.use(pinia)

    // 动态导入并使用路由器
    const router = (await import('@/router')).default
    app.use(router)

    // 挂载应用程序
    app.mount('#app')
}

asyncRegister()
