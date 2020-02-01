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
  data() {
    return {
      selectedFilters: []
    }
  },
  watch: {
    selectedFilters(val) {
      this.$emit('selectedFilters', val);
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
        v-for="(filter, index) in filters" 
        :key="index">
        <input 
          :id="filter.id"
          v-model="selectedFilters"
          :value="filter"
          type="checkbox">
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