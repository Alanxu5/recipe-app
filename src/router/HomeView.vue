<script>
import RecipeCard from '@/components/RecipeCard';

export default {
  name: 'HomeView',
  components: {
    RecipeCard
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
    this.$store.dispatch('getAllRecipes')
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
      <RecipeCard
        v-for="(recipe, index) in recipes"
        :key="index"
        :recipe="recipe" />
    </div>
    <RouterView />
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- scoped bled into child when styles had the same name -->
<style module>
  .home {
    margin: .5rem;
  }

  .container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
</style>
