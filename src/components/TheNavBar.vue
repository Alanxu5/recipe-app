<script>
import AccountDropdown from '@/components/AccountDropdown';

export default {
  name: 'TheNavBar',
  components: {
    AccountDropdown
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
    <div />
    <div 
      v-if="!$auth.loading"
      :class="$style.navItem">
      <div
        v-if="$auth.isAuthenticated">
        <AccountDropdown />
      </div>
      <div 
        v-else
        @click="login">
        Login
      </div>
    </div>
    <img 
      :class="$style.plate"
      :src="require(`@/assets/icons/plate.png`)"
      @click="viewPlate">
  </div>
</template>

<style lang="scss" module>
.header {
  display: grid;
  grid-template-columns: 3rem 100px 1fr 100px 100px; 
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