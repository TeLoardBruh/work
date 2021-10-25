<template>
  <div class="card">
    <div class="title">
      <slot name="title" />
    </div>

    <div class="content">
      <slot name="content" />
    </div>

    <div class="description">
      <slot name="description" />
    </div>
    <!-- <button @click="fetchData">Fetch</button> -->
  </div>
</template>

<script>
export default {
  props: {
    pokemon: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.opace {
  opacity: 0.5;
}
.card:hover {
  opacity: 1;
}
</style>
