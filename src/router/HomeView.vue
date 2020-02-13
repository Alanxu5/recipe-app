<script>
import FilterPanel from '@/components/FilterPanel';
import RecipeList from '@/components/RecipeList';

export default {
  name: 'HomeView',
  components: {
    FilterPanel,
    RecipeList
  },
  data() {
    return {
      profile: this.$auth.profile
    };
  },
  mounted() {
    this.$store.dispatch('getRecipeTypes');
    this.$store.dispatch('getMethodTypes');
  },
  methods: {
    handleLoginEvent(data) {
      this.profile = data.profile;
    },
  }  
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
    margin-top: 3rem;
  }
</style>
