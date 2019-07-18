<script>
import Card from '@/components/Card';

export default {
  name: 'Home',
  components: {
    Card
  },
  data() {
    return {
      profile: this.$auth.profile
    };
  },
  computed: {
    recipes() {
      return this.$store.getters.getAllRecipes;
    }
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
  <div :class="$style.home">
    <div :class="$style.container">
      <Card
        v-for="(recipe, index) in recipes"
        :key="index"
        :recipe="recipe" />
    </div>
    <RouterView />
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- scoped bled into child when styles had the same naem -->
<style module>
  .home {
    margin: .5rem;
  }

  .container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
</style>
