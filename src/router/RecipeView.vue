<script>
export default {
  name: 'RecipeView',
  computed: {
    recipe() {
      return this.$store.state.current_recipe;
    },
    dirArr() {
      return Object.values(this.$store.state.current_recipe).length === 0 ? [] : Object.values(this.$store.state.current_recipe.directions) 
    }
  },  
  created() {
    this.$store.dispatch('getRecipe', this.$route.query.id);
  },
}
</script>

<template>
  <div class="recipe-container">
    <div>
      <div class="container">
        <div class="summary">
          <div class="image-container">
            <img 
              class="image"
              src="@/assets/images/IMG_2298.jpg">
          </div>
          <div class="info">
            <div class="title">
              {{ recipe.name }}
            </div>
            <div class="subtext">
              Prep: {{ recipe.prepTime }}
            </div>
            <div class="subtext"> 
              Cook: {{ recipe.cookTime }}
            </div>
            <div class="subtext">
              Servings: {{ recipe.servings }}
            </div>
            <div class="subtext">
              Method: {{ recipe.method }}
            </div>
            <div class="subtext">
              Type: {{ recipe.type }}
            </div>
            <div class="description">
              Description: {{ recipe.description }}
            </div>
          </div>        
        </div>
        <div class="instructions">
          <div class="ingredients">
            <div class="section-header">
              Ingredients
            </div>
            <div 
              v-for="(ingredient, index) in recipe.ingredients"
              :key="index">
              <div v-if="ingredient.preparation">
                {{ index + 1 }}. {{ ingredient.amount }} {{ ingredient.unit }} {{ ingredient.ingredient }}, {{ ingredient.preparation }}
              </div>
              <div v-else>
                {{ index + 1 }}. {{ ingredient.amount }} {{ ingredient.unit }} {{ ingredient.ingredient }} 
              </div>
            </div>
          </div>
          <div class="directions">
            <div class="section-header">
              Directions
            </div>
            <div
              v-for="(direction, index) in dirArr"
              :key="index">
              {{ index + 1 }}. {{ direction }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="other-recipes">
      OTHER RECIPES
    </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .recipe-container {
    margin: 1.5rem 4rem 3rem 7rem;
    display: grid;
    grid-template-columns: 75% 1fr;
    grid-column-gap: 3rem;
  }

  .container {
    display: grid;
    grid-template-rows: auto auto;
    grid-row-gap: 2rem;
  }

  .summary {
    display: grid;
    grid-template-columns: 400px 1fr;
    grid-column-gap: 2rem;
  }

  .info {
    display: grid;
    grid-template-rows: auto 2rem 2rem 2rem 2rem 1fr;
  }

  .subtext {
    margin-left: 3rem;
    color: gray;
  }

  .description {
    margin-left: 3rem;
  }

  .title {
    font-size: 2.5rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 1rem;
    margin-top: -7px;
  }

  .image-container {

  }

  .image {
    width: 100%;
    height: 400px;
    object-fit: cover;
  }

  .instructions {
    display: grid;
    grid-template-rows: auto auto;
    row-gap: 2rem;
  }

  .ingredients {

  }

  .section-header {
    font-size: 1.5rem;
  }

  .directions {

  }

  .other-recipes {
    background-color: lightgray;
  }
</style>
