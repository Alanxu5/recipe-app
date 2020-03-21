<script>
import RecipeCard from '@/components/RecipeCard';

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
  created() {
    this.$store.dispatch('getRecipes');
  },
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
    // 250 * 3 = 750 ... 800 - 750 = 50px
    .container {
      max-width: 800px;
    }
  }

  @media only screen and (min-width: 1300px) {
    // 250 * 4 = 1000 ... 1000 - 925 = 75px
    .container {
      max-width: 1075px;
    }
  }
  
  @media only screen and (min-width: 1600px) {
    // 250 * 5 = 1250 ... 1350 - 1250 = 100px
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