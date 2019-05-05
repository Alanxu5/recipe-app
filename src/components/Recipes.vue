<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'Recipes',
  created() {
    // this.name = this.$route.params.recipeData.name;
    // this.description = this.$route.params.recipeData.description;
    // this.ingredients = this.$route.params.recipeData.ingredients;
    // this.directions = this.$route.params.recipeData.directions;
    // this.prepTime = this.$route.params.recipeData.prepTime;
    // this.cookTime = this.$route.params.recipeData.cookTime;
    // this.feeds = this.$route.params.recipeData.feeds;

    this.name = "World's Best Lasagna";
    this.description = "The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawd. Chase QuickPay(R) with Zelle(SM) STEPHANIE HUA requested $409.56 Go to Chase.com/QP or the Chase app to Send Money. Message: Splitwise 4/24";
    this.ingredients = "1 pound sweet Italian sausage\n3/4 pound lean ground beef\n1/2 cup minced onion\n2 cloves garlic, crushed";
    this.directions = "In a Dutch oven, cook sausage, ground beef, onion, and garlic over medium heat until well browned. Stir in crushed tomatoes, tomato paste, tomato sauce, and water. Season with sugar, basil, fennel seeds, Italian seasoning, 1 tablespoon salt, pepper, and 2 tablespoons parsley. Simmer, covered, for about 1 1/2 hours, stirring occasionally.\nBring a large pot of lightly salted water to a boil. Cook lasagna noodles in boiling water for 8 to 10 minutes. Drain noodles, and rinse with cold water. In a mixing bowl, combine ricotta cheese with egg, remaining parsley, and 1/2 teaspoon salt.";
    this.prepTime = "30 m";
    this.cookTime = "2 h 30 m";
    this.feeds = "5";
  }
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
              {{ name }}
            </div>
            <div class="subtext">
              Prep: {{ prepTime }}
            </div>
            <div class="subtext"> 
              Cook: {{ cookTime }}
            </div>
            <div class="subtext">
              Servings: {{ feeds }}
            </div>
            <div class="subtext">
              Preparation: Oven
            </div>
            <div class="description">
              Description: {{ description }}
            </div>
          </div>        
        </div>
        <div class="instructions">
          <div class="ingredients">
            <div class="section-header">
              Ingredients
            </div>
            <div>{{ ingredients }}</div>
          </div>
          <div class="directions">
            <div class="section-header">
              Directions
            </div>
            <div>{{ directions }}</div>
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
