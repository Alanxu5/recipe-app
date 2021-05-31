<script>
export default {
  name: 'ProfileView',
  data() {
    return {
      accessToken: {}
    };    
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
  </div>
</template>

<style lang="scss" module>
</style>
