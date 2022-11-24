<template>
  <div>{{ foo }}</div>
</template>

<script setup lang="ts">
defineProps<{
  foo: boolean;
}>();
</script>
