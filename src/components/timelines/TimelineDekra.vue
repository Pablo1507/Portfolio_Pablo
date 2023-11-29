<template>
  <v-timeline direction="horizontal">

    <v-timeline-item>
      <template v-slot:icon>
        <v-avatar size="88" class="scale-up-center" image="https://play-lh.googleusercontent.com/dsCkmJE2Fa8IjyXERAcwc5YeQ8_NvbZ4_OI8LgqyjILpXUfS5YhEcnAMajKPrZI-og"></v-avatar>
      </template>
      <div class="mb-5">
        <div class="text-h6"><strong>Cursos de formación Udemy y Codely</strong></div>
        <p>
          Empecé mis prácticas en Dekra con unos cursos de formación sobre Spring Boot y también diferentes cursos sobre Testing y Arquitectura Hexagonal en Codely.
        </p>
      </div>
    </v-timeline-item>

    <v-timeline-item>
      <template v-slot:icon>
        <v-avatar class="mb-3 scale-up-center" size="120" image="https://cdn-icons-png.flaticon.com/512/1066/1066422.png"></v-avatar>
      </template>
      <div class="mt-5">
        <div class="text-h6"><strong>Resolución de Issues</strong></div>
        <p>
          A modo de iniciación para ir adaptándome en los proyectos empecé resolviendo pequeñas issues. Los lenguajes que usé aquí fueron Angular para el Frontend y Spring Boot para el Backend.
        </p>
      </div>
    </v-timeline-item>
    <v-timeline-item>
      <template v-slot:icon>
        <v-avatar size="88" class="scale-up-center" image="https://cdn.worldvectorlogo.com/logos/telefonica.svg"></v-avatar>
      </template>
      <div class="mb-5">
        <div class="text-h6"><strong>Proyecto Telefónica</strong></div>
        <p>
          En este proyecto de Telefónica realicé toda la lógica de un componente Panel de Notificaciones en el que había las clásicas funcionalidades de guardado, búsquedas en árbol (notificaciones principales, secundarias, etc). Trabajé con Angular para el Frontend y con Spring Boot para el Backend.
        </p>
      </div>
    </v-timeline-item>

  </v-timeline>
</template>

<script setup>

</script>

<style scoped>
.scale-up-center{animation:scale-up-center 1s; } @keyframes scale-up-center{ 0%{transform:scale(.5)} 100%{transform:scale(1)} }

</style>