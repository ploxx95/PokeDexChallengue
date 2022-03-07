<script setup>
import { ref, onMounted } from 'vue'
import ToggleStar from './ToggleStar.vue';


</script>


<template>
<div class="min-w-min	">
    <div id="containerImg" >
        <img src=""/>
    </div>
    <div id="infoCard" class="bg-white px-[30px] pb-5 pt-[10px] ">
 
        <p><span>Name :</span>Squirtle</p>
        <hr>
        <p><span>Weight :</span>20</p>
        <hr>
        <p><span>Height :</span>18</p>
        <hr>
        <p><span>Types :</span>Normal, Water</p>
        <hr>

    <div class="flex justify-between mt-5">

        <button id="primary">Share to my friends</button>   
        <ToggleStar/>
    </div>
    </div>

</div>
</template>


<style scoped>
#containerImg{
    background: url(../assets/landscape.png) no-repeat;
    background-position: center center;
    background-size: cover;
    padding:20px 0
}
#infoCard hr {
   border-color: #E8E8E8;
}

#infoCard p {
    font-size: 18px;
    color:#5E5E5E;
    padding: 10px 0;
}
#infoCard p span{
font-weight: bold;
}
</style>