<template>
  <div class="border rounded-lg p-3 flex flex-col gap-4 min-w-48">
    
    <div class="flex gap-2 items-center">
      <Icon :name="icon" class="text-2xl"></Icon>
      <h2 class="text-base text-stone-500">{{ title }}</h2>
    </div>
    <h2 class="text-2xl text-primary p-2">{{ value }}</h2>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps(["title", "value", "icon"]);
</script>

<style>

</style>