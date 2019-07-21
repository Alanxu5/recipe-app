<script>
import SubmitModal from '@/components/SubmitModal'
import NavBar from '@/components/NavBar'

export default {
  name: 'App',
  components: {
    SubmitModal,
    NavBar
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
    <NavBar 
      @toggleModal="toggleModal" />
    <RouterView />
    <SubmitModal
      v-if="showModal"
      @closeModal="toggleModal" />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=Lato');

#app {
  font-family: 'Roboto Condensed', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

html, body {
  font-family: 'Roboto Condensed', sans-serif;
}

a:-webkit-any-link {
  color: black;
  text-decoration-line: none;
}
</style>
