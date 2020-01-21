<script>
export default {
  name: 'RecipeView',
  computed: {
    recipe() {
      return this.$store.state.current_recipe;
    },
    dirArr() {
      return Object.values(this.$store.state.current_recipe).length === 0 ? [] : Object.values(this.$store.state.current_recipe.directions) 
    },
    imgFileName() {
      let img = '';
      if (this.recipe.type === 'Protein') {
        img = 'IMG_2825';
      } else if (this.recipe.type === 'Vegetable') {
        img = 'IMG_2838';
      } else {
        img = 'IMG_9939';
      }
      return img;
    }
  },  
  created() {
    this.$store.dispatch('getRecipe', this.$route.query.id);
  },
}
</script>

<template>
  <div :class="$style.recipeContainer">
    <div>
      <div :class="$style.container">
        <div :class="$style.summary">
          <div :class="$style.imageContainer">
            <img 
              :class="$style.image"
              :src="require(`@/assets/images/${imgFileName}.jpg`)">
          </div>
          <div :class="$style.info">
            <div :class="$style.title">
              {{ recipe.name }}
            </div>
            <div :class="$style.subtext">
              Prep: {{ recipe.prepTime }}
            </div>
            <div :class="$style.subtext"> 
              Cook: {{ recipe.cookTime }}
            </div>
            <div :class="$style.subtext">
              Servings: {{ recipe.servings }}
            </div>
            <div :class="$style.subtext">
              Method: {{ recipe.method }}
            </div>
            <div :class="$style.subtext">
              Type: {{ recipe.type }}
            </div>
            <div :class="$style.description">
              Description: {{ recipe.description }}
            </div>
          </div>        
        </div>
        <div :class="$style.instructions">
          <div :class="$style.ingredients">
            <div :class="$style.sectionHeader">
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
          <div :class="$style.directions">
            <div :class="$style.sectionHeader">
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
    <div :class="$style.otherRecipes">
      OTHER RECIPES
    </div>
  </div>
</template>

<style lang="scss" module>
  .recipeContainer {
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

  .imageContainer {

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

  .sectionHeader {
    font-size: 1.5rem;
  }

  .directions {

  }

  .otherRecipes {
    background-color: lightgray;
  }
</style>
