<script setup>
const props = defineProps({
  name: String
});
</script>

<template>
  <span style="display: inline-flex; flex-direction: column; align-items: center;">
    <iwy-icon class="demo-icon" :name="props.name" look="solid" size="4em" />
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
