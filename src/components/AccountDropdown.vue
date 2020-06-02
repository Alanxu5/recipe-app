<script>
export default {
  name: 'AccountDropdown',
  methods: {
    getProfile() {
      this.$router.push({ name: 'profile' });
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
  <div :class="$style.dropdown">
    <div :class="$style.dropdownButton">
      Account
    </div>
    <div :class="$style.dropdownContent">
      <a @click="getProfile">Profile</a>
      <a @click="logout">Logout</a>
    </div>
  </div>
</template>

<style lang="scss" module>
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdownButton {
  &:hover {
    cursor: pointer;
  }
}

.dropdownContent {
  display: none;
  right: 0;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 120px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;

  a {
    padding: 16px;
    display: block;
    &:hover {
      background-color: #f0efef;
    }
  }
}

.dropdown:hover .dropdownContent {
  display: block;
}
</style>