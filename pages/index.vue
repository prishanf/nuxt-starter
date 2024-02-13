<template>
  <nav class="flex justify-between p-3 bg-primary text-white">
    <Icon name="mdi:user" class="w-5 h-5"></Icon>
    <h2 class="text-white">Home</h2>
    <Icon name="mdi:calendar" class="w-5 h-5"></Icon>
  </nav>
  <div class="flex justify-evenly p-2">
    <MeticCard icon="mdi:palm-tree" value="234" title="Total Staff"></MeticCard>
    <MeticCard icon="mdi:palm-tree" value="234" title="Total Staff"></MeticCard>
    <MeticCard icon="mdi:palm-tree" value="234" title="Total Staff"></MeticCard>
    <MeticCard icon="mdi:palm-tree" value="234" title="Total Staff"></MeticCard>
    <MeticCard icon="mdi:palm-tree" value="234" title="Total Staff"></MeticCard>
  </div>
  <!-- User Prifle Card -->
  <div class="grid grid-cols-1 md:grid-cols-2 gap-3 p-4">
    <div>
      <ProfileCard :name="profile.name" :title="profile.title" :email="profile.email" phone="778-998-9988" />
      <TimeOffSummaryCard />
      <TimeOffDetails></TimeOffDetails>
    </div>
    <div class="flex flex-col gap-4">
      <TimeOffList section-title="Time Off Request" :time-off-records="timeOffItems" />
      <TimeOffList section-title="Pening Approval" :time-off-records="timeOffPendingApprovals" />
      <TimeOffList section-title="History" :time-off-records="timeOffHistory" />
    </div>
    <SelectButton v-model="selectedOption" :options="options">

    </SelectButton>
    <div>{{ selectedOption }}</div>

  </div>
</template>
<script lang="ts" setup>
type TimeOffRecord = {
  name: string;
  timeOffDatesString: string;
  hours: number;
};
const profile = {
  name: 'Charllotte Abbott',
  title: "HR- Prayroll - Vancouver Canada",
  email: "prishan.fernando@gmail.com",
  phone: "778-998-9988"
}
const timeOffItems: TimeOffRecord[] = [
  {
    name: "Patricia Williams",
    timeOffDatesString: "Nov 3 - Nov 25, 2024",
    hours: 8,
  },
  { name: "John Doe", timeOffDatesString: "Nov 3 - Nov 25, 2024", hours: 8 },
  {
    name: "Jane Smith",
    timeOffDatesString: "Nov 3 - Nov 25, 2024",
    hours: 8,
  },
  {
    name: "James Brown",
    timeOffDatesString: "Nov 3 - Nov 25, 2024",
    hours: 8,
  },
  {
    name: "Robert Johnson",
    timeOffDatesString: "Nov 3 - Nov 25, 2024",
    hours: 8,
  },
]
const timeOffPendingApprovals: TimeOffRecord[] = [
  {
    name: "James Brown",
    timeOffDatesString: "Nov 3 - Nov 25, 2024",
    hours: 8,
  },
  {
    name: "Robert Johnson",
    timeOffDatesString: "Nov 3 - Nov 25, 2024",
    hours: 8,
  }
]
const timeOffHistory: TimeOffRecord[] = [

]


const selectedOption = ref('nopay')
const options= [
        { label: 'Vacation', value: 'vaction' , icon:'mdi:palm-tree' },
        { label: 'Sick', value: 'sick' , icon:'mdi:bandage' },
        { label: 'No Pay', value: 'nopay' , icon:'mdi:bandage' },
        { label: 'Sick 1', value: 'sick1' , icon:'mdi:bandage' },
        { label: 'No Pay 1', value: 'nopay2' , icon:'mdi:bandage' }
      ]
</script>
