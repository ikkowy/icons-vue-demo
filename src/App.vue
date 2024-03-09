<script setup>
  import { IconIndex } from "@ikkowy/icons-vue";
  import DemoIcon from "./components/DemoIcon.vue";
</script>

<template>
  <header>
    <p>Copyright (C) 2024 Vincent Westenberg</p>
    <p>Number of icons: {{ Object.keys(IconIndex).length }}</p><br>
  </header>
  <main style="display: flex; gap: 15px; flex-wrap: wrap;">
    <demo-icon v-for="(_, name) in IconIndex" :name="name" />
  </main>
</template>

<style>
body {
  font-family: 'Courier New', Courier, monospace;
}
</style>
