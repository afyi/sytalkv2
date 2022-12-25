<script setup lang="ts">
  defineProps<{msg: string}>();
  const emits = defineEmits(['increase']);
  const handelClick = () => {
    emits('increase', "a", "b", "c");
  };
</script>

<template><h1 class="green" @click="handelClick">{{ msg }}</h1></template>