<template>
  <v-col style="margin-top: 6%" cols="5" class="ml-10">
    <div class="d-flex flex-row title text-h5">
      <p style="color: red">3.</p>
      <p>&nbspTechnologies</p>
    </div>

  </v-col>

  <v-card class="mx-auto" flat style="background-color:#D7CDBB " max-width="70%">
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
</template>

<script>
export default {
  data: () => ({
    cards: [
      {
        title: 'Angular',
        src: 'https://miro.medium.com/v2/resize:fit:1400/1*uGRvXkzzytZ-8YxKaxYEBA.png',
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
        src: 'https://blog.fellyph.com.br/wp-content/uploads/2014/02/js-symbol.png',
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
        src: 'https://s3-eu-west-1.amazonaws.com/bucketeer-688d8e11-8fc6-459f-bb52-26fd21452913/2020/03/AcA2LnWL_400x400.jpg',
        flex: 4,
        doc: "https://laravel.com/docs/10.x/readme"

      },
      {
        title: 'Symfony',
        src: 'https://symfony.com/images/opengraph/symfony.png',
        flex: 4,
        doc: "https://symfony.com/doc/current/index.html"

      },
      {
        title: 'Java',
        src: 'https://lms.barcelonactiva.cat/img/Logo_Java.jpg',
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
        src: 'https://constructs.stampede-design.com/wp-content/uploads/2014/10/css3.jpg',
        flex: 4,
        doc: "https://developer.mozilla.org/es/docs/Web/CSS"

      },
      {
        title: 'HTML5',
        src: 'https://www.anerbarrena.com/wp-content/uploads/2016/04/html5.png',
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
        src: 'https://www.datocms-assets.com/48294/1683007009-mvc-architecture-4-mvc-architecture-diagram.png?auto=format',
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