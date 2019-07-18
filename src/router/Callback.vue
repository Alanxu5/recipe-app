<script>
export default {
  created() {
    this.$auth.handleAuthentication();
  },  
  methods: {
    handleLoginEvent(data) {
      this.$router.push(data.state.target || "/");
    }
  }
};
</script>

<template>
  <div>
    <p>Loading...</p>
  </div>
</template>
