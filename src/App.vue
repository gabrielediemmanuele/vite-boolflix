<!--todo 1d1fd003d3798bdc399e491c87adb22f api_key -->
<script>
import AppHeader from "./components/AppHeader.vue";
// import MyComponent from "./components/MyComponent.vue";

export default {
  data() {
    return {
      title: "Hello world",
    };
  },

  components: {
    AppHeader,
  },
};
</script>

<template>
  <h1>{{ title }}</h1>
  <AppHeader></AppHeader>
</template>

<style lang="scss" scoped></style>
