<template>
  <h1 class="ml9">
    <span class="text-wrapper">
      <span v-for="(letter, index) in name" :key="index" class="letter">{{
        letter
      }}</span>
    </span>
  </h1>
</template>

<script>
import anime from "animejs/lib/anime.es.js";
export default {
  name: "MyName",
  data() {
    return {
      name: "Tal Dokhanian",
    };
  },
  mounted() {
    anime.timeline({ loop: false }).add({
      targets: ".ml9 .letter",
      scale: [0, 1],
      duration: 1500,
      elasticity: 600,
      delay: (el, i) => 45 * (i + 1),
    });
  },
};
</script>

<style>
.ml9 {
  position: relative;
  font-weight: 200;
  font-size: 10em;
  height: 150px;
}

.ml9 .text-wrapper {
  position: relative;
  display: inline-block;
  padding-right: 0.05em;
  overflow: hidden;
}

.ml9 .letter {
  transform-origin: 50% 100%;
  display: inline-block;
  line-height: 1em;
  white-space: pre-wrap;
}
</style>