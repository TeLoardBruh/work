<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from "./components/HelloWorld.vue";
import MyButton from "./components/MyButton.vue";
import InputComponent from "./components/Input.vue";
import CardComponent from "./components/Card.vue";
import PokemonsCard from "./components/PokemonCard.vue";
const api = "https://pokeapi.co/api/v2/pokemon";
const IDS = [1, 4, 7];
export default {
  components: {
    MyButton,
    InputComponent,
    CardComponent,
    PokemonsCard,
  },
  data() {
    return {
      valid: true,
      username: {
        value: "",
        valid: false,
      },
      password: {
        value: "",
        valid: false,
      },
      pokemons: [],
      evolutions: [],
      selectedId: null,
    };
  },
  computed: {
    valid() {
      return this.username.valid && this.password.valid;
    },
  },
  async created() {
    this.pokemons = await this.fetchData(IDS);
  },
  methods: {
    submit() {
      console.log("Submit");
    },
    update(payload) {
      this[payload.name] = {
        value: payload.value,
        valid: payload.valid,
      };
    },
    async fetchEvolutions(pokemon) {
      this.evolutions = await this.fetchData([pokemon.id + 1, pokemon.id + 2]);
      this.selectedId = pokemon.id;
    },
    async fetchData(ids) {
      const responses = await Promise.all(
        ids.map((id) => window.fetch(`${api}/${id}`))
      );
      const json = await Promise.all(responses.map((data) => data.json()));
      return json.map((datum) => ({
        id: datum.id,
        name: datum.name,
        sprite: datum.sprites.other["official-artwork"].front_default,
        types: datum.types.map((type) => type.type.name),
      }));
    },
  },
};
</script>
<template>
  <InputComponent
    name="Username"
    :rules="{ required: true, min: 5 }"
    :value="username.value"
    type="text"
    @update="update"
  />

  <InputComponent
    name="Password"
    :rules="{ required: true, min: 10 }"
    :value="password.value"
    type="password"
    @update="update"
  />
  <MyButton background="darkslateblue" color="white" :disabled="valid" />
  <br />
  <pokemons-card
    :pokemons="pokemons"
    :selectedId="selectedId"
    @chosen="fetchEvolutions"
  ></pokemons-card>
  <pokemons-card :pokemons="evolutions"></pokemons-card>
</template>

<style>
.cards {
  display: flex;
}
.card {
  border: 1px solid silver;
  border-radius: 8px;
  max-width: 200px;
  margin: 0 5px;
  cursor: pointer;
  box-shadow: 0px 1px 3px darkgrey;
  transition: 0.2s;
}
.title,
.content,
.description {
  padding: 16px;
  text-transform: capitalize;
  text-align: center;
}
.title,
.content {
  border-bottom: 1px solid silver;
}
.title {
  font-size: 1.25em;
}
.card:hover {
  transition: 0.2s;
  box-shadow: 0px 1px 9px darkgrey;
}
img {
  width: 100%;
}
</style>
