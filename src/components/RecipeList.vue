<script>
import RecipeCard from '@/components/RecipeCard'

export default {
  name: 'RecipeList',
  components: {
    RecipeCard
  },
  computed: {
    recipes() {
      return this.$store.getters.getRecipes;
    },
  },  
  async created() {
    await this.$store.dispatch('retrieveTokenFromAuth');
    this.$store.dispatch('getRecipes');
  }
}
</script>

<template>
  <div :class="$style.container">
    <RecipeCard
      v-for="(recipe, index) in recipes"
      :key="index"
      :recipe="recipe" /> 
  </div>
</template>


<style lang="scss" module>
  @media only screen and (min-width: 992px) {
    .container {
      max-width: 800px;
    }
  }

  @media only screen and (min-width: 1300px) {
    .container {
      max-width: 1075px;
    }
  }
  
  @media only screen and (min-width: 1600px) {
    .container {
      max-width: 1350px;
    }
  }
  
  .container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 10px;
  }
</style>