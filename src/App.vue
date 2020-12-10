<template>
  <v-app id="app">
    <v-container fluid>
      <v-row>
        <v-col>
          <my-name ref="myName" />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <skills-cards />
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import SkillsCards from "./components/SkillsCards.vue";
import { gsap } from "gsap";
import MyName from "./components/MyName.vue";

export default {
  name: "App",
  components: {
    MyName,
    SkillsCards,
  },

  mounted() {
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
