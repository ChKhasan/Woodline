<template lang="html">
  <div>
    <NavbarComp />
    <BreadCrumbComp />
    <ShopPageBody />
    <FooterComp />
  </div>
</template>
<script>
import FooterComp from "../components/FooterComp.vue";
import NavbarComp from "../components/NavbarComp.vue";
import BreadCrumbComp from "../components/BreadCrumbComp.vue";
import ShopPageBody from "../components/ShopPageBody.vue";
export default {
  components: {
    FooterComp,
    NavbarComp,
    BreadCrumbComp,
    ShopPageBody
  },
};
</script>
<style lang="css"></style>
