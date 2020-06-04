<script>
export default {
  name: 'ProfileView',
  data() {
    return {
      accessToken: {}
    };    
  },
  created() {
    this.getAccessToken();
  },
  methods: {
    async getAccessToken() {
      this.accessToken = await this.$auth.getTokenSilently();
    }
  }
}
</script>

<template>
  <div>
    <code>
      <pre>
        {{ JSON.stringify($auth.user, null, 2) }}
      </pre>
    </code>
    <div>
      {{ accessToken }}
    </div>
  </div>
</template>

<style lang="scss" module>
</style>
