<template>
  <div>
    <div class="p-3 bg-stone-100 flex gap-2 text-primary">
      <Icon name="mdi:inbox" class="text-primary text-xl gap-2"></Icon>
      <div class="text-sm"><span>{{ sectionTitle }}</span> <span v-if="timeOffRecords">({{ timeOffRecords?.length }})</span> </div>
    </div>
    <TimeOffListItem v-if="timeOffRecords" v-for="item in timeOffRecords" :key="item.name" :name="item.name"
      :timeOffDatesString="item.timeOffDatesString" :hours="item.hours" />
    <div v-else class="text-center p-3">
      No Records Found
    </div>
  </div>
</template>

<script lang="ts" setup>
type TimeOffRecord = {
  name: string;
  timeOffDatesString: string;
  hours: number;
};
const props = defineProps({
  sectionTitle: String,
  timeOffRecords: Array<TimeOffRecord>,
});

</script>

<style></style>
