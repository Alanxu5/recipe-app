<script>
export default {
  name: "Card",
  props: {
    recipe: {
      type: Object,
      required: true
    }
  }
}
</script>
<template>
  <div :class="$style.container">
    <div>
      <img 
        :class="$style.image"
        src="@/assets/images/IMG_2298.jpg">
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
    height: 200px; 
    width: 200px;
    grid-template-rows: 70% 30%;
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
