<script>
export default {
  name: 'TheNavBar',
  data() {
    return {
      isAuthenticated: false
    }
  },
  methods: {
    toggleModal() {
      this.$emit('toggleModal');
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
  <div :class="$style.header">
    <div :class="$style.icon">
      <RouterLink to="/">
        <a :class="$style.router">
          Icon
        </a>
      </RouterLink>
    </div>
    <div :class="$style.link">
      <RouterLink to="/">
        <a :class="$style.router">
          Protein
        </a>
      </RouterLink>
    </div>
    <div :class="$style.link">
      <RouterLink to="/">
        <a :class="$style.router">
          Carb
        </a>
      </RouterLink>
    </div>
    <div :class="$style.link">
      <RouterLink to="/">
        <a :class="$style.router">
          Veggie
        </a>
      </RouterLink>
    </div>         
    <div 
      :class="$style.link"
      @click="toggleModal">
      Submit
    </div>
    <div />
    <div
      v-if="isAuthenticated"
      :class="$style.link"
      @click="logout">
      Logout
    </div>
    <div 
      v-else
      :class="$style.link"
      @click="login">
      Login
    </div>
  </div>
</template>

<style lang="scss" module>
.header {
  display: grid;
  grid-template-columns: minmax(2rem, 5%) minmax(9rem, 15%) minmax(9rem, 15%) minmax(9rem, 15%) minmax(9rem, 15%) 1fr minmax(9rem, 15%);
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
</style>