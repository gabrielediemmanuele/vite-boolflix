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
    v-for="movies in store.filteredMovies"
    :key="id"
    :movieCard="movies"
  ></Card>
</template>

<style lang="scss" scoped></style>
