<script>
export default {
  name: "RecipeCard",
  props: {
    recipe: {
      type: Object,
      required: true
    }
  },
  computed: {
    imgFileName() {
      let img = '';
      if (this.recipe.type === "1") {
        img = 'IMG_2825';
      } else if (this.recipe.type === "3") {
        img = 'IMG_2838';
      } else {
        img = 'IMG_9939';
      }
      return img;
    }
  },
  methods: {
    recipeClicked() {
      this.$emit('recipeClicked', this.recipe.id);
    }
  }
}
</script>
<template>
  <div 
    :class="$style.container"
    @click="recipeClicked">
    <div>
      <img 
        :class="$style.image"
        :src="require(`@/assets/images/${imgFileName}.jpg`)">
    </div>
    <div>
      <div :class="$style.name">
        {{ recipe.name }}
      </div>
      <div>
        {{ recipe.prepTime + recipe.cookTime }} 
      </div>
      <div>
        {{ recipe.servings }}
      </div>
    </div>
  </div>
</template>

<style module>
  .container {
    display: grid;
    height: 300px; 
    width: 300px;
    grid-template-rows: 70% 30%;
    margin: .5rem;
  }

  .image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .name {
    font-size: 1.25rem;
  }
</style>
