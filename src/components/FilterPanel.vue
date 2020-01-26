<script>
import FilterSelect from '@/components/FilterSelect';

export default {
  name: 'FilterPanel',
  components: {
    FilterSelect
  },
  computed: {
    recipeTypes() {
      return this.$store.getters.getRecipeTypes;
    },
    recipeMethods() {
      return this.$store.getters.getRecipeMethods;
    }
  }, 
}
</script>

<template>
  <div>
    <FilterSelect 
      :filter-name="'Type'"
      :filters="recipeTypes" />
    <FilterSelect 
      :filter-name="'Method'"
      :filters="recipeMethods" />
  </div> 
</template>

<style lang="scss" module>
  .filterHeader {
    font-size: 1.15rem;
  }
</style>