<script>
export default {
  name: 'TheNavBar',
  computed: {
    plateRecipes() {
      return this.$store.getters.getPlate;
    }
  },
  methods: {
    toggleModal() {
      this.$emit('toggleModal');
    },
    login() {
      this.$auth.loginWithRedirect();
    },
    logout() {
      this.$auth.logout({
        returnTo: window.location.origin
      });
    },
  }
}
</script>

<template>
  <div :class="$style.header">
    <div :class="$style.icon">
      <RouterLink to="/">
        !
      </RouterLink>
    </div>
    <div 
      :class="$style.navItem"
      @click="toggleModal">
      Submit
    </div>
    <div 
      v-if="!$auth.loading"
      :class="$style.navItem">
      <div
        v-if="$auth.isAuthenticated"
        @click="logout">
        Logout
      </div>
      <div 
        v-else
        @click="login">
        Login
      </div>
      <div
        v-if="$auth.isAuthenticated"
        :class="$style.navItem">
        {{ $auth.user.email }}
      </div>
    </div>
    <div />
    <div 
      :class="$style.navItem">
      {{ plateRecipes }}
    </div>
  </div>
</template>

<style lang="scss" module>
.header {
  display: grid;
  grid-template-columns: 3rem 100px 100px 1fr 100px; 
  height: 3rem;
}

.icon {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d3d3d3;
}

.navItem {
  display: flex;
  justify-content: center;
  align-items: center;
}

.navItem:hover {
  cursor: pointer;
  border-bottom: 1px solid #808080;
}

.cart {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>