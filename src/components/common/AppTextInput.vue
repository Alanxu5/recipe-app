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
  <div :class="$style.inputContainer">
    <label>
      {{ labelName }}
    </label>
    <input
      v-model="inputVal">
  </div>
</template>

<style lang="scss" module>
  .inputContainer {
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
