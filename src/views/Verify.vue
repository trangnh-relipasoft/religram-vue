<template></template>

<script>
export default {
  created() {
    let token = this.$route.query.token;
    this.$store.state.token = token;
    this.$router.push({ name: "reset" });
  }
};
</script>