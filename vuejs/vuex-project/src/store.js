import { createStore } from "vuex";
import { testPosts } from "../../composition/src/testPost";
const delay = () => new Promise((res) => setTimeout(res, 1000));
const posts = {
  namespace: true,
  state() {
    return {
      postId: null,
      all: [],
    };
  },
  mutations: {
    setPostId(state, postId) {
      state.postId = postId;
    },
    setPosts(state, posts) {
      state.all = posts;
    },
  },

  actions: {
    async fetchPost(context, payload) {
      await delay();
      console.log("LOG");
      console.log(payload);
      context.commit("setPosts", testPosts);
    },
  },
  getters: {
    currentPost(state) {
      return state.all.find((x) => {
        return x.id === state.postId;
      });
    },
  },
};
export const store = createStore({
  modules: {
    posts,
  },
});
