<template>
  <nav>
    <v-toolbar flat class="grey lighten-4">
      <v-app-bar-nav-icon
        @click="drawer = !drawer"
        class="grey--text"
      ></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">ToDo</span>
        <span>List</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <!-- dropdown menu -->

      <div class="text-center">
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn text dark color="grey" v-bind="attrs" v-on="on"
              ><v-icon>mdi-arrow-down-drop-circle</v-icon>
              <span> Menu </span>
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="item in navItems"
              :key="item.title"
              router
              :to="item.route"
            >
              <v-list-item-title>{{ item.text }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>

      <v-btn text color="grey"
        ><span>Logout</span><v-icon right>mdi-logout</v-icon>
      </v-btn>
    </v-toolbar>

    <v-navigation-drawer app class="primary" v-model="drawer" temporary>
      <v-layout column align-center>
        <v-flex class="mt-5">
          <v-avatar size="100">
            <img
              class="text-center"
              src="https://raw.githubusercontent.com/iamshaunjp/vuetify-playlist/lesson-20/todo-ninja/public/avatar-2.png"
            />
          </v-avatar>
          <p class="white--text subheading mt-1 text-center">Rax Dev</p>
        </v-flex>
        <v-flex class="mt-4 mb-3 text-center">
          <PopUp />
        </v-flex>
      </v-layout>
      <v-list>
        <v-list-item
          v-for="link in navItems"
          :key="link.text"
          router
          :to="link.route"
        >
          <v-list-item-action>
            <v-icon class="white--text">{{ link.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="white--text">{{
              link.text
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import PopUp from "./PopUp.vue";
export default {
  components: { PopUp },
  data() {
    return {
      drawer: false,
      navItems: [
        {
          icon: "mdi-view-dashboard-edit-outline",
          text: "Dashboard",
          route: "/",
        },
        {
          icon: "mdi-folder-edit-outline",
          text: "My Projects",
          route: "/projects",
        },
        { icon: "mdi-human-greeting-variant", text: "Team", route: "/team" },
      ],
      items: [
        { title: "Click Me" },
        { title: "Click Me" },
        { title: "Click Me" },
        { title: "Click Me 2" },
      ],
    };
  },
};
</script>
