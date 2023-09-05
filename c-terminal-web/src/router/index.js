/*
 * @Author: cfanlei cfanlei@126.com
 * @Date: 2023-09-05 10:38:46
 * @LastEditors: cfanlei cfanlei@126.com
 * @LastEditTime: 2023-09-05 17:28:09
 * @FilePath: /c-terminal/c-terminal-web/src/router/index.js
 */
import {loginPath} from './login'
import { mainPath } from './main'
import { useLoginStore } from '../store'

export const  routes=[
    ...loginPath,
    ...mainPath,
    {
        path:'/',
        redirect: to=>{
            let path = '/login'
            if(useLoginStore().loginState){
                path  = '/main'
            }
            return {path}
        }
    }
]