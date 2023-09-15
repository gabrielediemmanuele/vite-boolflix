<script>
//component
import Card from "./Card.vue";

//store
import { store } from "../data/store";

//export
export default {
  data() {
    return {
      store,
    };
  },

  components: {
    Card,
  },
};
</script>

<template>
  <!--* Col ciclo v-for generiamo tutti i 
    film presenti dentro l'array generato -->
  <div class="risultato">
    <ul>
      <li v-for="movies in store.filteredMovies" :key="id">
        <div>Titolo: {{ movies.title }}</div>
        <div>Titolo Originale: {{ movies.original_title }}</div>
        <div>Lingua: {{ movies.language }}</div>
        <div>Voto: {{ movies.vote }}</div>
      </li>
    </ul>
  </div>
  <!-- <Card></Card> -->
</template>

<style lang="scss" scoped></style>
