<template lang="">
  <div>
    <v-scroll-to-top></v-scroll-to-top>
    <NavbarComp />
    <BreadCrumbComp />
    <ProductPageBody />
    <TitleMayYouLikeThis title="May You Like This"/>
    <div class="container containe-xxl mb-120">
      <div class="row py-5">
        <div class="col-12">
          <CardCarousel />
        </div>
      </div>
    </div>
    <FooterComp />
  </div>
</template>
<script>
import NavbarComp from "../components/NavbarComp.vue";
import FooterComp from "../components/FooterComp.vue";
import BreadCrumbComp from "../components/BreadCrumbComp.vue"
import ProductPageBody from "../components/ProductPageBody.vue";
import TitleMayYouLikeThis from "../components/TitleMayYouLikeThis.vue";

import CardCarousel from "../components/CardCarousel.vue"
export default {
  components: {
    NavbarComp,
    FooterComp,
    BreadCrumbComp,
    ProductPageBody,
    TitleMayYouLikeThis,
   
    CardCarousel
  },
};
</script>
<style lang="css">

.grid-container {
  display: grid;
  grid-template-columns: auto;
  grid-gap: 30px;
}
.w_sh_card {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;
}
@media (min-width: 576px) {
  .grid-container {
    grid-template-columns: auto auto;
  }
}
@media (min-width: 768px) {
  .grid-container {
    grid-template-columns: auto auto;
  }
}
@media (min-width: 1200px) {
  .grid-container {
    grid-template-columns: auto auto auto auto;
  }
}
.mb-120 {
  margin-bottom: 120px ;
}
</style>
