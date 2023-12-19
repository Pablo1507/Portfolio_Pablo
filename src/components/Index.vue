<template>
  <v-container  fluid>
    <v-row v-if="!isMobile()">
      <Header @click="handleClick" @sendGoTo="receiveGoTo" />
    </v-row>
    <v-row v-else>
      <HeaderMobile/>
    </v-row>

    <v-row id="aboutme" class="mt-16 ml-8">
      <AboutMe />
    </v-row>

    <v-row id="experience" class="mt-16 ml-8">
      <Experience ref="targetRef" />
    </v-row>

    <v-row id="technologies" class="mt-16 ml-8">
      <Technologies />
    </v-row>

    <v-row class="mt-10 ma-7">
      <Footer />
    </v-row>
  </v-container>
</template>

<script setup>
import Header from "@/components/header/Header.vue";
import Experience from "@/components/experience/Experience.vue";
import AboutMe from "@/components/aboutme/AboutMe.vue";
import Technologies from "@/components/technologies/Technologies.vue";
import Footer from "@/components/footer/Footer.vue";
import { ref } from "vue";
import HeaderMobile from "@/components/header/HeaderMobile.vue";

const type = ref();
const targetRef = ref();

function receiveGoTo(typeGoTo) {
  type.value = typeGoTo;
}

const handleClick = () => {
  switch (type.value) {
    case "aboutme":
      targetRef.value = "aboutme";
      break;
    case "experience":
      targetRef.value = "experience";
      break;
    case "technologies":
      targetRef.value = "technologies";
      break;

    default:
      targetRef.value = null;
  }

  if (targetRef.value) {
    const targetElement = document.getElementById(targetRef.value);
    if (targetElement) {
      targetElement.style.position = "relative";
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  }
};

function isMobile() {
  if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    return true
  } else {
    return false
  }
}
</script>

<style scoped>
body {
  overflow-x: hidden;
}

* {
  margin: 0;
  padding: 0;
}


</style>
