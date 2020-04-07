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
          {{ platedRecipe.type }}
        </div>
        <div :class="$style.recipeInfo">
          {{ platedRecipe.method }}
        </div>
      </div>
      <div :class="$style.recipeInfo">
        {{ platedRecipe.description }}
      </div>
    </div>
    <div>
      {{ platedRecipe.prepTime + platedRecipe.cookTime }}
    </div>
  </div>
</template>

<style lang="scss" module>
  .container {
    height: 200px;
    display: grid;
    grid-template-columns: 30% 1fr 10%;
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
    line-height: 1.25;
  }

  .name {
    font-size: 1.25rem;
  } 

  .recipeInfo {
    color: rgb(95, 95, 95); 
  }
</style>