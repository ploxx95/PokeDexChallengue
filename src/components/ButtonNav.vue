<script setup>
import { ref } from 'vue'
const isActive = ref(false)


defineProps({
  typeButton: String
})

</script>





<template>
<button :class="{isActive:isActive}" class="primary font-lato font-bold text-lg" 
@click="isActive=!isActive"
>
  <slot/>
</button>

</template>



<style scoped>
.primary{
  background-color: #BFBFBF;
  padding: 11px 20px;
  border-radius: 60px;
  color:white;
  border-radius: 60px;
}

.isActive{
  background-color: #F22539;

}

</style>


