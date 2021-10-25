<template>
  <div v-if="disabled">
    <button :style="{ background, color }" disabled>Button</button>
  </div>
  <div v-else>
    <button :style="{ background, color }" class="disabled" disabled>
      Button
    </button>
  </div>
</template>

<script>
export default {
  props: {
    background: {
      type: String,
    },
    color: {
      type: String,
    },
    disabled: {
      type: Boolean,
    },
  },
};
</script>

<style scoped>
button:disabled {
  opacity: 0.5s !important;
}
.disabled {
  background: rgba(72, 61, 139, 0.5) !important;
}

button {
  background: none;
  color: black;
  border: none;
  border-radius: 5px;
  padding: 10px 40px;
  font-size: 16px;
  cursor: pointer;
}
button:hover {
  filter: brightness(125%);
}
</style>
