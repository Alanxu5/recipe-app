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
      let img;
      if (this.recipe.type === "Protein") {
        img = 'IMG_2825';
      } else if (this.recipe.type === "Vegetable") {
        img = 'IMG_2838';
      } else {
        img = 'IMG_9939';
      }
      return img;
    },
    methodIcon() {
      let icon;
      if (this.recipe.method === "Pan") {
        icon = 'pan';
      } else if (this.recipe.method === "Instant Pot") {
        icon = 'pot';
      } else {
        icon = 'oven';
      }
      return icon; 
    },
    isPlated() {
      const platedRecipes = this.$store.getters.getPlatedRecipes; 
      return platedRecipes[this.recipe.type] && platedRecipes[this.recipe.type].id === this.recipe.id;
    }
  },
  methods: {
    recipeClicked() {
      this.$router.push({ name: 'recipe', query: { id: this.recipe.id } });
    }
  }
}
</script>
<template>
  <div 
    :class="$style.container"
    @click="recipeClicked">
    <img 
      :class="$style.image"
      :src="require(`@/assets/images/${imgFileName}.jpg`)">
    <div>
      <div :class="$style.info">
        <div :class="$style.name">
          {{ recipe.name }}
        </div>
        <img 
          :class="$style.icon"
          :src="require(`@/assets/icons/${methodIcon}.png`)">
      </div>
      <div :class="$style.summary">
        <div :class="$style.time">
          {{ recipe.cookTime + recipe.prepTime }} mins
        </div>
        <div 
          v-if="isPlated"
          :class="$style.plated">
          plated
        </div>
        <div>
          {{ recipe.ingredients.length }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" module>
  .container {
    display: grid;
    height: 350px; 
    width: 250px;
    grid-template-rows: 70% 30%;
    grid-gap: .5rem;
  }

  .image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 4px;
  }
  
  .icon {
    width: 35px;
    height: 35px;
  }

  .info {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .name {
    font-size: 1.25rem;
  }

  .summary {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }

  .time {
    color: rgb(95, 95, 95); 
    margin-right: 1rem;
  }

  .plated {
    font-weight: 600;
    color: rgb(53, 117, 56);
    margin-right: 1rem;
  }
</style>
