<template>
    <v-row class="mt-4 ml-10">
      <v-col>
        <div class="d-flex flex-row title text-h5">
          <p style="color: red">2. </p>
          <p>&nbspExperience</p>
        </div>
      </v-col>
    </v-row>

    <v-row class="d-flex flex-row ma-4 ml-5">
      <v-col cols="12" md="1" class="h-25">
        <TimelineVertical @sendType="receiveType" />
      </v-col>
      <v-col cols="12" md="10" style="margin-top: 12%; height: 300px;">
        <TimelineVertice v-show="type !== 'dekra' && type !== 'tfg'" />
        <TimelineDekra v-show="type === 'dekra'" />
        <TimelineTFG v-show="type === 'tfg'" />
      </v-col>
    </v-row>
</template>

<script setup>
import TimelineVertical from "@/components/timelines/TimelineVertical.vue";
import TimelineVertice from "@/components/timelines/TimelineVertice.vue";
import TimelineDekra from "@/components/timelines/TimelineDekra.vue";
import TimelineTFG from "@/components/timelines/TimelineTFG.vue";
import { ref } from "vue";

const type = ref();

function receiveType(newType) {
  type.value = newType;
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Kdam+Thmor+Pro&display=swap');

.title {
  font-family: 'Kdam Thmor Pro', sans-serif !important;
}

@media (max-width:320px)  {  }
@media (max-width:481px)  {  }
@media (max-width:641px)  {
  .mobile-zoom{
    width: 300px;
    zoom: 0.7;
    font-size: 12px;
  }
}
@media (max-width:961px)  {  }
@media (max-width:1025px) {
  .loader-display{
    display: none;
  }
}
@media (max-width:1281px)
</style>
