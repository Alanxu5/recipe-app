<script>
import AppTextInput from '@/components/common/AppTextInput'

export default {
  name: 'SubmitView',
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
      this.$store.dispatch('addRecipe', this.recipeModel)
    }
  }
}
</script>

<template>
  <div :class="$style.container">
    <div :class="$style.imageUpload" />          
    <div :class="$style.shortInput">
      <AppTextInput 
        v-model="recipeModel.name"
        label-name="Recipe Title" />
      <div :class="$style.prepContainer">
        <div>
          <label :class="$style.submitLabel">
            Type 
            <select
              v-model="recipeModel.type" 
              :class="$style.prepInput">
              <option 
                v-for="recipeType in recipeTypes"
                :key="recipeType.id"
                :value="recipeType.name">
                {{ recipeType.name }}
              </option>
            </select>
          </label>
        </div>
        <div>
          <label :class="$style.submitLabel">
            Method 
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
          </label>
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
          Equipment - Description|Item (large|baking sheet)
        </label>
        <textarea
          v-model="recipeModel.equipment" />
      </div>
      <div :class="$style.textareaContainer">
        <label :class="$style.submitLabel">
          Ingredients - Amount|Unit|Ingredient|Preparation (5|lbs|chicken thigh|)
        </label>
        <textarea
          v-model="recipeModel.ingredients" />
      </div>
      <div :class="$style.textareaContainer">
        <label :class="$style.submitLabel">
          Directions (new line for each direction w/o numbers)
        </label>
        <textarea
          v-model="recipeModel.directions" />
      </div>         
      <div :class="$style.submitContainer">
        <button
          type="button"
          :class="$style.submitButton"
          @click="submitRecipe">
          Submit
        </button>    
      </div>                                     
    </div>
  </div>
</template>

<style lang="scss" module>
.container {
  height: 100%;
  display: grid;
  grid-row-gap: 1rem;
}

.imageUpload {
  height: 200px;
  width: 100%;
  background-color: lightgray;
  border: 1px solid #D5D1D1;
}

.shortInput {
  display: grid;
  grid-row-gap: 10px;
}

.textareaContainer {
  display: grid;
  grid-row-gap: 5px;
  grid-template-rows: 20px 1fr;
}

.timeInput {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
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

.submitContainer {
  align-self: center;
  justify-self: end;
}

button {
  width: 100px;
}

.submitButton:hover {
  cursor: pointer;
}
</style>
