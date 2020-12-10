<template>
  <v-app id="app">
    <my-name ref="myName" />
    <skill-card />
  </v-app>
</template>

<script>
import { gsap } from "gsap";
import MyName from "./components/MyName.vue";
import SkillCard from "./components/skillCard.vue";
export default {
  name: "App",
  components: {
    MyName,
    SkillCard,
  },

  mounted() {
    console.log(this.$refs);
    gsap.to(this.$refs["myName"].$el, {
      duration: 0.5,
      x: -500,
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
  color: #141b2e;
  /* background-color: #141b2e; */
}
</style>
