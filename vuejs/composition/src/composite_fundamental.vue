<template>
  {{ msg }}
  <button @click="a++">{{ a }}</button>
  <button @click="b++">{{ b }}</button>
  {{ total }}
  <div v-for="number in histroy" :key="number">{{ number }}</div>
</template>
<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from "./components/HelloWorld.vue";
import { ref, reactive, computed, watch, watchEffect } from "vue";
import { useNumber } from "./useNumber";
export default {
  setup() {
    return useNumber();
  },
  // components:
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
