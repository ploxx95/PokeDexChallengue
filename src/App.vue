<script setup>
import { onMounted } from 'vue';
import store from './components/storage';

onMounted(() => {
    store.commit('initialiseStore')})

</script>

<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <div class="flex flex-col gap-3 " >


  </div>
  <router-view></router-view>
</template>

<style>
#app {
 background: rgb(206, 206, 206);
 height: 100vh;
}
#primary {
  background-color: #F22539;
 padding:  11px 20px;
 font-size: 18px;
 font-weight: bold;
 border-radius: 60px;
 color:white

}
#primary:active {
  background-color: #C00E20;

}
</style>
