<script setup>
import { ref } from "vue";

const props = defineProps({
  name: String
});

const isSolid = ref(false);
</script>

<template>
  <span style="display: inline-flex; flex-direction: column; align-items: center;" v-on:click="isSolid = !isSolid">
    <iwy-icon class="demo-icon" :name="props.name" :look="isSolid ? 'solid' : 'regular'" size="4em" />
    <span class="demo-icon-caption">{{ props.name }}</span>
  </span>
</template>

<style scoped>
.demo-icon {
  border: 2px solid black;
  cursor: pointer;
}

.demo-icon:hover {
  fill: red;
}

.demo-icon-caption {
  font-size: 0.8em;
  margin-top: 4px;
}

.demo-icon-caption::selection {
  background-color: black;
  color: white;
}
</style>
