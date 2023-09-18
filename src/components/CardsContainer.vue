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
    <div class="container d-flex">
      <div class="row">
        <div class="col">
          <Card
            v-for="(movies, index) in store.filteredMovies"
            :key="index"
            :movieCard="movies"
          ></Card>
        </div>
      </div>
    </div>
    <!--* tv series container  -->
    <div class="container">
      <h2>Tv Series</h2>
      <div class="row">
        <div class="col">
          <Card
            v-for="(tvSeries, index) in store.filteredTvSeries"
            :key="index"
            :tvSeriesCard="tvSeries"
          ></Card>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card-container {
  padding-top: 90px;
  color: white;
  .container {
    display: flex;
  }
}
</style>
