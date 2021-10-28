<template>
  <div class="home">
    <h1 class="subheading grey--text">Dashboard</h1>

    <v-container class="my-5">
      <v-layout row class="mb-3 pa-3">
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="grey"
              dark
              v-bind="attrs"
              v-on="on"
              small
              text
              @click="sortBy('title')"
            >
              <v-icon left small>mdi-folder</v-icon>
              <span class="caption text-lowercase">By project name</span>
            </v-btn>
          </template>
          <span>Sort project by name</span>
        </v-tooltip>
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="grey"
              dark
              v-bind="attrs"
              v-on="on"
              small
              text
              @click="sortBy('person')"
            >
              <v-icon left small>mdi-human</v-icon>
              <span class="caption text-lowercase">By person</span>
            </v-btn>
          </template>
          <span>Sort project by person</span>
        </v-tooltip>
      </v-layout>
      <v-card flat>
        <v-layout
          row
          wrap
          v-for="project in projects"
          :key="project.title"
          class="pa-3"
        >
          <v-flex xs12 md6 :class="`pa-4 project ${project.status}`">
            <div class="caption grey--text">Project title</div>
            <div>{{ project.title }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Person</div>
            <div>{{ project.person }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Due by</div>
            <div>{{ project.due }}</div>
          </v-flex>
          <v-flex xs2 sm4 md2>
            <div>
              <v-chip :class="`${project.status} white--text caption my-2`">{{
                project.status
              }}</v-chip>
            </div>
          </v-flex>
        </v-layout>
        <v-divider />
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Home",

  components: {},
  data() {
    return {
      projects: [
        {
          title: "Design a new website",
          person: "The Net Ninja",
          due: "1st Jan 2019",
          status: "ongoing",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!",
        },
        {
          title: "Code up the homepage",
          person: "Chun Li",
          due: "10th Jan 2019",
          status: "complete",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!",
        },
        {
          title: "Design video thumbnails",
          person: "Ryu",
          due: "20th Dec 2018",
          status: "complete",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!",
        },
        {
          title: "Create a community forum",
          person: "Gouken",
          due: "20th Oct 2018",
          status: "overdue",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!",
        },
      ],
    };
  },
  methods: {
    sortBy(data) {
      this.projects.sort((a, b) => (a[data] < b[data] ? -1 : 1));
    },
  },
};
</script>

<style>
.project.complete {
  border-left: 4px solid #3cd1c2;
}
.project.ongoing {
  border-left: 4px solid orange;
}
.project.overdue {
  border-left: 4px solid tomato;
}
.v-chip.complete {
  border-left: 4px solid #3cd1c2;
  background: #3cd1c2 !important;
}
.v-chip.ongoing {
  border-left: 4px solid orange;
  background: orange !important;
}
.v-chip.overdue {
  border-left: 4px solid tomato;
  background: tomato !important;
}
</style>
