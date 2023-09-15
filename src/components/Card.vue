<script>
export default {
  data() {
    return {
      //return
    };
  },
  //props che riceve dal genitore (CardsContainer), le info dallo store
  props: {
    movieCard: Object,
  },
};
</script>

<template>
  <!--* la lista riceve info dal genitore tramite la prop quindi -->
  <!--* si cambia la key col nome della prop -->
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
