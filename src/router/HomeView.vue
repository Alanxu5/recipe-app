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
    <div />
    <FilterPanel />
    <RecipeList />  
    <div />
  </div>
</template>

<style lang="scss" module>
  .home {
    display: grid;
    grid-template-columns: 1fr 225px auto 1fr;
    margin: 3rem auto 3rem auto;
  }
</style>
