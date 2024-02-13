<template>
  <div class="flex justify-start p-3 gap-3 border-b-2">
    <div>
      <UAvatar class="w-10 h-10" :alt="name"></UAvatar>
    </div>
    <div class="flex flex-col gap-1">
      <div class="text-lg font-semibold">{{name}}</div>
      <div class="text-sm">
        <div class="flex items-center gap-2">
          <Icon name="mdi:calendar" class="text-primary text-sm gap-2"></Icon>
          <div>{{ timeOffDatesString }}</div>
        </div>
        <div class="flex items-center gap-2">
          <Icon name="mdi:palm-tree" class="text-primary text-sm gap-2"></Icon>
          <div>{{ hours }} Hours of Vacation</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps(["name", "timeOffDatesString", "hours"]);
</script>

<style></style>
