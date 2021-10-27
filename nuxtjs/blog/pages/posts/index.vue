<template>
  <div class="post-page">
    <section class="posts-list">
      <post-card
        v-for="post in posts"
        :key="post.id"
        :id="post.id"
        :image="post.thumbnailLink"
        :previewText="post.previewText"
        :title="post.title"
        :content="post.content"
      />
    </section>
  </div>
</template>

<script>
export default {
  middleware: "log",
  computed: {
    posts() {
      return this.$store.getters.posts;
    }
  },
  created() {
    this.$store.dispatch("setPosts", this.posts);
  }
};
</script>

<style scoped>
.posts-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

.post-page {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
