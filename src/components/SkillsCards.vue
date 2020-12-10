<template>
  <v-container fluid>
    <v-row>
      <v-col v-for="skill in skills" :key="skill.name">
        <skill-info-card
          :name="skill.name"
          :imageFileName="skill.imgFileName"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SkillInfoCard from "../components/SkillInfoCard.vue";
export default {
  name: "SkillsCards",
  components: {
    SkillInfoCard,
  },
  data() {
    return {
      skills: [
        { name: "Vue", imgFileName: "vue" },
        { name: "HTML", imgFileName: "html" },
        { name: "JavaScript", imgFileName: "javaScript" },
        { name: "Java", imgFileName: "java" },
        { name: "Python", imgFileName: "python" },
        { name: "C#", imgFileName: "cSharp" },
        { name: "CSS", imgFileName: "css" },
        { name: "Flutter", imgFileName: "flutter" },
        { name: "MongoDB", imgFileName: "mongoDB" },
        { name: "Spring", imgFileName: "spring" },
      ],
    };
  },
};
</script>

<style scoped>
</style>