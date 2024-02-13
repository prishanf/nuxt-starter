<template>
  <div class="bg-stone-100 flex flex-col items-center p-4">
    <UAvatar :alt="name" img-class="w-24 h-24" class="w-24 h-24" size="3xl"
      src="https://www.shutterstock.com/shutterstock/photos/2107967969/display_1500/stock-vector-young-smiling-man-adam-avatar-d-vector-people-character-illustration-cartoon-minimal-style-2107967969.jpg">
    </UAvatar>
    <div class="text-2xl text-primary font-semibold">{{ name }}</div>
    <div v-if="title" class="text-sm text-gray-500">{{ title }}</div>
    <div v-if="email" class="text-sm text-gray-500">{{ email }}</div>
    <div v-if="phone" class="text-sm text-gray-500">{{ phone }}</div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps(["name", "title", 'phone', 'email']);
</script>

<style></style>