<script>
import RecipeCard from '@/components/RecipeCard';

export default {
  name: 'RecipeList',
  components: {
    RecipeCard
  },
  computed: {
    recipes() {
      if (this.filters["method"].length === 0 && this.filters["type"].length === 0) {
        return this.$store.getters.getAllRecipes;
      } else {
        return this.$store.getters.getAllRecipes.filter(recipe => {
          return this.filters["method"].length > 0 ? this.filters["method"].some(x => x.id.toString() === recipe.method) : true &&
            this.filters["type"].length > 0 ? this.filters["type"].some(y => y.id.toString() === recipe.type) : true;
        });
      }
    },
    filters() {
      return this.$store.getters.getFilters;
    }
  },  
  created() {
    this.$store.dispatch('getAllRecipes')
  },
  methods: {
    viewRecipe(id) {
      this.$router.push({ name: 'recipe', query: { id: id } });
    }
  }
}
</script>

<template>
  <div :class="$style.container">
    <RecipeCard
      v-for="(recipe, index) in recipes"
      :key="index"
      :recipe="recipe" 
      @recipeClicked="viewRecipe" />
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
    align-items: center;
    justify-items: center;
  }
</style>