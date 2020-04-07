<script>
export default {
  name: 'RecipePlateCard',
  props: {
    platedRecipe: {
      type: Object,
      required: true
    }
  },
  computed: {
    imgFileName() {
      let img;
      if (this.platedRecipe.type === "Protein") {
        img = 'IMG_2825';
      } else if (this.platedRecipe.type === "Vegetable") {
        img = 'IMG_2838';
      } else {
        img = 'IMG_9939';
      }
      return img;
    },
  }
}
</script>

<template>
  <div>
    <div :class="$style.type">
      {{ platedRecipe.type }}
    </div>
    <div :class="$style.container">
      <div>
        <img 
          :class="$style.image"
          :src="require(`@/assets/images/${imgFileName}.jpg`)">
      </div>
      <div :class="$style.plateInfo">
        <div :class="$style.info">
          <div :class="$style.name">
            {{ platedRecipe.name }}
          </div>
          <div :class="$style.recipeInfo">
            Method: {{ platedRecipe.method }}
          </div>
          <div :class="$style.recipeInfo">
            Servings: {{ platedRecipe.servings }}
          </div>
          <div :class="$style.recipeInfo">
            Prep Time: {{ platedRecipe.prepTime }} mins
          </div>
          <div :class="$style.recipeInfo">
            Cook Time: {{ platedRecipe.cookTime }} mins
          </div>
        </div>
        <div :class="$style.recipeInfo">
          {{ platedRecipe.description }}
        </div>
      </div>
      <div>
        Total Time: {{ platedRecipe.prepTime + platedRecipe.cookTime }} mins
      </div>
    </div>
  </div>
</template>

<style lang="scss" module>
  .type {
    font-size: 1.25rem;
    font-weight: 500;
  }

  .container {
    height: 200px;
    display: grid;
    grid-template-columns: 30% 1fr auto;
    padding: 1rem;
    border-bottom: .5px solid rgb(220, 220, 220);
  }

  .image {
    object-fit: cover;
    width: 200px;
    height: 200px;
  }

  .plateInfo {
    display: flex;
    flex-direction: column;
    justify-content: space-between; 
  }

  .info {
    line-height: 1.45;
  }

  .name {
    font-size: 1.20rem;
  } 

  .recipeInfo {
    color: rgb(95, 95, 95); 
  }
</style>