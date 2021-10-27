export default function(context) {
  console.log("checkAuth");
  context.store.dispatch("initAuth", context.req);
}
