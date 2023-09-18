<script>
export default {
  data() {
    return {
      query: "",
    };
  },
  //REGISTRARE L'EMIT: RIGA 37 E RIGA 46
  emits: ["re-search"],
};
</script>

<template>
  <!--  header  -->
  <header>
    <!-- bootstrap container  -->
    <div
      class="container d-flex justify-content-between align-items-center p-2"
    >
      <!-- App logo  & nav menu -->
      <div class="d-flex text-danger h1 m-0 p-0">
        BOOLFLIX
        <!-- nav list-->
        <ul
          class="d-flex justify-content-between align-items-center text-light mx-3"
        >
          <li>Home</li>
          <li>Serie Tv</li>
          <li>Film</li>
          <li>Nuovi e Popolari</li>
          <li>La mia Lista</li>
          <li>Sfoglia per lingua</li>
        </ul>
      </div>
      <!-- INPUT CONTAINER TEXT AND BUTTON  -->
      <div class="input-group d-flex align-items-center">
        <!--  Input -->
        <input
          type="text"
          class="form-control"
          placeholder="Cerca film o serie tv.."
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
          v-model="query"
          v-on:keyup.enter="$emit('re-search', query)"
        />
        <!-- Button -->
        <button
          @click="$emit('re-search', query)"
          class="btn bg-danger text-light"
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
  background-color: rgb(28, 28, 28);
  box-shadow: 1px 1px 6px 4px black;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
}
.container {
  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
    font-size: 12px;
    li {
      margin: 0 5px 0 5px;
      font-weight: bold;
    }
    li:hover {
      text-decoration: underline;
      color: #dc3545;
    }
  }
  .input-group {
    width: 280px;
    span {
      margin-right: 15px;
    }
    #button-addon2:hover {
      color: black !important;
    }
  }
}
</style>
