<template>
      <v-row class="mt-3">
        <Header/>
      </v-row>
      <v-row class="mt-16 ml-8">
        <AboutMe/>
      </v-row>
      <v-row class="mt-16 ml-8">
        <Experience/>
      </v-row>
      <v-row class="mt-16 ml-8">
        <Technologies/>
      </v-row>
      <v-row class="mt-10 ma-7">
        <Footer/>
      </v-row>

</template>


<script setup>

import Header from "@/components/header/Header.vue";
import Experience from "@/components/experience/Experience.vue";
import AboutMe from "@/components/aboutme/AboutMe.vue";
import Technologies from "@/components/technologies/Technologies.vue";
import Footer from "@/components/footer/Footer.vue";
</script>

<style scoped>


</style>