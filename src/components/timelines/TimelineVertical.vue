<template>
  <v-timeline side="end" align="start">
    <v-timeline-item :dot-color="getDotColor('vertice')" size="small">
      <div class="d-flex">
        <div>
          <button @click="sendType('vertice')" :class="{ 'selected': selectedItem === 'vertice' }" id="vertice">
            <strong>Grupo Vértice</strong>
          </button>
          <div class="text-caption mb-2">
            Jul 2022 - Oct 2023
          </div>
        </div>
      </div>
    </v-timeline-item>
    <v-timeline-item :dot-color="getDotColor('dekra')" size="small">
      <div class="d-flex">
        <div>
          <button @click="sendType('dekra')" :class="{ 'selected': selectedItem === 'dekra' }" id="dekra">
            <strong>DEKRA</strong>
          </button>
          <div class="text-caption mb-2">
            Mar 2022 - Jun 2022
          </div>
        </div>
      </div>
    </v-timeline-item>
    <v-timeline-item :dot-color="getDotColor('tfg')" size="small">
      <div class="d-flex">
        <div>
          <button @click="sendType('tfg')" :class="{ 'selected': selectedItem === 'tfg' }" id="tfg">
            <strong>TFG DAW</strong>
          </button>
          <div class="text-caption mb-2">
            Mar 2022 - Jun 2022
          </div>
        </div>
      </div>
    </v-timeline-item>
  </v-timeline>
</template>

<script setup>
import { ref } from 'vue';

const emit = defineEmits(['sendType']);

const selectedItem = ref('vertice');

const sendType = (type) => {
  selectedItem.value = type;
  emit('sendType', type);
};

const getDotColor = (type) => (selectedItem.value === type ? '#8fc77b' : 'blue');
</script>

<style scoped>
.text-caption {
  font-size: 10px !important;
}

.selected {
  color: #c44633 !important;
}
</style>
