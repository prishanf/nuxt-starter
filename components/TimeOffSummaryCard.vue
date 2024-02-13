<template>
  <div class="p-4 border-b">
    <div class="grid grid-cols-2 p-4">
      <div class="border-r-2 flex flex-col items-center p-3">
        <div class="text-base">Paid Time Off</div>
        <div class="flex justify-center items-center gap-2">
          <Icon name="mdi:palm-tree" class="text-primary text-3xl "></Icon>
          <div class="text-3xl text-primary">40.2</div>
        </div>
        <div class="text-base text-primary">Hours Available</div>
      </div>
      <div class="flex flex-col items-center p-3">
        <div class="text-base">Sick Leave</div>
        <div class="flex justify-center items-center gap-2">
          <Icon name="mdi:bandage" class="text-primary text-3xl "></Icon>
          <div class="text-2xl text-primary">40.2</div>
        </div>
        <div class="text-base text-primary">Hours Available</div>
      </div>
    </div>
    <UButton
      icon="i-mdi-history"
      label="Request Time Off"
      block
      size="xl"
    ></UButton>
  </div>
</template>

<script lang="ts" setup>

</script>

<style>

</style>