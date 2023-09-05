<!--
 * @Author: cfanlei cfanlei@126.com
 * @Date: 2023-09-05 11:30:20
 * @LastEditors: cfanlei cfanlei@126.com
 * @LastEditTime: 2023-09-05 12:56:46
 * @FilePath: /c-terminal/c-terminal-web/src/views/Main.vue
-->
<template>
    <div id="container" :style="{backgroundImage:'url('+imgUrl+')'}">
        <div class="nav">
            <div class="avatar">
                <img src="../assets/avatar.svg" :width="imgWH" :height="imgWH" class="clip-circle"/>
            </div>
            <div class="more clip-circle" :style="{width:divWH,height:divWH}">
                <img src="../assets/apps2.svg" width="18" height="18"/>
            </div>
        </div>
    </div>
</template>
<script setup>
const imgUrl ='src/assets/desk.png'
const imgWH = 36
const divWH = imgWH+'px'
</script>
<style scoped>
#container{
    width:100vw;
    height: 100vh;
    position: absolute;
    background-size: 100% 100%;
    z-index: -1;
}
.nav{
    margin-top: 1vh;
    display: flex;
    justify-content: flex-end;
}
.nav .more{
    box-sizing: border-box;
    order: 1;
    display: flex;
    padding: 5px;
    align-items: center;
    justify-content: center;
    transition: all 0.5s;
}
.more:hover{
    background-color: #687b6a;
}
.nav .avatar{
    border-radius: 50%;
    order: 2;
}
.clip-circle{
    border-radius: 50% 50%;
}
.nav>div{
    margin-right: 15px;
}
</style>