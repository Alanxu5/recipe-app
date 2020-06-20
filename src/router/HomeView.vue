<script>
import FilterPanel from '@/components/FilterPanel'
import RecipeList from '@/components/RecipeList'

export default {
  name: 'HomeView',
  components: {
    FilterPanel,
    RecipeList
  },
  created() {
    this.$store.dispatch('getRecipeTypes');
    this.$store.dispatch('getMethodTypes');
  },
}
</script>

<template>
  <div :class="$style.home">
    <FilterPanel />
    <RecipeList />  
  </div>
</template>

<style lang="scss" module>
  .home {
    display: grid;
    grid-template-columns: 225px auto;
  }
</style>
