<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import {useStore} from 'vuex'
import { computed } from 'vue';
import List from './components/List.vue';
import CardPokemon from './components/CardPokemon.vue';
import ButtonNav from './components/ButtonNav.vue';
import InputSearch from './components/InputSearch.vue';
 

</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <div class="flex flex-col gap-3" >

  <InputSearch/>
  <List/>
  <ButtonNav >Get started</ButtonNav>
  <CardPokemon/>
  </div>
</template>

<style>
#app {
 background: rgb(206, 206, 206);
 padding: 5rem;
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
