/*
 * @Author: cfanlei cfanlei@126.com
 * @Date: 2023-09-05 10:32:16
 * @LastEditors: cfanlei cfanlei@126.com
 * @LastEditTime: 2023-09-05 23:52:26
 * @FilePath: /c-terminal/c-terminal-web/src/main.js
 */
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {setupStore} from './store'
import {setupRouter} from './router'

const app = createApp(App)
setupRouter(app)
setupStore(app)
app.mount('#app')

