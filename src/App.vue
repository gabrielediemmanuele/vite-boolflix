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
      //filtereds (dentro lo store vedi store.js)
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
    //NOTA - query viene tramandato tramite emit da AppHeader.
    //nome del metodo (per i film)
    getMovie(query) {
      //creo una variabile che racchiuda l'url dei film
      let movieUrl = `${this.movieApi}${query}${this.api_key}`;
      //con axios col get prendo la variabile e col response la risposta dell'url
      axios.get(movieUrl).then((response) => {
        //asseggno all'array filteredTvSeries dichiarato in data, il risultato
        // mi avvalgo di usare .map per creare un nuovo "array" cono solo i contenuti che mi
        //servono e posso anche aggiungerene, in caso di bisogno.
        this.store.filteredMovies = response.data.results.map((movie) => {
          const {
            id,
            title,
            original_title,
            original_language,
            vote_average,
            poster_path,
          } = movie;
          return {
            id,
            title: title,
            original_title,
            language: original_language,
            vote: vote_average,
            moviesPoster: poster_path,
            //vote: Math.ceil(vote_average / 2),
          };
        });
        console.log(this.store.filteredMovies);
      });
    },
    //per le serie tv
    getTvSeries(query) {
      //variabile serie tv
      let tvSeries = `${this.tvSeriesApi}${query}${this.api_key}`;
      console.log(tvSeries);
      //con axios col get prendo la variabile e col response la risposta dell'url
      axios.get(tvSeries).then((response) => {
        this.store.filteredTvSeries = response.data.results.map((tvSerie) => {
          const {
            id,
            name,
            original_name,
            original_language,
            vote_average,
            poster_path,
          } = tvSerie;
          return {
            id,
            name: name,
            original_name,
            language: original_language,
            vote: vote_average,
            tvSeriesPoster: poster_path,
            //vote: Math.ceil(vote_average / 2),
          };
        });
        console.log(this.store.filteredTvSeries);
      });
    },
    getLists(query) {
      this.getMovie(query);
      this.getTvSeries(query);
    },
  },
  // in realtà, la chiamata axios va _creata_
  //ma invece  creiamo un metodo versatile e su created richiamiamo
  //il nome del metodo cosi che venga "creato".
  created() {},
};
</script>

<template>
  <!--* AppHeader si collega al suo Emit per dire nei methods a 
  getMovie di ricevere sia l'evento di ricerca
  che il contenuto "query"  -->
  <AppHeader @re-search="getLists"></AppHeader>
  <AppMain> </AppMain>
</template>

<style lang="scss" scoped></style>
