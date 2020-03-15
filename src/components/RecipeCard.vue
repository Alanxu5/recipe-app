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
    typeIcon() {
      let icon;
      if (this.recipe.type === "Protein") {
        icon = 'meat';
      } else if (this.recipe.type === "Vegetable") {
        icon = 'broccoli';
      } else {
        icon = 'potato';
      }
      return icon;
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
    <div
      :class="$style.information">
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
          <img 
            :class="$style.typeIcon"
            :src="require(`@/assets/icons/${typeIcon}.png`)">
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

  .typeIcon {
    width: 40px;
    height: 40px;
  }
  
  .information {
    margin-top: .5rem;
  }

  .info {
    display: grid;
    grid-template-columns: 50px 50px;
  }

  .name {
    font-size: 1.15rem;
  }
</style>
