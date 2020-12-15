<template>
  <v-card ref="card" class="card d-flex align-center">
    <v-img
      @mouseover="onHover"
      @mouseleave="unHover"
      :src="image"
      class="white--text align-end"
      height="700px"
      width="200px"
      :gradient="gradient"
      contain
    >
      <v-card-title>{{ name }}</v-card-title>

      <v-card-text v-if="showDesc" class="headline"> {{ desc }} </v-card-text>
    </v-img>
  </v-card>
</template>

<script>
import { gsap } from "gsap";

const gradientTopOffHover = 0.1;
const gradientBottomOffHover = 0.3;
const gradientTopOnHover = 0.2;
const gradientBottomOnHover = 0.7;

export default {
  name: "SkillInfoCard",
  props: {
    name: {
      type: String,
    },
    imageFileName: {
      type: String,
    },
    desc: {
      type: String,
    },
  },
  data() {
    return {
      image: require(`../assets/programming_languages/${this.imageFileName}.png`),
      gradientTop: gradientTopOffHover,
      gradientBottom: gradientBottomOffHover,
      showDesc: false,
    };
  },
  mounted() {},
  methods: {
    onHover() {
      this.showDesc = true;
      gsap.to(this.$data, {
        gradientBottom: gradientBottomOnHover,
        gradientTop: gradientTopOnHover,
        duration: 0.5,
      });
    },
    unHover() {
      this.showDesc = false;
      gsap.to(this.$data, {
        gradientBottom: gradientBottomOffHover,
        gradientTop: gradientTopOffHover,
        duration: 0.5,
      });
    },
  },
  computed: {
    gradient() {
      return `to bottom, rgba(0,0,0,${this.gradientTop}), rgba(0,0,0,${this.gradientBottom})`;
    },
  },
};
</script>

<style scoped>
</style>>