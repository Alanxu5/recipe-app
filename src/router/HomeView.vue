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
  @media screen 
    and (min-device-width: 1200px) 
    and (max-device-width: 1600px) 
    and (-webkit-min-device-pixel-ratio: 2)
    and (min-resolution: 192dpi) { 
      .container {
        max-width: 1100px;
      }
  }

  .container {
    margin: 3rem auto 3rem auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    align-items: center;
    justify-items: center;
  }
</style>
