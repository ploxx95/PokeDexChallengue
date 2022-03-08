<script setup>



</script>


<template>
    <main class="flex flex-col items-center px-6  " >
        <div class="pt-[70px] pb-[60px]">
            <img src="/welcome.png" />
        </div>
        <h1 class="font-lato text-[26px] font-bold" >Welcome to Pokédex</h1>
        <p class="font-lato text-[18px] max-w-[570px] text-center pt-[30px] pb-[50px]" >The digital encyclopedia created by Professor Oak is an invaluable tool to Trainers in the Pokémon world.</p>
       
       <router-link
        to="/home"
        >
        <button id="primary" >Get started</button>
        </router-link>
    </main>
</template>

<style scoped>


</style>