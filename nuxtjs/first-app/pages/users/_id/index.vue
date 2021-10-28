<template>
  <h1>Id route for users {{ $route.params }}</h1>
</template>

<script>
export default {
  validate(data) {
    return /^\d+$/.test(data.params.id);
  },
  layout: "users"
};
</script>
