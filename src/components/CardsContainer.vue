<script>
//component
import Card from "./Card.vue";

//store
import { store } from "../data/store";

//export
export default {
  data() {
    return {
      store,
    };
  },

  components: {
    Card,
  },
};
</script>

<template>
  <Card
    v-for="movies in store.filteredMovies"
    :key="id"
    :movieCard="movies"
  ></Card>
</template>

<style lang="scss" scoped></style>
