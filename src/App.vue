<!--todo 1d1fd003d3798bdc399e491c87adb22f api_key -->
<script>
/* COMPONENTS import  */
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";

//AXIOS
import axios from "axios";

//STORE
import { store } from "../src/data/store";

export default {
  data() {
    return {
      //url fragments
      movieApi: "https://api.themoviedb.org/3/search/movie?query=",
      tvSeriesApi: "https://api.themoviedb.org/3/search/tv?query=",
      api_key: "&api_key=1d1fd003d3798bdc399e491c87adb22f",
      //filtereds
      store,
    };
  },
  //Components
  components: {
    AppHeader,
    AppMain,
  },
  //Methods
  methods: {
    //nome del metodo
    //NOTA - query viene tramandato tramite emit da AppHeader.
    getMovie(query) {
      //creo una variabile che racchiuda l'url dei film
      let movieUrl = `${this.movieApi}${query}${this.api_key}`;
      //con axios col get prendo la variabile e col response la risposta dell'url
      axios.get(movieUrl).then((response) => {
        //asseggno all'array filteredMovies dichiarato in data, il risultato
        this.store.filteredMovies = response.data.results;
        console.log(response.data.results);
      });
    },
  },
  // in realtà, la chiamata axios va _creata_
  //ma invece  creiamo un metodo versatile e su created richiamiamo
  //il nome del metodo cosi che venga "creato".
  created() {
    this.getMovie();
  },
};
</script>

<template>
  <!--* AppHeader si collega al suo Emit per dire nei methods a 
  getMovie di ricevere sia l'evento di ricerca
  che il contenuto "query"  -->
  <AppHeader @re-search="getMovie"></AppHeader>
  <AppMain> </AppMain>
</template>

<style lang="scss" scoped></style>
