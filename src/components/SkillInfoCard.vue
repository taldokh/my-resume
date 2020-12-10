<template>
  <v-card class="d-flex align-center">
    <v-img
      :src="image"
      class="white--text align-end"
      height="700px"
      width="200px"
      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
      contain
    >
      <v-card-title>{{ name }}</v-card-title>
    </v-img>
  </v-card>
</template>

<script>
export default {
  name: "SkillInfoCard",
  props: {
    name: {
      type: String,
    },
    imageFileName: {
      type: String,
    },
  },
  data() {
    return {
      image: require(`../assets/programming_languages/${this.imageFileName}.png`),
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
</style>>