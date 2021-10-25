<template>
  <button @click="clickLike">Like</button> {{ post.likes }}
  {{ post.hashtag }}
  <hashtag v-for="hashtag in post.hashtags" :key="hashtag" :hashtag="hashtag" />
</template>
<script>
import hashtag from "./HashTag.vue";
import { store } from "../store";
export default {
  components: {
    hashtag,
  },
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  setup(props, context) {
    const clickLike = () => {
      store.increamentLike(props.post);
    };

    return {
      clickLike,
    };
  },
};
</script>
<style></style>
