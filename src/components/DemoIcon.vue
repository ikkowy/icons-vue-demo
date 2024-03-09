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
  border: 4px solid black;
  cursor: pointer;
}

.demo-icon:hover {
  fill: red;
}

.demo-icon-caption {
  box-sizing: border-box;
  font-size: 0.8em;
  width: 6em;
  margin-top: 4px;
  padding: 2px;
  text-align: center;
}

.demo-icon-caption::selection {
  background-color: black;
  color: white;
}
</style>
