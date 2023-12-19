<template>
    <v-row class="mt-4 ml-10">
      <v-col cols="12">
        <div class="d-flex flex-row title text-h5">
          <p style="color: red">1.</p>
          <p>&nbsp;About me</p>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="6" lg="3" class="ml-md-10 align-self-center center">
        <v-avatar style="background-color: #c0daea" class="elevation-24" size="300">
          <v-img src="/Prueba2.png" tile />
        </v-avatar>
      </v-col>
      <v-col cols="12" md="6" lg="7">
        <div class="text-about-me text-center">
          <p><h1>¡Hola!</h1> Mi nombre es <strong>Pablo Gutiérrez Campos </strong>, soy Técnico Superior en Desarrollo de Aplicaciones Web, desde muy pequeño ya empecé a interesarme por la tecnología y los ordenadores, es por ello por lo que siempre quise estudiar algo
            relacionado con la informática y decidí entrar en el <strong>Grado Superior de DAW en el I.E.S. Politécnico Jesús Marín</strong> dónde aprendí mucho y me formé profesionalmente para la vida laboral.</p>
          <br>
          <p>
            Una vez terminado mis estudios, empecé las prácticas en <strong>DEKRA Product Testing & Certification</strong> que duraron 3 meses los cuáles me enseñaron sobre cómo es trabajar realmente en una empresa, la comunicación con los compañeros y el flujo de trabajo en grandes proyectos.
            Después de terminar mi formación, el paso final fue <strong>presentar el TFG</strong> ante el profesorado dónde obtuve el aprobado y el título.
            El siguiente paso en mi carrera profesional fue empezar a trabajar en la <strong>Editorial E-Learning de Grupo Vértice</strong>, dónde he estado más de un año trabajando en diferentes proyectos como mejoras en contenidos SCORM o en un Campus Virtual.

          </p>
          <br>
          <p>Por último, te doy la bienvenida a mi portfolio, en el que podrás ver con más detalle todos los proyectos en los que he trabajado y el correspondiente stack tecnológico de cada uno así cómo las diferentes tecnologías que he utilizado y aprendido
            durante este tiempo.
            <br> También puedes visitar mi <strong>perfil de LinkedIn</strong> para conocerme un poco más o mandarme un correo electrónico si quieres contactar conmigo.</p>
          <br>
          <p>Espero que te guste y... <strong>¡Gracias por la visita!</strong></p>

        </div>
      </v-col>
    </v-row>
</template>

<script setup></script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Kdam+Thmor+Pro&display=swap');

.title {
  font-family: 'Kdam Thmor Pro', sans-serif !important;
}

.text-about-me strong {
  color: #1a2a7d;
}

.text-about-me p {
  font-size: 18px;
}

@media (max-width:320px)  {  }
@media (max-width:481px)  {  }
@media (max-width:641px)  {
  .center{
    text-align-last: center!important;

  }
}
@media (max-width:961px)  {  }
@media (max-width:1025px) {  }
@media (max-width:1281px)

</style>
