/*
 * @Author: cfanlei cfanlei@126.com
 * @Date: 2023-09-05 16:18:39
 * @LastEditors: cfanlei cfanlei@126.com
 * @LastEditTime: 2023-09-05 23:55:48
 * @FilePath: /c-terminal/c-terminal-web/src/store/index.js
 */
import { createPinia } from 'pinia'
import {useLoginStore} from './login'

const pinia = createPinia()

export function getUserLoginStore(){
    return useLoginStore(pinia)
}

export function  setupStore(app){
    app.use(pinia)
}