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
  created() {
    if (this.$route.query['type'] !== null && this.$route.query['type'] !== undefined) {
      this.$store.dispatch('addQueryFilters', { filterType: 'type', filters: this.$route.query['type'].split(',') });
    }

    if (this.$route.query['method'] !== null && this.$route.query['method'] !== undefined) {
      this.$store.dispatch('addQueryFilters', { filterType: 'method', filters: this.$route.query['method'].split(',') });
    }

    this.$store.dispatch('getLocalStorageData');
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
      :class="$style.navBar"
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
  font-size: .95rem;
  width: 100vw;
  overflow-x: hidden;
  margin-top: 0px;
  margin-left: 0px;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.navBar {
  position: fixed;
  z-index: 1;
  width: 100%;
  background-color: #ffffff;
  border-bottom: .5px solid #d3d3d3d3;
}

.router {
  display: flex;
  justify-content: center;
  padding-top: 1rem;
}

a:-webkit-any-link {
  color: black;
  text-decoration-line: none;
}
</style>
