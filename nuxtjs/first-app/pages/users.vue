<template>
  <div>
    <Header />
    <h1>This is user</h1>
    <input type="text" v-model="input" />
    <button @click="onLoadUser">Load</button>
    <nuxt-child />
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: ""
    };
  },
  methods: {
    onLoadUser() {
      this.$router.push("/users/" + this.input);
    }
  },
  layout: "users"
};
</script>
