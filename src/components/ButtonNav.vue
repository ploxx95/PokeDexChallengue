


<script setup>
import { useRoute } from 'vue-router'
import { ref,computed,defineProps } from 'vue'

const props = defineProps({
  to: String
})

const route = useRoute()
  const isActive = computed(() => route.path === props.to)

</script>


<template>
 <router-link :to="to" class="link" :class="{ isActive: isActive } ">

<button :class="{isActive:isActive}" class="primary font-lato
 font-bold text-lg flex justify-center items-center gap-[11px] w-full" 
>
  <slot/>
</button>
  </router-link>

</template>



<style scoped>
.primary{
  background-color: #BFBFBF;
  padding: 11px 20px;
  border-radius: 60px;
  color:white;
}

.isActive{
  background-color: #F22539;
  border-radius: 60px;

}

</style>



