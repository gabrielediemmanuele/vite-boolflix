<script>
//component
import Card from "./Card.vue";

//store
import { store } from "../data/store";

//export
export default {
  data() {
    return {
      //collegamento allo store necessario
      //per inviare info alla props
      store,
    };
  },

  components: {
    Card,
  },
};
</script>

<template>
  <div class="card-container">
    <!--* movies container -->
    <div class="container">
      <div><h1>MOVIES</h1></div>
      <hr />
      <div class="row g-3">
        <Card
          v-for="(movies, index) in store.filteredMovies"
          :key="index"
          :movieCard="movies"
        ></Card>
      </div>
    </div>

    <!--* tv series container  -->
    <div class="container">
      <div><h1>TV SERIES</h1></div>
      <hr />
      <div class="row g-3">
        <Card
          v-for="(tvSeries, index) in store.filteredTvSeries"
          :key="index"
          :tvSeriesCard="tvSeries"
        ></Card>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card-container {
  padding-top: 10px;
  color: white;
  .container {
    width: 100%;
    margin-top: 70px;
  }
}
</style>
