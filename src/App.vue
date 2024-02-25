<script setup>
  import { IconIndex } from "@ikkowy/icons-vue";
  import DemoIcon from "./components/DemoIcon.vue";
</script>

<template>
  <main style="display: flex; gap: 15px; flex-wrap: wrap;">
    <demo-icon v-for="(_, name) in IconIndex" :name="name" />
  </main>
</template>

<style scoped>
main {
  font-family: Arial, Helvetica, sans-serif;
}
</style>
