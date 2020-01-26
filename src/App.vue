<script>
import SubmitModal from '@/components/SubmitModal'
import TheNavBar from '@/components/TheNavBar'

export default {
  name: 'App',
  components: {
    SubmitModal,
    TheNavBar
  },
  data() {
    return {
      showModal: false
    };
  },
  async created() {
    try {
      await this.$auth.renewTokens();
    } catch (e) {
      console.log(e);
    }
  },  
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    }    
  }
}
</script>

<template>
  <div id="app">
    <TheNavBar 
      @toggleModal="toggleModal" />
    <div :class="$style.router">
      <RouterView />
    </div>
    <SubmitModal
      v-if="showModal"
      @closeModal="toggleModal" />
  </div>
</template>

<style module>
@import url('https://fonts.googleapis.com/css?family=Lato:300&display=swap');

#app {
  font-family: 'Roboto Condensed', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

html, body {
  font-family: 'Lato', sans-serif;
}

a:-webkit-any-link {
  color: black;
  text-decoration-line: none;
}

.router {
  margin: 0 auto
}
</style>
