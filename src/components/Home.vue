<script>
export default {
  name: 'Home',
  data() {
    return {
      profile: this.$auth.profile
    };
  },
  created() {
    this.$store.dispatch('GET_ALL_RECIPES')
  },
  methods: {
    handleLoginEvent(data) {
      this.profile = data.profile;
    }
  }  
}
</script>

<template>
  <div>
    HOME
    <h2>{{ profile.name }}</h2>
    <p>{{ profile.email }}</p>
    <RouterView />
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
