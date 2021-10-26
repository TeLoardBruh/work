<template>
  <div class="admin-new-post-page">
    <section class="new-post-form">
      <AdminPost @submit="onSubmitted" />
    </section>
  </div>
</template>
<script>
import axios from "axios";
import AdminPost from "@/components/Admin/AdminPost";
export default {
  layout: "admin",
  components: {
    AdminPost
  },
  methods: {
    onSubmitted(postData) {
      this.$store
        .dispatch("addPost", postData)
        .then(() => this.$router.push("/admin"));
    }
  }
};
</script>

<style scoped>
.new-post-form {
  width: 90%;
  margin: 20px auto;
}

@media (min-width: 768px) {
  .new-post-form {
    width: 500px;
  }
}
</style>
