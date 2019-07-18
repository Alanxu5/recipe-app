<script>
import SubmitModal from '@/components/SubmitModal'

export default {
  name: 'App',
  components: {
    SubmitModal
  },
  data() {
    return {
      showModal: false,
      isAuthenticated: false      
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
    },
    login() {
      this.$auth.login();
    },
    logout() {
      this.$auth.logOut();
    },
    handleLoginEvent(data) {
      this.isAuthenticated = data.loggedIn;
      this.profile = data.profile;
    }        
  }
}
</script>

<template>
  <div id="app">
    <div class="header">
      <div class="icon">
        <RouterLink to="/">
          <a class="router">
            Icon
          </a>
        </RouterLink>
      </div>
      <div class="link">
        <RouterLink to="/">
          <a class="router">
            Home
          </a>
        </RouterLink>
      </div>
      <div class="link">
        <RouterLink to="/recipes">
          <a class="router">
            Recipes
          </a>
        </RouterLink>
      </div>
      <div 
        class="link"
        @click="toggleModal">
        Submit
      </div>
      <div />
      <div
        v-if="isAuthenticated"
        class="link"
        @click="logout">
        Logout
      </div>
      <div 
        v-else
        class="link"
        @click="login">
        Login
      </div>
    </div>
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

.header {
  display: grid;
  grid-template-columns: minmax(2rem, 5%) minmax(9rem, 15%) minmax(9rem, 15%) minmax(9rem, 15%) 1fr minmax(9rem, 15%);
  background-color: lightblue;
  height: 3rem;
}

.icon {
  background-color: orange;
}

.link {
  display: grid;
  justify-items: center;
  align-items: center;
}

.link:hover {
  cursor: pointer;
  background-color: gray;
}

a:-webkit-any-link {
  color: black;
  text-decoration-line: none;
}
</style>
