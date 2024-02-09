<template>
  <nav class="flex justify-between p-3 bg-primary text-white">
    <Icon name="mdi:user" class="w-5 h-5"></Icon>
    <h2 class="text-white">Home</h2>
    <Icon name="mdi:calendar" class="w-5 h-5"></Icon>
  </nav>
   <!-- User Prifle Card -->
   <div class="bg-stone-100 flex flex-col items-center p-4">
    <UAvatar img-class="w-24 h-24" class="w-24 h-24" size="3xl" src="https://www.shutterstock.com/shutterstock/photos/2107967969/display_1500/stock-vector-young-smiling-man-adam-avatar-d-vector-people-character-illustration-cartoon-minimal-style-2107967969.jpg"></UAvatar>
    <div class="text-2xl text-primary font-semibold">Charllotte Abbott</div>
    <div class="text-sm text-gray-500">HR- Prayroll - Vancouver Canada</div>
  </div>
  <!-- Time Off Summary Card -->
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
 
  <div>
    <div class="p-3 bg-stone-100 flex gap-2 text-primary">
      <Icon name="mdi:inbox" class="text-primary text-xl gap-2"></Icon>
      <div class="text-sm">Time Off Requests(2)</div>
      </div>
      <div class="flex justify-start p-3 gap-3 border-b-2">
        <div>
          <UAvatar class="w-10 h-10"  alt="AJ"></UAvatar>
        </div>
        <div class="flex flex-col gap-1">
          <div class="text-lg font-semibold">Amelia James</div>
          <div class="text-sm">
          <div class="flex items-center gap-2">
            <Icon name="mdi:calendar" class="text-primary text-sm gap-2"></Icon>
            <div>Nov- 18 -21, 2024</div>
          </div>
          <div class="flex items-center gap-2">
            <Icon name="mdi:palm-tree" class="text-primary text-sm gap-2"></Icon>
            <div>8 Hours of Vacation</div>
          </div>
         </div>
        </div>
      </div>

      <div class="flex justify-start p-3 gap-3 border-b-2">
        <div>
          <UAvatar class="w-10 h-10"  alt="AJ"></UAvatar>
        </div>
        <div class="flex flex-col gap-1">
          <div class="text-lg font-semibold">Amelia James</div>
          <div class="text-sm">
          <div class="flex items-center gap-2">
            <Icon name="mdi:calendar" class="text-primary text-sm gap-2"></Icon>
            <div>Nov- 18 -21, 2024</div>
          </div>
          <div class="flex items-center gap-2">
            <Icon name="mdi:palm-tree" class="text-primary text-sm gap-2"></Icon>
            <div>8 Hours of Vacation</div>
          </div>
         </div>
        </div>
      </div>
    </div>

    <div>
    <div class="p-3 bg-stone-100 flex gap-2 text-primary">
      <Icon name="mdi:inbox" class="text-primary text-xl gap-2"></Icon>
      <div class="text-sm">Time Off Requests(2)</div>
      </div>
      <div class="flex justify-start p-3 gap-3 border-b-2">
        <div>
          <UAvatar class="w-10 h-10"  alt="AJ"></UAvatar>
        </div>
        <div class="flex flex-col gap-1">
          <div class="text-lg font-semibold">Amelia James</div>
          <div class="text-sm">
          <div class="flex items-center gap-2">
            <Icon name="mdi:calendar" class="text-primary text-sm gap-2"></Icon>
            <div>Nov- 18 -21, 2024</div>
          </div>
          <div class="flex items-center gap-2">
            <Icon name="mdi:palm-tree" class="text-primary text-sm gap-2"></Icon>
            <div >8 Hours of Vacation</div>
          </div>
         </div>
        </div>
      </div>

      <div class="flex justify-start p-3 gap-3 border-b-2">
        <div>
          <UAvatar class="w-10 h-10"  alt="AJ"></UAvatar>
        </div>
        <div class="flex flex-col gap-1">
          <div class="text-lg font-semibold">Amelia James</div>
          <div class="text-sm">
          <div class="flex items-center gap-2">
            <Icon name="mdi:calendar" class="text-primary text-sm gap-2"></Icon>
            <div>Nov- 18 -21, 2024</div>
          </div>
          <div class="flex items-center gap-2">
            <Icon name="mdi:palm-tree" class="text-primary text-sm gap-2"></Icon>
            <div>8 Hours of Vacation</div>
          </div>
         </div>
        </div>
      </div>
    </div>
</template>
