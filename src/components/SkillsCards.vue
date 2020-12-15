<template>
  <v-container fluid>
    <v-row>
      <v-col v-for="skill in skills" :key="skill.name">
        <skill-info-card
          :name="skill.name"
          :imageFileName="skill.imgFileName"
          :desc="skill.desc"
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
  props: {
    skills: {
      type: Array,
    },
  },
};
</script>

<style scoped>
</style>