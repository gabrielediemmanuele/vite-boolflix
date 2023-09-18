<script>
import CardsContainer from "./CardsContainer.vue";

export default {
  data() {
    return {};
  },

  components: {
    CardsContainer,
  },
};
</script>

<template>
  <div class="main-container">
    <!--todo semplice collegamento con cards container  -->
    <CardsContainer></CardsContainer>
  </div>
</template>

<style lang="scss" scoped>
.main-container {
  width: 100%;
  background-color: rgb(28, 28, 28);
  margin-top: 60px;
  padding-bottom: 50px;
}
</style>
