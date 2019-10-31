<script>
import AppTextInput from '@/components/common/AppTextInput'

export default {
  name: 'SubmitModal',
  components: {
    AppTextInput
  },
  data() {
    return {
      recipeModel: {
        name: "",
        description: "",
        ingredients: "",
        directions: {'data': '3'},
        prepTime: 0,
        cookTime: 0,
        feeds: 0,
        method: 1,
        type: 1
      }
    }
  },  
  mounted() {
    this.$store.dispatch('getRecipeTypes');
    // this.$store.dispatch('getMethodTypes');
  },
  methods: {
    submitRecipe() {
      this.closeModal();
      this.$store.dispatch('addRecipe', this.recipeModel)
    },
    closeModal() {
      this.$emit('closeModal');
    }
  },
}
</script>

<template>
  <div>
    <div class="submit-modal">
      <div class="modal-header">
        <i 
          class="material-icons"
          @click="closeModal">
          close
        </i>
      </div>
      <div class="container">
        <div class="top-container">
          <div class="image-upload" />          
          <div class="short-input">
            <AppTextInput 
              v-model="recipeModel.name"
              label-name="Name" />
            <div class="prep-container">
              <div>
                <label>
                  Type 
                </label>
                <select class="prep-input">
                  <option value="protein">
                    Protein
                  </option>
                  <option value="vegetable">
                    Vegetable
                  </option>
                  <option value="carbohydrate">
                    Carbohydrates
                  </option>
                </select>
              </div>
              <div>
                <label>
                  Method 
                </label>
                <select class="prep-input">
                  <option value="bake">
                    Bake
                  </option>
                  <option value="pan">
                    Pan
                  </option>
                  <option value="pressureCooker">
                    Pressure Cooker
                  </option>                
                  <option value="slowCooker">
                    Slow Cooker
                  </option>
                </select>
              </div>
            </div>                  
            <div class="time-input">
              <AppTextInput 
                v-model.number="recipeModel.prepTime"
                label-name="Prep Time" />
              <AppTextInput 
                v-model.number="recipeModel.cookTime"
                label-name="Cook Time" />
              <AppTextInput 
                v-model.number="recipeModel.feeds"
                label-name="Servings" />                
            </div>                  
          </div>
        </div>
        <div class="bottom-container">
          <div class="textarea-container">
            <label>Description</label>
            <textarea
              v-model="recipeModel.description" />
          </div>
          <div class="textarea-container">
            <label>Ingredients</label>
            <textarea
              v-model="recipeModel.ingredients" />
          </div>
          <div class="textarea-container">
            <label>Directions</label>
            <textarea
              v-model="recipeModel.directions" />
          </div>         
          <div class="submit-container">
            <button
              type="button"
              @click="submitRecipe">
              Submit
            </button>    
          </div>                                     
        </div>
      </div>
    </div>
    <div class="modal-background" />
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.submit-modal {
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

.modal-header {
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

.top-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.image-upload {
  height: 100%;
  width: 90%;
  background-color: lightgray;
  border: 1px solid #D5D1D1;
}

.textarea-container {
  display: grid;
  grid-row-gap: 5px;
  grid-template-rows: 20px 1fr;
}

.short-input {
  display: grid;
  grid-template-rows: auto auto auto;
  grid-row-gap: auto;
}

.time-input {
  display: grid;
  grid-template-columns: 100px 100px 100px;
  column-gap: 1rem;
}

.prep-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: .5rem;
}

select {
  width: 100%;
}

.prep-input {
  height: 30px;
}

.bottom-container {
  display: grid;
  grid-row-gap: 10px;
}

label {
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

.submit-container {
  align-self: center;
  justify-self: end;
}

.modal-background {
  background: rgba(0, 0, 0, .30);
  height: 100%;
  width: 100%;
  z-index: 10;
  position: fixed;
  left: 0;
  top: 0;
}
</style>
