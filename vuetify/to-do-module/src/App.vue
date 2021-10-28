<template>
  <v-app>
    <v-main class="grey lighten-4">
      <NavBar />
      <v-content class="mx-4 mb-4">
        <router-view />
      </v-content>
    </v-main>
  </v-app>
</template>

<script>
import NavBar from "@/components/NavBar";
export default {
  name: "App",
  components: { NavBar },
  data: () => ({
    //
  }),
};
</script>
