
<template>
  <v-row class="d-flex flex-row justify-lg-space-between title" style="background-color: rgb(0, 97, 127)">
    <v-col cols="2" class="align-self-center">
      <p class="hover-effect tracking-in-expand-forward-top" style="width: 70px; color: #D7CDBB" @click="goToComponent('aboutme')">About me</p>
    </v-col>
    <v-col cols="2" class="align-self-center">
      <p class="hover-effect tracking-in-expand-forward-top" style="width: 82px; color: #D7CDBB" @click="goToComponent('experience')" >Experience</p>
    </v-col>
    <v-col cols="3" class="align-self-center">
      <p class="hover-effect tracking-in-expand-forward-top" style="width: 96px; color: #D7CDBB" @click="goToComponent('technologies')" >Technologies</p>
    </v-col>

    <v-col cols="5" class="align-self-center">
      <v-row>
        <v-col>
          <v-btn class="wobble-horizontal-bottom hover-effect" color="#D7CDBB" variant="plain"  icon="mdi-file-pdf-box" style="opacity: 1"
                 href="/Pablo_Gutiérrez_CV.pdf"
                 download
                 size="x-large">
          </v-btn>
        </v-col>
        <v-col>
          <v-btn class="wobble-horizontal-bottom hover-effect" color="#D7CDBB" variant="plain"  icon="mdi-linkedin" style="opacity: 1"
                 href="https://www.linkedin.com/in/pablo-gutiérrez-campos-80bb26232"
                 target="_blank" size="x-large">
          </v-btn>
        </v-col>
        <v-col>
          <v-btn class="wobble-horizontal-bottom hover-effect" color="#D7CDBB" variant="plain" icon="mdi-github" style="opacity: 1"
                 href="https://github.com/Pablo1507"
                 target="_blank" size="x-large"></v-btn>
        </v-col>
      </v-row>
    </v-col>

  </v-row>
</template>
<script setup>

</script>

<style scoped>

</style>