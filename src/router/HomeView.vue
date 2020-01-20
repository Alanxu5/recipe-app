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
    },
    viewRecipe(id) {
      this.$router.push({ name: 'recipe', query: { id: id } });
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
        :recipe="recipe" 
        @recipeClicked="viewRecipe" />
    </div>
  </div>
</template>

<style lang="scss" module>
  .container {
    margin: 2rem 0 2rem 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(315px, 1fr));
    align-items: center;
  }
</style>
