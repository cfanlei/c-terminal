/*
 * @Author: cfanlei cfanlei@126.com
 * @Date: 2023-09-05 10:32:16
 * @LastEditors: cfanlei cfanlei@126.com
 * @LastEditTime: 2023-09-05 16:19:36
 * @FilePath: /c-terminal/c-terminal-web/src/main.js
 */
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { routes } from './router'
import { createRouter, createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'

const routerIns = createRouter({
    history:createWebHistory(),
    routes
})

const pinia = createPinia()
createApp(App)
.use(routerIns)
.use(pinia)
.mount('#app')
