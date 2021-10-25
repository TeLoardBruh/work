<template>
  <div class="hashtag" @click="setHashTag"># {{ hashtag }}</div>
</template>

<script>
import { store } from "../store";
export default {
  props: {
    hashtag: {
      type: String,
      required: true,
    },
  },
  setup(props, context) {
    const setHashTag = () => {
      store.setHashTag(props.hashtag);
    };

    return {
      setHashTag,
    };
  },
};
</script>
<style scoped>
.hashtag {
  text-decoration: underline;
}
.hashtag:hover {
  color: cornflowerblue;
}
</style>
