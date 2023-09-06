/*
 * @Author: cfanlei cfanlei@126.com
 * @Date: 2023-09-05 10:53:57
 * @LastEditors: cfanlei cfanlei@126.com
 * @LastEditTime: 2023-09-05 22:36:59
 * @FilePath: /c-terminal/c-terminal-web/src/router/login/index.js
 */
export const loginPath = [
    {
        path:'/login',
        component:()=>import('../../views/login/Login.vue'),
        name:'Login'
    }
]