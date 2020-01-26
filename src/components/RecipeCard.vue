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
      if (this.recipe.type === "1") {
        img = 'IMG_2825';
      } else if (this.recipe.type === "3") {
        img = 'IMG_2838';
      } else {
        img = 'IMG_9939';
      }
      return img;
    },
    typeIcon() {
      let icon;
      if (this.recipe.type === "1") {
        icon = 'meat';
      } else if (this.recipe.type === "3") {
        icon = 'broccoli';
      } else {
        icon = 'potato';
      }
      return icon;
    },
    methodIcon() {
      let icon;
      if (this.recipe.type === "1") {
        icon = 'pan';
      } else if (this.recipe.type === "3") {
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
        <!-- <div>
          {{ recipe.prepTime + recipe.cookTime }} min 
        </div> -->
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
        <!-- <div>
          Aprons
        </div> -->
      </div>
    </div>
  </div>
</template>

<style module>
  .container {
    display: grid;
    height: 350px; 
    width: 250px;
    grid-template-rows: 70% 30%;
    margin-left: 8px;
    margin-right: 8px;
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
    grid-template-columns: 50px 50px 50px;
  }

  .name {
    font-size: 1.15rem;
  }
</style>
