<script>
export default {
  data() {
    return {
      // creo un array con stringhe della lingua
      languages: ["it", "en", "es", "fr", "de"],
      imgBaseUrl: "https://image.tmdb.org/t/p/w342",
    };
  },
  //props che riceve dal genitore (CardsContainer), le info dallo store
  props: {
    movieCard: Object,
    tvSeriesCard: Object,
  },
};
</script>

<template>
  <!--* la lista riceve info dal genitore tramite la prop quindi -->
  <!--* si cambia la key col nome della prop -->
  <div v-if="movieCard" class="risultato">
    <ul>
      <li>
        <img
          :src="imgBaseUrl + movieCard.moviesPoster"
          :alt="movieCard.title"
        />
        <div>Titolo: {{ movieCard.title }}</div>
        <div>Titolo Originale: {{ movieCard.original_title }}</div>
        <!--! condizioni per generare le bandiere...  -->
        <div>
          Lingua: {{ movieCard.language }}
          <img
            class="lang-flag"
            v-if="languages.includes(movieCard.language)"
            :src="'../../public/flags/' + movieCard.language + '.png'"
            :alt="language"
          />
          <img
            v-else
            class="lang-flag"
            :src="'../../public/flags/xx.png'"
            :alt="language"
          />
        </div>
        <div>Voto: {{ movieCard.vote }}</div>
      </li>
    </ul>
  </div>
  <div v-if="tvSeriesCard" class="risultato">
    <ul>
      <li>
        <img
          :src="imgBaseUrl + tvSeriesCard.tvSeriesPoster"
          :alt="tvSeriesCard.name"
        />
        <div>Titolo: {{ tvSeriesCard.name }}</div>
        <div>Titolo Originale: {{ tvSeriesCard.original_name }}</div>
        <!--! condizioni per generare le bandiere...  -->
        <div>
          Lingua: {{ tvSeriesCard.language }}
          <img
            class="lang-flag"
            v-if="languages.includes(tvSeriesCard.language)"
            :src="'../../public/flags/' + tvSeriesCard.language + '.png'"
            :alt="language"
          />
          <img
            v-else
            class="lang-flag"
            :src="'../../public/flags/xx.png'"
            :alt="language"
          />
        </div>
        <div>Voto: {{ tvSeriesCard.vote }}</div>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.lang-flag {
  width: 25px;
}
</style>
