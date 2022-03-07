<script setup>
import { ref, onMounted } from 'vue'

const valueInput=ref("")


onMounted(() => {
})

function handleSubmit(){
  console.log("ENTER")
}

</script>

<template>
<h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
  <input id="inputSearch" class=" outline-none  h-[50px] w-full rounded-md"
  placeholder="Search"  v-model="valueInput"  @keyup.enter="handleSubmit" />
</template>

<style scoped>
#inputSearch {
  background: url(../assets/searchIcon.png) no-repeat scroll 16px 16px;
  background-color: white;
  padding-left:43px;
}
#inputSearch::placeholder{
  color: #BFBFBF;
}
</style>