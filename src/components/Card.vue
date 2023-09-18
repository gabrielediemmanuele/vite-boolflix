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
  <!--todo MOVIE  -->
  <div v-if="movieCard" class="Product-card">
    <!-- CARD IMAGE  -->
    <img class="cover" :src="moviePoster" :alt="movieCard.title" />
    <!-- CARD INFO  -->
    <div class="card-info">
      <div>Titolo: {{ movieCard.title }}</div>
      <div>Titolo Originale: {{ movieCard.original_title }}</div>
      <!-- Language -->
      <div class="Language">
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
      <!-- Vote -->
      <div class="vote">
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
    </div>
  </div>

  <!--todo Tv Series -->
  <div v-if="tvSeriesCard" class="Product-card">
    <img class="cover" :src="tvSeriePoster" :alt="tvSeriesCard.name" />
    <div class="card-info">
      <div>Titolo: {{ tvSeriesCard.name }}</div>
      <div>Titolo Originale: {{ tvSeriesCard.original_name }}</div>
      <!-- Language -->
      <div class="Language">
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
      <!-- Vote -->
      <div class="vote">
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
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.Product-card {
  width: 200px;
  color: white;
  position: relative;
  .cover {
    width: 100%;
    display: block;
  }
  .card-info {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: 0.5s ease;
    background-color: rgba(0, 0, 0, 0.8);
    padding: 15px;
  }
}
.Product-card:hover .card-info {
  opacity: 1;
}
.lang-flag {
  width: 25px;
}
</style>
