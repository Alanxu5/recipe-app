<script>
import RecipeCard from '@/components/RecipeCard'
// import { getInstance } from '@/auth';

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
    // const instance = getInstance();

    // instance.$watch("loading", async loading => {
    //   if (!loading && instance.isAuthenticated) {
    //     const token = await instance.getTokenSilently();
    //     console.log(token);
    //     this.$store.dispatch('getRecipes', token);
    //   }
    // });
   
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