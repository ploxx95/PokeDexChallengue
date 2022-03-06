<script setup>
import { ref, onMounted } from 'vue'

// reactive state
const message = ref("Hola Mundo")

// functions that mutate state and trigger updates
function reverseWords() {
    message.value = message.value.split('').reverse().join('')
}

function addCharacter(character){
    message.value += character
}

function reset() {
    message.value=""
}

// lifecycle hooks
onMounted(() => {
  console.log(`The initial count is ${message.value}.`)
})
</script>

<template>
<h1>{{message}}</h1>
  <button @click="reverseWords">Reverse</button>
  <br/>
  <button @click="addCharacter('?')">  ?  </button>
  <br/>
  <button @click="addCharacter('!')">  !  </button>
  <br/>
  <button @click="reset">  RESET  </button>
  <!-- <button @click="increment">Count is: {{ count }}</button> -->
</template>