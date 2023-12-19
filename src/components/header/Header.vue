<template>
  <v-row class="d-flex flex-row justify-lg-space-between title" style="background-color: rgb(0, 97, 127)">
    <v-col cols="3" class="ml-8 loader-display">
      <div id="loader" class="loader">
        <h1 id="codeit"></h1>
      </div>
    </v-col>
    <v-col cols="2" class="align-self-center">
      <p class="hover-effect tracking-in-expand-forward-top" style="width: 70px; color: #D7CDBB" @click="goToComponent('aboutme')">About me</p>
    </v-col>
    <v-col cols="2" class="align-self-center">
      <p class="hover-effect tracking-in-expand-forward-top" style="width: 82px; color: #D7CDBB" @click="goToComponent('experience')" >Experience</p>
    </v-col>
    <v-col cols="2" class="align-self-center">
      <p class="hover-effect tracking-in-expand-forward-top" style="width: 96px; color: #D7CDBB" @click="goToComponent('technologies')" >Technologies</p>
    </v-col>

    <v-col class="align-self-center">
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
import { ref,onMounted } from 'vue';
import FormGmail from "@/components/dialogs/FormGmail.vue";
import TypeIt from "typeit/src/TypeIt";

const emit = defineEmits(['sendGoTo'])

const goToComponent = (type) => {

  emit('sendGoTo', type);
};
const gmailDialog = ref(false);

const openGmailDialog = () => {
  gmailDialog.value = true;
};

const closeGmailDialog = () => {
  gmailDialog.value = false;
};


const showLoader = ref(true);

onMounted(() => {
  const typeItInstance = new TypeIt('#codeit', {
    speed: 150,
    startDelay: 900,
    loop: true,
    afterComplete: (instance) => {
      showLoader.value = false;
    },
  });

  typeItInstance
      .type('<em class="c-braces" style="margin-right: 6px;">{{</em><em class="c-braces">}}</em>')
      .pause(800)
      .delete(2)
      .pause(600)
      .type('<em>PABLO</em>')
      .pause(1050)
      .delete(5)
      .pause(1050)
      .type('<em>DEVELOPER </em><em class="c-braces">}}</em>')
      .pause(1500)
      .go();
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Courier+Prime&display=swap');

.hover-effect:hover {
  cursor: pointer;
  color: #fff !important;
}

.title{
  font-family: 'Kdam Thmor Pro', sans-serif!important;
}


.wobble-horizontal-bottom{animation:wobble-horizontal-bottom 2s linear both} @keyframes wobble-horizontal-bottom{0%,100%{transform:translateX(0);transform-origin:50% 50%}15%{transform:translateX(-30px) rotate(-6deg)}30%{transform:translateX(15px) rotate(6deg)}45%{transform:translateX(-15px) rotate(-3.6deg)}60%{transform:translateX(9px) rotate(2.4deg)}75%{transform:translateX(-6px) rotate(-1.2deg)}}

.tracking-in-expand-forward-top{animation:tracking-in-expand-forward-top 0.4s linear both} @keyframes tracking-in-expand-forward-top{0%{letter-spacing:-.2em;transform:translateZ(-700px) translateY(-100px);opacity:0}40%{opacity:.6}100%{transform:translateZ(0) translateY(0);opacity:1}}.loader {
  display: flex;
  margin-top: 7px;
  margin-left: 15px;
}

.loader h1 {
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;
}

.loader h1 em {
  font-family: 'Kdam Thmor Pro', sans-serif!important;
  font-style: normal;
}

.loader .c-braces {
  letter-spacing: -8px;
  vertical-align: middle;
}

v-col p:hover{
}

@media (max-width:320px)  {  }
@media (max-width:481px)  {  }
@media (max-width:641px)  {  }
@media (max-width:961px)  {  }
@media (max-width:1025px) {
  .loader-display{
    display: none;
  }
}
@media (max-width:1281px)
</style>