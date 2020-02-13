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

<style lang="scss" module>
@import url('https://fonts.googleapis.com/css?family=Lato:300&display=swap');

html, body {
  font-family: 'Lato', sans-serif;
  width:100vw;
  overflow-x:hidden;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.router {
  display: flex;
  justify-content: center;
}

a:-webkit-any-link {
  color: black;
  text-decoration-line: none;
}
</style>
