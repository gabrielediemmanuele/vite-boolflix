<script>
//axios
/* import axios from "axios"; */
import { store } from "../data/store";
export default {
  data() {
    return {
      //il query, rappresenta la parola filtrata nell'input.
      query: "",
      store,
    };
  },
  //REGISTRARE L'EMIT: RIGA 37 E RIGA 46
  emits: ["re-search"],
};
</script>

<template>
  <!--  header  -->
  <header>
    <!-- bootstrap container  -->
    <div
      class="container d-flex justify-content-between align-items-center p-2"
    >
      <!-- APP TITLE  -->
      <div class="text-danger h2">BOOLFLIX</div>
      <!--    INPUT CONTAINER TEXT AND BUTTON  -->
      <div class="input-group d-flex">
        <!-- qui richiamiamo con v-model ciò che verrà scritto.  -->
        <!-- il keyup invece serve per ottenere il risultato anche premendo "enter" -->
        <input
          type="text"
          class="form-control"
          placeholder="Cerca film o serie tv.."
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
          v-model="query"
          v-on:keyup.enter="$emit('re-search', query)"
        />

        <!--todo NOTA BENE: se fosse stato un Form, si poteva utilizzare 
        @submit.prevent per evitare il reset della pagina all'invio delle
        informazioni  -->

        <!--  al bottone invece otteniamo il getMovie col click  -->
        <button
          @click="$emit('re-search', query)"
          class="btn btn-outline-secondary bg-danger text-light"
          type="button"
          id="button-addon2"
        >
          Button
        </button>
      </div>
    </div>
  </header>
  <!--* Col ciclo v-for generiamo tutti i 
    film presenti dentro l'array generato -->
  <div class="risultato">
    <ul>
      <li v-for="movies in store.filteredMovies" :key="id">
        <div>Titolo: {{ movies.title }}</div>
        <div>Titolo Originale: {{ movies.original_title }}</div>
        <div>Lingua: {{ movies.original_language }}</div>
        <div>Voto: {{ movies.vote_average }}</div>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
header {
  background-color: rgba(0, 0, 0, 0.7);
}
.container {
  .input-group {
    width: 280px;
  }
}
</style>
