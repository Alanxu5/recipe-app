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
  mounted() {
    if (this.$route.query['type'] !== null && this.$route.query['type'] !== undefined) {
      this.$store.dispatch('addQueryFilter', { filterType: 'type', filters: this.$route.query['type'].split(',') });
    } else if (this.$route.query['method'] !== null && this.$route.query['method'] !== undefined) {
      this.$store.dispatch('addQueryFilter', { filterType: 'type', filters: this.$route.query['method'].split(',') });
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
