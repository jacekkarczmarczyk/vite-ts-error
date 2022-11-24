<template>
  <div>
    <the-foo />
    <the-bar :foo="{}" />
  </div>
</template>

<script setup lang="ts">
import TheFoo from '@/TheFoo.vue';
import TheBar from '@/TheBar.vue';
</script>
