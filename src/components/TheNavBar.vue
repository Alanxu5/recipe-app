<script>
export default {
  name: 'TheNavBar',
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
    viewPlate() {
      this.$router.push({ name: 'plate' })
    }
  }
}
</script>

<template>
  <div :class="$style.header">
    <div :class="$style.icon">
      <RouterLink :to="{ name: 'home' }">
        X
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
        v-if="$auth.isAuthenticated">
        {{ $auth.user.email }}
      </div>
    </div>
    <div />
    <img 
      :class="$style.plate"
      :src="require(`@/assets/icons/plate.png`)"
      @click="viewPlate">
  </div>
</template>

<style lang="scss" module>
.header {
  display: grid;
  grid-template-columns: 3rem 100px 100px 1fr 100px; 
  height: 3.5rem;
}

.icon {
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }
}

.navItem {
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
    border-bottom: 1px solid #808080;
  }
}

.plate {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 50px;

  &:hover {
    cursor: pointer;
  }
}
</style>