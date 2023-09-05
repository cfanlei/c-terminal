/*
 * @Author: cfanlei cfanlei@126.com
 * @Date: 2023-09-05 16:20:01
 * @LastEditors: cfanlei cfanlei@126.com
 * @LastEditTime: 2023-09-05 18:15:53
 * @FilePath: /c-terminal/c-terminal-web/src/store/login/index.js
 */
import { defineStore } from 'pinia'
export const useLoginStore = defineStore('login', {
    state:()=>({
        username:'',
        token:'',
        avatar:'',
        roleType:0,
        loginState:false
    }),
    getters:{
        getUsername:(state)=>state.username,
        getToken:(state)=>state.token,
        getAvatar:(state)=>state.avatar,
        getLoginState:(state)=>state.loginState,
    },
    actions:{
        setLoginState(value){
            this.loginState = value
        }
    }
  })