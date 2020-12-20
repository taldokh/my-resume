<template>
  <v-app id="app">
    <div class="d-flex flex-column name-container">
      <div class="align-self-end ma-7">
        <v-img
          @click="openGithub"
          max-width="100px"
          max-height="100px"
          :src="githubImgPath"
        >
        </v-img>
      </div>

      <my-name class="my-name align-self-start" ref="myName" />
    </div>
    <skills-cards :skills="mainSkills" />
    <skills-cards :skills="otherSkills" />
  </v-app>
</template>

<script>
import SkillsCards from "./components/SkillsCards.vue";
import { gsap } from "gsap";
import MyName from "./components/MyName.vue";
import { ScrollTrigger } from "gsap/all";

export default {
  name: "App",
  components: {
    MyName,
    SkillsCards,
  },
  data() {
    return {
      githubImgPath: require("./assets/github.png"),
      mainSkills: [
        {
          name: "Vue JS",
          imgFileName: "vue",
          desc: "Vue.js is the first SPA framework I have learned and masterd",
        },
        {
          name: "Flutter",
          imgFileName: "flutter",
          desc:
            "I have independently learned to make applications with flutter",
        },
      ],
      otherSkills: [
        {
          name: "HTML",
          imgFileName: "html",
          desc: "I have learned HTML in highSchool",
        },
        {
          name: "JavaScript",
          imgFileName: "javaScript",
          desc: "I have learned JS in highSchool",
        },
        {
          name: "Java",
          imgFileName: "java",
          desc: "I have learned Java in highSchool",
        },
        {
          name: "Python",
          imgFileName: "python",
          desc: "I have learned Python in highSchool",
        },
        {
          name: "C#",
          imgFileName: "cSharp",
          desc: "I have learned c sharp in highSchool",
        },
        {
          name: "CSS",
          imgFileName: "css",
          desc: "I have learned CSS in highSchool",
        },
        {
          name: "MongoDB",
          imgFileName: "mongoDB",
          desc: "I have learned MongoDB in highSchool",
        },
        {
          name: "Spring",
          imgFileName: "spring",
          desc: "I have learned Spring in highSchool",
        },
      ],
    };
  },
  methods: {
    openGithub() {
      window.open("https://github.com/taldokh?tab=repositories");
    },
  },

  mounted() {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".card", {
      scrollTrigger: {
        trigger: ".card",
        start: "center center",
      },
      rotationY: 180,
    });

    gsap.from(this.$refs["myName"].$el, {
      duration: 0.5,
      y: -200,
    });
  },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
  /* background-color: #141b2e; */
}

.name-container {
  background-image: url("./assets/illustrations/freelancer.svg");
  height: 100vh;
  width: 100vw;
}
</style>
