<script>
//axios
import axios from "axios";

export default {
  data() {
    return {
      //url fragments
      movieApi: "https://api.themoviedb.org/3/search/movie?query=",
      tvSeriesApi: "https://api.themoviedb.org/3/search/tv?query=",
      api_key: "&api_key=1d1fd003d3798bdc399e491c87adb22f",
      query: "",
      //filtereds
      filteredMovies: {},
      filteredTvSeries: {},
    };
  },

  // components: {
  //   MyComponent,
  // },

  //Methods
  methods: {
    getMovie() {
      let movieUrl = `${this.movieApi}${this.query}${this.api_key}`;
      axios.get(movieUrl).then((response) => {
        this.filteredMovies = response.data.results;
        console.log(response.data.results);
      });
    },
  },
  created() {
    this.getMovie();
  },
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
        <input
          type="text"
          class="form-control"
          placeholder="Cerca film o serie tv.."
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
          v-model="query"
        />
        <button
          class="btn btn-outline-secondary bg-danger text-light"
          type="button"
          id="button-addon2"
          @click="getMovie()"
        >
          Button
        </button>
      </div>
    </div>
  </header>
  <div class="risultato">
    <ul>
      <li v-for="movies in filteredMovies" :key="id">
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
