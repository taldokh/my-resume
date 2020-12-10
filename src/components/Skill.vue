<template>
  <v-avatar
    @mouseover="mouseOver"
    @mouseleave="mouseLeave"
    color="#fcbc34"
    :size="circleSize"
    ><span class="white--text headline">{{ text }}</span>
  </v-avatar>
</template>

<script>
import { gsap } from "gsap";

const defaultSize = 120;
const highlightSize = 150;
export default {
  name: "Skill",
  props: {
    text: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      circleSize: defaultSize,
    };
  },
  methods: {
    mouseOver() {
      gsap.to(this.$data, { duration: 0.5, circleSize: highlightSize });
      this.$emit("onHover");
    },
    mouseLeave() {
      gsap.to(this.$data, { duration: 0.5, circleSize: defaultSize });
      this.$emit("onHoverLeave");
    },
  },
};
</script>

<style scoped>
</style>