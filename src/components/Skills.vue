<template>
  <div class="">
    <skill
      v-for="skill in mySkills"
      :key="skill"
      ref="mySkills"
      :text="skill"
      @onHover="stopRotation"
      @onHoverLeave="resumeRotation"
    />
    <div>
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="700px"
        height="700px"
        viewBox="0 0 12000 12000"
        preserveAspectRatio="xMidYMid meet"
      >
        <g id="layer101" fill="#000000" stroke="none">
          <path
            id="path"
            fill-opacity="0.0"
            d="M5625 11119 c-1125 -80 -2225 -548 -3055 -1301 -998 -905 -1587 -2107 -1690 -3447 -13 -173 -13 -569 0 -742 84 -1089 483 -2077 1180 -2919 131 -159 489 -517 645 -646 858 -709 1841 -1104 2943 -1185 207 -15 694 -6 892 16 1029 114 1952 505 2750 1165 161 133 517 489 650 650 615 743 1007 1621 1139 2550 41 285 46 370 46 735 0 365 -5 450 -46 735 -54 379 -161 782 -306 1155 -122 313 -369 771 -567 1053 -901 1280 -2307 2074 -3864 2181 -176 13 -540 12 -717 0z"
          />
        </g>
      </svg>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import Skill from "./Skill";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

const tl = gsap.timeline();

export default {
  name: "Skills",
  components: {
    Skill,
  },
  data() {
    return {
      mySkills: [
        "Java",
        "JavaScript",
        "HTML",
        "CSS",
        "Python",
        "SQL",
        "C",
        "C#",
        "Flutter",
      ],
    };
  },
  mounted() {
    gsap.registerPlugin(MotionPathPlugin);
    this.$refs["mySkills"].forEach((element) => {
      tl.to(
        element.$el,
        {
          duration: 18,
          repeat: -1,
          ease: "Linear.easeInOut",
          motionPath: { path: "#path", align: "#path" },
        },
        "-=16"
      );
    });
  },
  methods: {
    stopRotation() {
      tl.pause();
    },
    resumeRotation() {
      tl.play();
    },
  },
};
</script>

<style scroped>
</style>