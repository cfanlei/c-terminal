<!--
 * @Author: cfanlei cfanlei@126.com
 * @Date: 2023-09-05 10:53:02
 * @LastEditors: cfanlei cfanlei@126.com
 * @LastEditTime: 2023-09-06 09:40:27
 * @FilePath: /c-terminal/c-terminal-web/src/views/Login.vue
-->
<template>
  <div @click="change">{{ loginState }}</div>
</template>

<script>
import { getUserLoginStore } from '../../store';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
export default {
  setup() {
    const store = getUserLoginStore();
    const { loginState } = storeToRefs(store);
    const router = useRouter();
    function change(){
      store.setLoginState(true)
      router.push({ name: 'Main' });
    }
    return { loginState,change };
  }
};
</script>

<style></style>
