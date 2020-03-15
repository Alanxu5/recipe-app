<script>
export default {
  name: 'FilterSelect',
  props: {
    filterName: {
      type: String,
      required: true
    },
    filters: {
      type: Array,
      default: () => {} 
    },
  },
  computed: {
    checkedFilters() {
      const queryFilters = this.$route.query[this.filterName.toLowerCase()];
      const filters = queryFilters !== null && queryFilters !== undefined ? queryFilters.split(',') : this.filters;
      this.filters.map(filter => {
        filter.checked = filters.includes(filter.name);
      })
      return this.filters;
    }
  },
  methods: {
    filterClicked(filter) {
      this.$store.dispatch('addFilter', { filterType: this.filterName.toLowerCase(), filter: filter });
    }
  }
}
</script>

<template>
  <div :class="$style.filterSection">
    <div :class="$style.filterHeader">
      {{ filterName }} 
    </div> 
    <div :class="$style.filterGroup">
      <label 
        v-for="(filter, index) in checkedFilters" 
        :key="index">
        <input 
          type="checkbox"
          :checked="filter.checked"
          @change="filterClicked(filter.name)">
        <span>
          {{ filter.name }}
        </span>
      </label>
    </div>
  </div>
</template>

<style lang="scss" module>
  .filterSection {
    margin-bottom: 2rem;
  }

  .filterGroup label {
    display: block;
    padding-right: 10px;
    white-space: nowrap;
  }

  .filterGroup input {
    vertical-align: middle;
  }

  .filterGroup label span {
    vertical-align: middle;
  }

</style>