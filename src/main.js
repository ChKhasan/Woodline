import ElementUI from "element-ui";
import Vue from "vue";
import App from "./App.vue";
import { Button } from "element-ui";
import VueAos from "vue-aos";
import "bootstrap/dist/css/bootstrap.min.css";
import Aos from "aos";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUserSecret,
  faMagnifyingGlass,
  faShoppingBasket,
  faShuffle,
  faStar,
  faPlus,
  faMinus,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";
import router from './router'
import { faEye, faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faPinterestP,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import VScrollToTop from 'v-scroll-to-top'
import VueCarousel from 'vue-carousel';
 
Vue.use(VueCarousel);

 
Vue.use(VScrollToTop)

// import 'ant-design-vue/dist/antd.css';

library.add(
  faUserSecret,
  faMagnifyingGlass,
  faUser,
  faShoppingBasket,
  faShuffle,
  faHeart,
  faPinterestP,
  faFacebookF,
  faInstagram,
  faTwitter,
  faStar,
  faPlus,
  faMinus,
  faTruckFast,
  faEye
);
Vue.component("font-awesome-icon", FontAwesomeIcon);
Aos.init();

Vue.use(VueAos);
Vue.use(ElementUI);
Vue.component(Button.name, Button);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router
}).$mount("#app");
