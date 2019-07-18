<script>
export default {
  name: 'AppTextInput',
  props: {
    labelName: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      inputVal: this.value
    }
  },
  watch: {
    inputVal(val) {
      this.$emit('input', val);
    }
  }  
}
</script>

<template>
  <div class="input-container">
    <label>
      {{ labelName }}
    </label>
    <input
      v-model="inputVal">
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .input-container {
    display: grid;
    grid-row-gap: 5px;
    grid-template-rows: 20px 30px;
  }

  label {
    width: 100%;
  }

  input {
    width: 100%;
    padding: 0;
  }
</style>
