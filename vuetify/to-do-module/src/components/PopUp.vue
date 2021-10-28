<template>
  <div>
    <v-dialog max-width="600">
      <template v-slot:activator="{ on, attrs }">
        <v-btn dark v-bind="attrs" v-on="on" class="success">
          Add new project
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <h2>Add new project</h2>
        </v-card-title>
        <v-card-text>
          <v-form class="px-3" ref="form">
            <v-text-field
              label="Title"
              v-model="title"
              prepend-icon="mdi-folder"
              :rules="inputTitleRules"
            >
            </v-text-field>
            <v-textarea
              label="Information"
              v-model="content"
              prepend-icon="mdi-account-edit"
              :rules="inputContentRules"
            >
            </v-textarea>
            <v-menu>
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  :value="formattedDate"
                  label="Due Date"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                  :rules="inputDateRules"
                ></v-text-field>
              </template>
              <v-date-picker v-model="date" no-title scrollable>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="cancelDate"> Cancel </v-btn>
              </v-date-picker>
            </v-menu>
            <v-btn text class="success mx-0 mt-3" @click="addProject"
              >Add project</v-btn
            >
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
// import format from "date-fns/format";

export default {
  data() {
    return {
      title: "",
      content: "",
      date: null,
      menu: false,
      inputTitleRules: [
        (input) => input.length >= 3 || "Minimum length is 3 characters",
      ],
      inputContentRules: [
        (input) => input.length >= 3 || "Minimum length is 5 characters",
      ],
      inputDateRules: [(input) => input != null || "Date must be selected"],
    };
  },
  methods: {
    addProject() {
      if (this.$refs.form.validate()) {
        let title = this.title;
        let content = this.content;
        console.log(title, "~", content);
      }
    },
    cancelDate() {
      this.menu = false;
      this.date = null;
    },
  },
  computed: {
    formattedDate() {
      console.log(this.date);
      return this.date;
    },
  },
};
</script>
