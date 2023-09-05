<!--
 * @Author: cfanlei cfanlei@126.com
 * @Date: 2023-09-05 10:53:02
 * @LastEditors: cfanlei cfanlei@126.com
 * @LastEditTime: 2023-09-05 17:24:45
 * @FilePath: /c-terminal/c-terminal-web/src/views/Login.vue
-->
<template>
  <div>{{ loginState }}</div>
</template>

<script setup>
import { useLoginStore } from '../../store';
import {storeToRefs} from 'pinia'
const store = useLoginStore()
const {loginState} = storeToRefs(store)
setTimeout(() => {
    store.setLoginState(true)
}, 5000);
</script>

<style>

</style>