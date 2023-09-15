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
  <!--todo  ciclo v-for per generare le card tramite la prop :movieCard -->
  <Card
    v-for="(movies, index) in store.filteredMovies"
    :key="index"
    :movieCard="movies"
  ></Card>
  <hr />
  <div>TV SERIES</div>
  <Card
    v-for="(tvSeries, index) in store.filteredTvSeries"
    :key="index"
    :tvSeriesCard="tvSeries"
  ></Card>
</template>

<style lang="scss" scoped></style>
