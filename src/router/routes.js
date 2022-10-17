import HomePage from "../pages/HomePage.vue";
import ProductPage from "../pages/ProductPage"
export default [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/product-page",
    name: "ProductPage",
    component: ProductPage,
  }
];