<script setup>

</script>

<template>

  <input id="inputSearch" class=" outline-none  h-[50px] w-full rounded-md select-none"
  placeholder="Search"  v-model="query"  @keyup.enter="handleSubmit" />
</template>

<style scoped>
#inputSearch {
  background: url(./../../assets/searchIcon.png) no-repeat scroll 16px 16px;
  background-color: white;
  padding-left:43px;
}
#inputSearch::placeholder{
  color: #BFBFBF;
}
</style>