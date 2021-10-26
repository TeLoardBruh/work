<template>
  <div class="admin-page">
    <section class="new-post">
      <app-button @click="$router.push('/admin/new-post')"
        >Create Post</app-button
      >
    </section>
    <section class="existing-posts">
      <h1>Existing Posts</h1>
      <post-card
        v-for="post in posts"
        :key="post.id"
        :id="post.id"
        :image="post.thumbnailLink"
        :previewText="post.previewText"
        :title="post.title"
        :content="post.content"
        :isAdmin="true"
      />
    </section>
  </div>
</template>
<script>
import PostCard from "@/components/Post/PostCard.vue";
import AppButton from "@/components/UI/AppButton.vue";
export default {
  layout: "admin",
  components: { PostCard, AppButton },
  computed: {
    posts() {
      return this.$store.getters.posts;
    }
  },
  created() {}
};
</script>

<style scoped>
.admin-page {
  padding: 20px;
}

.new-post {
  text-align: center;
  border-bottom: 2px solid #ccc;
  padding-bottom: 10px;
}

.existing-posts {
  max-width: 50%;
  padding: 100px;
  margin: auto;
}
.existing-posts h1 {
  text-align: center;
}
</style>
