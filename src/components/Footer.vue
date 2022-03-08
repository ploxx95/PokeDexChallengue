
<script setup>
import ButtonNav from './ButtonNav.vue';
import AllIcon from '../assets/icon/AllIcon.vue';
import StarIcon from '../assets/icon/StarIcon.vue';

</script>


<template>
<footer id="shadowFooter" class=" bg-white px-[30px] py-[18px] w-full absolute bottom-0">
    <div id="navContain" class="flex gap-4 md:gap-5 max-w-[570px] m-auto ">
        <ButtonNav to="/home"><AllIcon/> All</ButtonNav>
        <ButtonNav to="/favoritos" ><StarIcon/>Favorites</ButtonNav>
    </div>
</footer>
</template>

<style scoped>
#shadowFooter{box-shadow: 0px -5px 4px rgba(0, 0, 0, 0.05);}
#navContain a{
    width: 100%;
}

</style>