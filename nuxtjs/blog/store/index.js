import Vuex from "vuex";
import axios from "axios";
import Cookies from "js-cookie";
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
      },
      setToken(state, payload) {
        state.token = payload;
      },
      clearToken(state) {
        state.token = null;
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return axios
          .get(process.env.baseUrl + "posts.json")
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
            process.env.baseUrl +
              "posts.json" +
              "?auth=" +
              vuexContext.state.token,
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
            process.env.baseUrl +
              "posts/" +
              editPost.id +
              ".json" +
              "?auth=" +
              vuexContext.state.token,
            editPost
          )
          .then(res => vuexContext.commit("editPost", editPost))
          .catch(e => console.log(e));
      },
      authenticateUser(vuexContext, authData) {
        let authUrl =
          "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" +
          process.env.apiKey;
        if (!authData.isLogin) {
          authUrl =
            "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" +
            process.env.apiKey;
        }
        return axios
          .post(authUrl, {
            email: authData.email,
            password: authData.password,
            returnSecureToken: true
          })
          .then(res => {
            vuexContext.commit("setToken", res.data.idToken);
            localStorage.setItem("token", res.data.idToken);
            localStorage.setItem(
              "tokenExperation",
              new Date().getTime() + Number.parseInt(res.data.expiresIn) * 1000
            );
            Cookies.set("jwt", res.data.idToken);
            Cookies.set(
              "expirationDate",
              new Date().getTime() + Number.parseInt(res.data.expiresIn) * 1000
            );
            return axios.post("/api/trackData", { data: "AUTHENTICATED" });
          })
          .catch(e => console.log(e));
      },

      initAuth(vuexContext, req) {
        let token;
        let tokenExperation;
        if (req) {
          if (!req.headers.cookie) {
            return;
          }
          const jwtCookie = req.headers.cookie
            .split(";")
            .find(c => c.trim().startsWith("jwt="));
          if (!jwtCookie) {
            return;
          }
          token = jwtCookie.split("=")[1];
          tokenExperation = req.headers.cookie
            .split(";")
            .find(c => c.trim().startsWith("expirationDate="))
            .split("=")[1];
        } else if (process.client) {
          token = localStorage.getItem("token");
          tokenExperation = localStorage.getItem("tokenExperation");
        } else {
          token = null;
          tokenExperation = null;
        }
        if (new Date().getTime() > +tokenExperation || !token) {
          vuexContext.dispatch("logout");
          return;
        }

        vuexContext.commit("setToken", token);
      },
      logout(vuexContext) {
        vuexContext.commit("clearToken");
        Cookies.remove("jwt");
        Cookies.remove("expirationDate");
        if (process.client) {
          localStorage.removeItem("token");
          localStorage.removeItem("tokenExperation");
        }
      }
    },
    getters: {
      posts(state) {
        return state.posts;
      },
      isAuthenticated(state) {
        return state.token != null;
      }
    }
  });
};

export default createStore;
