<!--todo 1d1fd003d3798bdc399e491c87adb22f api_key -->
<script>
/* COMPONENTS import  */
import AppHeader from "./components/AppHeader.vue";

//AXIOS
import axios from "axios";

export default {
  data() {
    return {
      movieAPI: "https://api.themoviedb.org/3/search/movie?query=",
      tvSeriesAPI: "https://api.themoviedb.org/3/search/tv?query=",
      api_key: "&api_key=1d1fd003d3798bdc399e491c87adb22f",
      title: "Hello world",
    };
  },
  //Components
  components: {
    AppHeader,
  },

  //Methods
  methods: {
    getMovie() {
      axios.get(movieAPI).then((response) => {});
    },
  },
};
</script>

<template>
  <AppHeader></AppHeader>
</template>

<style lang="scss" scoped></style>
