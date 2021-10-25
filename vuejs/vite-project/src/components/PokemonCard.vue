<template>
  <div class="cards">
    <CardComponent
      v-for="pokemon in pokemons"
      :key="pokemon.id"
      :pokemon="pokemon"
      @click="click(pokemon)"
      :class="{ opace: selectedId && pokemon.id !== selectedId }"
      class="card"
    >
      <template v-slot:title>{{ pokemon.name }}</template>
      <template v-slot:content><img :src="pokemon.sprite" /></template>
      <template v-slot:description>
        <div v-for="type in pokemon.types" :key="type">
          {{ type }}
        </div>
      </template>
    </CardComponent>
  </div>
</template>

<script>
import CardComponent from "./Card.vue";
export default {
  components: { CardComponent },
  props: {
    pokemons: {
      type: Array,
      default: [],
    },
    selectedId: {
      type: Number,
    },
  },
  methods: {
    click(pokemon) {
      this.$emit("chosen", pokemon);
    },
  },
};
</script>

<style scoped></style>
