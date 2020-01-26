<script>
import AppTextInput from '@/components/common/AppTextInput'

export default {
  name: 'SubmitModal',
  components: {
    AppTextInput
  },
  data() {
    return {
      // recipeModel: {
      //   name: '',
      //   description: '',
      //   ingredients: '',
      //   equipment: '',
      //   directions: '',
      //   prepTime: 0,
      //   cookTime: 0,
      //   servings: 0,
      //   method: 'Pan',
      //   type: 'Protein'
      // }
      recipeModel: {
        name: 'Test Recipe Name',
        description: 'Test Description',
        equipment: '',
        ingredients: '',
        directions: 'Dir 1',
        prepTime: 10,
        cookTime: 20,
        servings: 30,
        method: 'Pan',
        type: 'Protein'
      }
    }
  },
  computed: {
    recipeTypes() {
      return this.$store.getters.getRecipeTypes;
    },
    recipeMethods() {
      return this.$store.getters.getRecipeMethods;
    }
  },  
  methods: {
    submitRecipe() {
      this.closeModal();
      this.$store.dispatch('addRecipe', this.recipeModel)
    },
    closeModal() {
      this.$emit('closeModal');
    }
  }
}
</script>

<template>
  <div>
    <div :class="$style.submitModal">
      <div :class="$style.modalHeader">
        <i 
          class="material-icons"
          @click="closeModal">
          close
        </i>
      </div>
      <div :class="$style.container">
        <div :class="$style.topContainer">
          <div :class="$style.imageUpload" />          
          <div :class="$style.shortInput">
            <AppTextInput 
              v-model="recipeModel.name"
              label-name="Name" />
            <div :class="$style.prepContainer">
              <div>
                <label :class="$style.submitLabel">
                  Type 
                </label>
                <select
                  v-model="recipeModel.type" 
                  :class="$style.prepInput">
                  <option 
                    v-for="type in recipeTypes"
                    :key="type.id"
                    :value="type.name">
                    {{ type.name }}
                  </option>
                </select>
              </div>
              <div>
                <label :class="$style.submitLabel">
                  Method 
                </label>
                <select
                  v-model="recipeModel.method" 
                  :class="$style.prepInput">
                  <option 
                    v-for="method in recipeMethods"
                    :key="method.id"
                    :value="method.name">
                    {{ method.name }}
                  </option>
                </select>
              </div>
            </div>                  
            <div :class="$style.timeInput">
              <AppTextInput 
                v-model.number="recipeModel.prepTime"
                label-name="Prep Time" />
              <AppTextInput 
                v-model.number="recipeModel.cookTime"
                label-name="Cook Time" />
              <AppTextInput 
                v-model.number="recipeModel.servings"
                label-name="Servings" />                
            </div>                  
          </div>
        </div>
        <div :class="$style.bottomContainer">
          <div :class="$style.textareaContainer">
            <label :class="$style.submitLabel">
              Description
            </label>
            <textarea
              v-model="recipeModel.description" />
          </div>
          <div :class="$style.textareaContainer">
            <label :class="$style.submitLabel">
              Equipment - Description|Item
            </label>
            <textarea
              v-model="recipeModel.equipment" />
          </div>
          <div :class="$style.textareaContainer">
            <label :class="$style.submitLabel">
              Ingredients - Amount|Unit|Ingredient|Preparation
            </label>
            <textarea
              v-model="recipeModel.ingredients" />
          </div>
          <div :class="$style.textareaContainer">
            <label :class="$style.submitLabel">
              Directions
            </label>
            <textarea
              v-model="recipeModel.directions" />
          </div>         
          <div :class="$style.submitContainer">
            <button
              type="button"
              @click="submitRecipe">
              Submit
            </button>    
          </div>                                     
        </div>
      </div>
    </div>
    <div :class="$style.modalBackground" />
  </div>
</template>

<style lang="scss" module>
.submitModal {
  background: white;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) !important;
  z-index: 15;
  width: 600px;
  height: 600px;
  border: 1px solid lightgrey;
  padding: 24px 24px 24px 24px;
}

.modalHeader {
  position: absolute;
  top: .5rem;
  right: .5rem; 
}

.material-icons {
  font-size: 18px;
}

.material-icons:hover {
  cursor: pointer;
}

.container {
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: 38% 62%;
  grid-row-gap: 1rem;
}

.topContainer {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.imageUpload {
  height: 100%;
  width: 90%;
  background-color: lightgray;
  border: 1px solid #D5D1D1;
}

.textareaContainer {
  display: grid;
  grid-row-gap: 5px;
  grid-template-rows: 20px 1fr;
}

.shortInput {
  display: grid;
  grid-template-rows: auto auto auto;
  grid-row-gap: auto;
}

.timeInput {
  display: grid;
  grid-template-columns: 100px 100px 100px;
  column-gap: 1rem;
}

.prepContainer {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: .5rem;
}

select {
  width: 100%;
}

.prepInput {
  height: 30px;
}

.bottomContainer {
  display: grid;
  grid-row-gap: 10px;
}

.submitLabel {
  float: left;
}

text-input {
  float: left;
}

button {
  width: 100px;
}

textarea {
  resize: none;
}

.submitContainer {
  align-self: center;
  justify-self: end;
}

.modalBackground {
  background: rgba(0, 0, 0, .30);
  height: 100%;
  width: 100%;
  z-index: 10;
  position: fixed;
  left: 0;
  top: 0;
}
</style>
