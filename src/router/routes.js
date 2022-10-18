import HomePage from "../pages/HomePage.vue";
import ProductPage from "../pages/ProductPage"
import ShopPage from "../pages/ShopPage"
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
  },
  {
    path: "/shop-page",
    name: "ShopPage",
    component: ShopPage,
  }
];