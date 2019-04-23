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
    this.description = "The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawd";
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
    <h1>View Recipes</h1>
    <div class="container">
      <div class="summary">
        <div class="image-container">
          <img 
            class="image"
            src="https://cdn.fstoppers.com/styles/full/s3/media/2015/03/apple-iphone-6-world-gallery-fstoppers-alastair_b.png">
        </div>
        <div class="info">
          <div class="title">
            {{ name }}
          </div>
          <div class="time">
            <div>Prep: {{ prepTime }}</div>
            <div>Cook: {{ cookTime }}</div>
          </div>
          <div>Number of meals: {{ feeds }}</div>
          <div>Description: {{ description }}</div>
        </div>        
      </div>
      <div class="instructions">
        <div class="ingredients">
          <div>{{ ingredients }}</div>
        </div>
        <div class="directions">
          <div>{{ directions }}</div>
        </div>
      </div>
    </div>
    <RouterView />
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .recipe-container {
    margin: 30px 30px 30px 30px;
    width: 80%;
  }

  .container {
    display: grid;
    grid-template-rows: auto auto
  }

  .summary {
    display: grid;
    grid-template-columns: 500px auto;
  }

  .info {

  }

  .title {
    font-size: 16px;
  }

  .time {
    display: grid;
    grid-template-columns: 40px 40px;
    /* justify-content: center; */
  }

  .image-container {

  }

  .image {
    width: 300px;
    height: 300px;
  }

  .instructions {
    display: grid;
    grid-template-rows: auto auto;
  }

  .ingredients {

  }

  .directions {

  }
</style>
