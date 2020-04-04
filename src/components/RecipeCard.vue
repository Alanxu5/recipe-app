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
      return this.$store.getters.getPlate[this.recipe.type] === this.recipe.id;
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
    <div>
      <img 
        :class="$style.image"
        :src="require(`@/assets/images/${imgFileName}.jpg`)">
    </div>
    <div>
      <div :class="$style.name">
        {{ recipe.name }}
      </div>
      <div :class="$style.info">
        <div>
          <img 
            :class="$style.icon"
            :src="require(`@/assets/icons/${methodIcon}.png`)">
        </div>
        <div>
          {{ recipe.cookTime + recipe.prepTime }} mins
        </div>
        <div 
          v-if="isPlated"
          :class="$style.plated">
          plated
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
    display: grid;
    grid-template-columns: 50px 50px 50px;
    grid-column-gap: 5px;
  }

  .name {
    font-size: 1.15rem;
  }

  .plated {
    color: #8FADFF;
  }
</style>
