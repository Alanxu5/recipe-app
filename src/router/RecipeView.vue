<script>
export default {
  name: 'RecipeView',
  computed: {
    recipe() {
      return this.$store.getters.getCurrentRecipe;
    },
    dirArr() {
      return Object.keys(this.recipe).length > 0 ? Object.keys(this.recipe.directions).map(e => this.recipe.directions[e]) : [];
    },
    imgFileName() {
      let img = '';
      if (this.recipe.type === 'Protein') {
        img = 'IMG_2825';
      } else if (this.recipe.type === 'Vegetable') {
        img = 'IMG_2838';
      } else {
        img = 'instantpot_rice';
      }
      return img;
    },
    isPlated() {
      const platedRecipes = this.$store.getters.getPlatedRecipes; 
      return platedRecipes[this.recipe.type] && platedRecipes[this.recipe.type].id === this.recipe.id;
    }
  },  
  created() {
    this.$store.dispatch('getRecipe', this.$route.query.id);
  },
  methods: {
    addRecipe() {
      this.$store.dispatch('addRecipeToPlate', { recipe: this.recipe });
    },
    removeRecipe() {
      this.$store.dispatch('removeRecipeFromPlate', { recipeId: this.recipe.id });
    }
  }
}
</script>

<template>
  <div 
    v-if="recipe"
    :class="$style.recipeContainer">
    <div>
      <div :class="$style.container">
        <div :class="$style.summary">
          <div>
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
              <button 
                v-if="isPlated"
                @click="removeRecipe">
                Remove From Plate
              </button>
              <button 
                v-else 
                @click="addRecipe">
                Add to Plate
              </button>
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
              <div>
                {{ index + 1 }}. {{ ingredient.amount }} {{ ingredient.unit }} {{ ingredient.ingredient }} {{ ingredient.preparation }}
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
  </div>
</template>

<style lang="scss" module>
  .recipeContainer {
    margin: 1.5rem 0 3rem 0;
    display: grid;
    grid-template-columns: 75% 1fr;
    grid-column-gap: 3rem;
    width: 70%;
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

  .sectionHeader {
    font-size: 1.5rem;
  }
</style>
