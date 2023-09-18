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

  methods: {
    // metodo (per i film)
    getMovie(query) {
      let movieUrl = `${this.movieApi}${query}${this.api_key}`;
      axios.get(movieUrl).then((response) => {
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
            vote: Math.ceil(vote_average / 2),
            moviesPoster: poster_path,
          };
        });
        console.log(this.store.filteredMovies);
      });
    },
    // metodo per le serie tv
    getTvSeries(query) {
      let tvSeries = `${this.tvSeriesApi}${query}${this.api_key}`;
      console.log(tvSeries);
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
            vote: Math.ceil(vote_average / 2),
            tvSeriesPoster: poster_path,
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

  created() {},
};
</script>

<template>
  <AppHeader @re-search="getLists"></AppHeader>
  <AppMain> </AppMain>
</template>

<style lang="scss" scoped>
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
