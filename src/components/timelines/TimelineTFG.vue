<template>
  <v-timeline direction="horizontal">

    <v-timeline-item>
      <template v-slot:icon>
        <v-avatar size="88" class="scale-up-center" image="https://avatarfiles.alphacoders.com/322/322784.png"></v-avatar>
      </template>
      <div class="mb-5">
        <div class="text-h6"><strong>Proyecto guardería Pokémon</strong></div>
        <p>
          Presenté mi idea de un sistema de gestión para una guardería Pokémon en el que podías dar de alta, eliminar, modificar datos de todos los Pokémon, además de poder registrarte como entrenador y tener los distintos Pokémon que tuviese cada entrenador. Una vez que me aprobaron la idea comencé a desarrollar el proyecto.
        </p>
      </div>
    </v-timeline-item>

    <v-timeline-item>
      <template v-slot:icon>
        <v-avatar size="88" class="scale-up-center" image="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png"></v-avatar>
      </template>
      <div class="mt-5">
        <div class="text-h6"><strong>Frontend Angular</strong></div>
        <p>
          En este proyecto usé para toda la parte del frontend el framework Angular.
        </p>
      </div>
    </v-timeline-item>
    <v-timeline-item>
      <template v-slot:icon>
        <v-avatar size="88" class="scale-up-center" image="https://pbs.twimg.com/profile_images/1163911054788833282/AcA2LnWL_400x400.jpg"></v-avatar>
      </template>
      <div class="mb-5">
        <div class="text-h6"><strong>Backend Laravel</strong></div>
        <p>
          Para la parte del backend y comunicación con la API, utilicé el framework de Laravel en PHP.
        </p>
      </div>
    </v-timeline-item>

    <v-timeline-item>
      <template v-slot:icon>
        <v-avatar size="88" class="scale-up-center" image="https://cdn-icons-png.flaticon.com/512/196/196361.png"></v-avatar>
      </template>
      <div class="mt-5">
        <div class="text-h6"><strong>Presentación TFG</strong></div>
        <p>
          Realicé la presentación y demostración de mi proyecto ante el profesorado y me dieron el aprobado final por lo que terminé mis estudios y obtuve el título de Grado Superior de Desarrollo de Aplicaciones Web
        </p>
      </div>
    </v-timeline-item>
  </v-timeline>
</template>

<script setup>

</script>

<style scoped>

.scale-up-center{animation:scale-up-center 1.2s; } @keyframes scale-up-center{ 0%{transform:scale(.5)} 100%{transform:scale(1)} }
</style>