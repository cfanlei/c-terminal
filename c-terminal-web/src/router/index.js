/*
 * @Author: cfanlei cfanlei@126.com
 * @Date: 2023-09-05 10:38:46
 * @LastEditors: cfanlei cfanlei@126.com
 * @LastEditTime: 2023-09-06 00:03:18
 * @FilePath: /c-terminal/c-terminal-web/src/router/index.js
 */
import {loginPath} from './login'
import { mainPath } from './main'
import { createRouter, createWebHistory } from 'vue-router'
import { getUserLoginStore } from '../store'

export const  routes=[
    ...loginPath,
    ...mainPath,
    {
        path:'/',
        redirect: {path:'/main'}
    }
]

const routerIns = createRouter({
    history:createWebHistory(),
    routes
})
routerIns.beforeEach((to,from)=>{
    const loginStore = getUserLoginStore()
    if(!loginStore.getLoginState && to.name!== 'Login'){
        return {name:'Login'}
    }
})
export function setupRouter(app){
    app.use(routerIns)
}