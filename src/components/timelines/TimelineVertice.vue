<template>
  <v-timeline direction="horizontal">

    <v-timeline-item>
      <template v-slot:icon>
        <v-avatar size="88" class="scale-up-center" image="https://cdn2.iconfinder.com/data/icons/designer-skills/128/code-programming-javascript-software-develop-command-language-512.png"></v-avatar>
      </template>
      <div>
        <div class="text-h6"><strong>Proyecto contenidos SCORM</strong></div>
        <p>
          Introducción de nuevas funcionalidades y mejoras usando JavaScript, CSS y JQuery. Como por ejemplo: Versión
          móvil responsive en todo tipo de dispositivos y navegadores, Audioteca y Videoteca, Accesibilidad AA y mejoras
          de rendimiento.
        </p>
      </div>
    </v-timeline-item>

    <v-timeline-item>
      <template v-slot:icon>
        <v-avatar size="88" class="scale-up-center" image="https://cdn-icons-png.flaticon.com/512/8943/8943377.png"></v-avatar>
      </template>
      <div>
        <div class="text-h6"><strong>VeGA</strong></div>
        <p>
          Creación del asistente virtual VeGA en los cursos, integrado con la API de ChatGPT y el cuál tiene funcionalidades como estados de Online/Offline y vidas restantes.
        </p>
      </div>
    </v-timeline-item>
    <v-timeline-item>
      <template v-slot:icon>
        <v-avatar size="88" class="scale-up-center" image="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png"></v-avatar>
      </template>
      <div>
        <div class="text-h6"><strong>Proyecto Angular</strong></div>
        <p>
          Panel de administración para el Chatbot VeGA en el que se tiene un CRUD para que cualquier usuario administrador pueda encargarse de las tareas relacionadas con el chat y los dominios y pueda obtener toda la información y métricas sobre el rendimiento y uso del chatbot.
        </p>
      </div>
    </v-timeline-item>

    <v-timeline-item>
      <template v-slot:icon>
        <v-avatar size="88" class="scale-up-center" image="https://vuejs.org/images/logo.png"></v-avatar>
      </template>
      <div>
        <div class="text-h6"><strong>Proyecto Vue</strong></div>
        <p>
          Campus virtual de E-Learning en el que realicé toda la parte de vistas y funcionalidades del usuario alumno, introduciendo librerías como FullCalendarJS.
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