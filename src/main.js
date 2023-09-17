import { createApp } from "vue";
import App from "./App.vue";

/* Bootstrap */
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

/* font awesome */
import { library } from "@fortawesome/fontawesome-svg-core";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
library.add(faStarSolid, faStarRegular);

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
