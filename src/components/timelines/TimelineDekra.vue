<template>
  <v-container>
  <v-timeline direction="horizontal">
    <v-timeline-item>
      <template v-slot:icon>
        <v-avatar size="88" class="mb-3 scale-up-center avatar-zoom" image="https://play-lh.googleusercontent.com/dsCkmJE2Fa8IjyXERAcwc5YeQ8_NvbZ4_OI8LgqyjILpXUfS5YhEcnAMajKPrZI-og"></v-avatar>
      </template>
      <div class="mb-8 mobile-zoom">
        <div class="text-h6"><strong>Cursos de formación Udemy y Codely</strong></div>
        <p>
          Empecé mis prácticas en Dekra con cursos de formación sobre Spring Boot y también realicé diferentes cursos sobre Testing y Arquitectura Hexagonal en Codely.
        </p>
      </div>
    </v-timeline-item>

    <v-timeline-item>
      <template v-slot:icon>
        <v-avatar class="mb-3 scale-up-center avatar-zoom" size="120" image="https://cdn-icons-png.flaticon.com/512/1066/1066422.png"></v-avatar>
      </template>
      <div class="mt-8 mobile-zoom">
        <div class="text-h6"><strong>Resolución de Issues</strong></div>
        <p>
          Inicié resolviendo pequeñas issues en proyectos para adaptarme. Los lenguajes que usé aquí fueron Angular para el Frontend y Spring Boot para el Backend.
        </p>
      </div>
    </v-timeline-item>

    <v-timeline-item>
      <template v-slot:icon>
        <v-avatar size="88" class="mb-3 scale-up-center avatar-zoom" image="https://cdn.worldvectorlogo.com/logos/telefonica.svg"></v-avatar>
      </template>
      <div class="mb-8 mobile-zoom">
        <div class="text-h6"><strong>Proyecto Telefónica</strong></div>
        <p>
          En el proyecto de Telefónica, desarrollé toda la lógica de un componente Panel de Notificaciones con funcionalidades como guardado y búsquedas en árbol. Trabajé con Angular para el Frontend y Spring Boot para el Backend.
        </p>
      </div>
    </v-timeline-item>
  </v-timeline>
  </v-container>
</template>

<script setup>
</script>

<style scoped>
.scale-up-center { animation: scale-up-center 1s; }
@keyframes scale-up-center { 0% { transform: scale(.5); } 100% { transform: scale(1); } }

@media (max-width:641px)  {
  .mobile-zoom{
    width: 300px;
    zoom: 0.7;
    font-size: 12px;
  }

  .avatar-zoom{
    zoom: 0.8;
  }
}
</style>
