<template>
  <v-row  style="margin-top: 7%">
    <v-col cols="5" class="ml-10">
      <div class="d-flex flex-row title text-h5">
        <p style="color: red">3. </p>
        <p>&nbspTechnologies</p>
      </div>
    </v-col>

  <v-card class="mx-auto mt-10" flat style="background-color:#D7CDBB " max-width="80%">
    <v-row>
      <v-col v-for="card in cards" :key="card.title" :cols="card.flex">
        <v-card :href="card.doc" target="_blank">
          <v-img
              :src="card.src"
              class="align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
              cover

          >
            <v-card-title class="text-white" v-text="card.title"></v-card-title>
          </v-img>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
  </v-row>

</template>

<script>
export default {
  data: () => ({
    cards: [
      {
        title: 'Angular',
        src: 'https://wallpapers.com/images/featured/angular-85vhooptaw06gumk.jpg',
        flex: 4,
        doc: "https://angular.io/docs"
      },
      {
        title: 'Vue',
        src: 'https://i.pinimg.com/736x/d4/df/22/d4df220d581fd5bfb4eba9cb23ded3ff.jpg',
        flex: 4,
        doc: "https://vuejs.org/guide/introduction.html"

      },
      {
        title: 'Javascript/Typescript',
        src: 'https://miro.medium.com/v2/resize:fit:1358/1*a3BHGbuAMpOaZj6HkTrNqA.png',
        flex: 4,
        doc: "https://developer.mozilla.org/es/docs/Web/JavaScript"

      },
      {
        title: 'PHP',
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Php_logo.svg/722px-Php_logo.svg.png',
        flex: 4,
        doc: "https://www.php.net/docs.php"

      },
      {
        title: 'Laravel',
        src: 'https://res.cloudinary.com/practicaldev/image/fetch/s--hRt7NyGl--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/tzcyeynbg9c4sfkidgas.jpg',
        flex: 4,
        doc: "https://laravel.com/docs/10.x/readme"

      },
      {
        title: 'Symfony',
        src: 'https://vabadus.es/images/cache/thumb_listado/images/articulos/63fa32ce14aa4892052295.png',
        flex: 4,
        doc: "https://symfony.com/doc/current/index.html"

      },
      {
        title: 'Java',
        src: 'https://d2rkbgac7j76wa.cloudfront.net/whichversionofjava.jpeg',
        flex: 4,
        doc: "https://docs.oracle.com/en/java/"

      },
      {
        title: 'Spring Boot',
        src: 'https://miro.medium.com/v2/resize:fit:900/1*5eWvY-vQMgQWuLnbeGAp7g.jpeg',
        flex: 4,
        doc: "https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/"

      },
      {
        title: 'CSS',
        src: 'https://fullstack-dev.netlify.app/desc-images/css3.jpeg',
        flex: 4,
        doc: "https://developer.mozilla.org/es/docs/Web/CSS"

      },
      {
        title: 'HTML5',
        src: 'https://i.pinimg.com/736x/d9/30/0c/d9300c98f4fac3710b304e9bd82fa5de.jpg',
        flex: 4,
        doc: "https://developer.mozilla.org/es/docs/Glossary/HTML5"

      },
      {
        title: 'Jira',
        src: 'https://images.ctfassets.net/8j5aqoy0ts8s/7kGDQeqA19pWs9sra18nb5/9a431dc04251e57027d94b2d510cb762/jira_white_on_blue_logo.png',
        flex: 4,
        doc: "https://confluence.atlassian.com/jira"

      },
      {
        title: 'Git',
        src: 'https://images4.alphacoders.com/985/985805.png',
        flex: 4,
        doc: "https://git-scm.com/doc"

      },
      {
        title: 'MySQL',
        src: 'https://datascientest.com/es/wp-content/uploads/sites/7/2022/12/mySQL_blog_4-106.webp',
        flex: 4,
        doc: "https://dev.mysql.com/doc/"

      },
      {
        title: 'Arquitectura Hexagonal',
        src: 'https://refactorizando.com/wp-content/uploads/2020/11/Arquitectura-Hexagonal.jpg',
        flex: 4,
        doc: "https://thekitchen.gitlab.io/es/post/frontend-hexagonal-architecture/"

      },
      {
        title: 'Modelo-Vista-Controlador',
        src: 'https://www.crio.do/blog/content/images/2021/07/MVC-Architecture.png',
        flex: 4,
        doc: "https://developer.mozilla.org/es/docs/Glossary/MVC"

      },
    ],
  }),
}
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Kdam+Thmor+Pro&display=swap');

.title{
  font-family: 'Kdam Thmor Pro', sans-serif!important;
}
</style>