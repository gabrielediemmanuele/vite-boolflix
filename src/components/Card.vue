<script>
// import MyComponent from "./components/MyComponent.vue";

export default {
  data() {
    return {
      title: "Hello world",
    };
  },

  props: {
    movieCard: Object,
  },
  // components: {
  //   MyComponent,
  // },
};
</script>

<template>
  <!--* Col ciclo v-for generiamo tutti i 
    film presenti dentro l'array generato -->
  <div class="risultato">
    <ul>
      <li>
        <div>Titolo: {{ movieCard.title }}</div>
        <div>Titolo Originale: {{ movieCard.original_title }}</div>
        <div>Lingua: {{ movieCard.language }}</div>
        <div>Voto: {{ movieCard.vote }}</div>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped></style>
