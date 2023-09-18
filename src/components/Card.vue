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

  //Computed (si usa senza valore) - per generare le copertine (anche quelle null).
  computed: {
    moviePoster() {
      if (!this.movieCard.moviesPoster) return "../../public/img/125492.jpg";
      return `${this.imgBaseUrl}${this.movieCard.moviesPoster}`;
    },
    tvSeriePoster() {
      if (!this.tvSeriesCard.tvSeriesPoster)
        return "../../public/img/125492.jpg";
      return `${this.imgBaseUrl}${this.tvSeriesCard.tvSeriesPoster}`;
    },
  },
};
</script>

<template>
  <!--* la lista riceve info dal genitore tramite la prop quindi -->
  <!--* si cambia la key col nome della prop -->
  <div v-if="movieCard" class="risultato">
    <ul>
      <li>
        <img :src="moviePoster" :alt="movieCard.title" />
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
        <div>
          <span>Vote: </span>
          <span v-for="star in movieCard.vote" :key="star">
            <font-awesome-icon
              icon="fa-solid fa-star"
              size="sm"
              style="color: #ffd500"
            />
          </span>
          <span v-for="star in 5 - movieCard.vote" :key="star">
            <font-awesome-icon
              icon="fa-regular fa-star"
              size="sm"
              style="color: #ffd500"
            />
          </span>
        </div>
        <!-- <div>Voto: {{ movieCard.vote }}</div> -->
        <!-- <font-awesome-icon :icon="['fas', 'star']" size="lg" style="color: #ffea00;" /> -->
      </li>
    </ul>
  </div>
  <div v-if="tvSeriesCard" class="risultato">
    <ul>
      <li>
        <img :src="tvSeriePoster" :alt="tvSeriesCard.name" />
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
        <div>
          <span>Vote: </span>
          <span v-for="star in tvSeriesCard.vote" :key="star">
            <font-awesome-icon
              icon="fa-solid fa-star"
              size="sm"
              style="color: #ffd500"
            />
          </span>
          <span v-for="star in 5 - tvSeriesCard.vote" :key="star">
            <font-awesome-icon
              icon="fa-regular fa-star"
              size="sm"
              style="color: #ffd500"
            />
          </span>
          <!-- &#9734; -->
        </div>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.lang-flag {
  width: 25px;
}
</style>
