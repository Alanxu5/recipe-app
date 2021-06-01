<script>
import RecipePlateCard from '@/components/RecipePlateCard'

export default {
  name: 'PlateView',
  components: {
    RecipePlateCard
  },
  computed: {
    platedRecipes() {
      return this.$store.getters.getPlatedRecipes;
    }
  },
  created() {
    this.$store.dispatch('getPlatedRecipes');
  }
}
</script>

<template>
  <div :class="$style.container">
    <RecipePlateCard 
      v-for="(platedRecipe, index) in platedRecipes"
      :key="index"
      :plated-recipe="platedRecipe" />
  </div>
</template>

<style lang="scss" module>
  .container {
    display: grid;
    grid-template-columns: 70%;
    width: 100%;
  }
  
  @media only screen and (min-width: 1024px) {
    .container {
      max-width: 1100px;
    }
  }
</style>