import Vuex from "vuex";
import axios from "axios";
const createStore = () => {
  return new Vuex.Store({
    state: {
      posts: []
    },
    mutations: {
      setPosts(state, payload) {
        state.posts = payload;
      },
      addPost(state, post) {
        state.posts.push(post);
      },
      editPost(state, editPost) {
        const postIndex = state.posts.findIndex(
          post => post.id === editPost.id
        );
        state.posts[postIndex] = editPost;
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return axios
          .get(
            "https://nuxt-js-94ec8-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json"
          )
          .then(res => {
            const postArray = [];
            for (const key in res.data) {
              postArray.push({ ...res.data[key], id: key });
            }
            // console.log(postArray);
            vuexContext.commit("setPosts", postArray);
          })
          .catch(e => context.error(e));
      },
      setPosts(context, payload) {
        context.commit("setPosts", payload);
      },
      addPost(vuexContext, post) {
        const createPost = { ...post, updatedDate: new Date() };
        return axios
          .post(
            "https://nuxt-js-94ec8-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json",
            createPost
          )
          .then(data => {
            vuexContext.commit("addPost", {
              ...createPost,
              id: data.data.name
            });
          })
          .catch(e => console.log(e));
      },
      editPost(vuexContext, editPost) {
        return axios
          .put(
            "https://nuxt-js-94ec8-default-rtdb.asia-southeast1.firebasedatabase.app/posts/" +
              editPost.id +
              ".json",
            editPost
          )
          .then(res => vuexContext.commit("editPost", editPost))
          .catch(e => console.log(e));
      }
    },
    getters: {
      posts(state) {
        return state.posts;
      }
    }
  });
};

export default createStore;
