import { computed, reactive } from "vue";
import { testPosts } from "./testPost";
class Store {
  constructor() {
    this.state = reactive({
      posts: testPosts,
      currentTag: null,
    });
  }

  setHashTag(tag) {
    this.state.currentTag = tag;
  }
  increamentLike(post) {
    const foundPost = this.state.posts.find((p) => {
      return p.id === post.id;
    });
    if (!foundPost) {
      return;
    }
    post.likes += 1;
  }
  get filterPost() {
    return computed(() => {
      if (!store.state.currentTag) {
        return store.state.posts;
      }
      return store.state.posts.filter((post) =>
        post.hashtags.includes(store.state.currentTag)
      );
    });
  }
}

export const store = new Store();
