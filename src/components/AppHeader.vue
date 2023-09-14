<script>
// import MyComponent from "./components/MyComponent.vue";

export default {
  data() {
    return {
      title: "Hello world",
    };
  },

  // components: {
  //   MyComponent,
  // },
};
</script>

<template>
  <header>
    <div
      class="container d-flex justify-content-between align-items-center p-2"
    >
      <div class="text-danger h2">BOOLFLIX</div>
      <div class="input-group d-flex">
        <input
          type="text"
          class="form-control"
          placeholder="Cerca film o serie tv.."
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
        />
        <button
          class="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
        >
          Button
        </button>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  background-color: rgba(0, 0, 0, 0.7);
}
.container {
  .input-group {
    width: 250px;
  }
}
</style>
