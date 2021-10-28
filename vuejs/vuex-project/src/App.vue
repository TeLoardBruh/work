<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + Vite" />

  {{ store.state.count }}
  <!-- <button @click="click">Increment</button> -->
  <button v-for="post in posts" :key="post.id" @click="click(post)">
    {{ post.title }}
  </button>
  {{ store.state.postId }}
  <div v-if="currentPost">
    <h2>{{ currentPost.title }}</h2>
    <h2>{{ currentPost.content }}</h2>
  </div>
</template>

<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from "./components/HelloWorld.vue";
import { useStore } from "vuex";
import { computed } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
export default {
  setup() {
    const posts = [
      {
        id: 1,
        title: "Post #1",
      },
      {
        id: 2,
        title: "Post #2",
      },
    ];
    const store = useStore();
    const click = (post) => {
      // store.state.count += 1;
      store.commit("setPostId", post.id);
    };

    const fetchData = () => {
      store.dispatch("fetchPost", "POST");
    };
    // const currentPost = computed(() => {
    //   return store.state.posts.find((x) => {
    //     return x.id === store.state.postId;
    //   });
    // });
    onMounted(() => {
      fetchData();
    });
    console.log(store);
    return {
      store,
      postId: computed(() => store.state.postId),
      posts: computed(() => store.state.posts.all),
      click,
      fetchData,
      currentPost: computed(() => store.getters['currentPost']),
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
