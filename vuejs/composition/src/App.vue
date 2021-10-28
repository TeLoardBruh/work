<template>
  <input :value="currentTag" @input="setHashTag" />
  <div class="cards">
    <CardComponent v-for="post in filteredPosts" :key="post.id">
      {{ post.title }}
      <template v-slot:title>{{ post.title }}</template>
      <template v-slot:content>{{ post.content }}</template>
      <template v-slot:description><Controls :post="post" /> </template>
    </CardComponent>
    <router-view />
  </div>
</template>
<script>
import { store } from "./store";
import CardComponent from "./components/Card.vue";
import Controls from "./components/Controls.vue";
import { computed } from "vue";

export default {
  components: {
    CardComponent,
    Controls,
  },
  setup() {
    const setHashTag = ($event) => {
      store.setHashTag($event.target.value);
    };

    return {
      filteredPosts: store.filterPost,
      currentTag: computed(() => store.state.currentTag),
      setHashTag,
    };
  },
};
</script>
<style>
.cards {
  display: flex;
}
.card {
  border: 1px solid silver;
  border-radius: 8px;
  max-width: 200px;
  margin: 0 5px;
  cursor: pointer;
  box-shadow: 0px 1px 3px darkgrey;
  transition: 0.2s;
}
.title,
.content,
.description {
  padding: 16px;
  text-transform: capitalize;
  text-align: center;
}
.title,
.content {
  border-bottom: 1px solid silver;
}
.title {
  font-size: 1.25em;
}
.card:hover {
  transition: 0.2s;
  box-shadow: 0px 1px 9px darkgrey;
}
img {
  width: 100%;
}
</style>
