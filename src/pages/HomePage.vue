<template lang="html">
  <div>
    <v-scroll-to-top></v-scroll-to-top>
    <NavbarComp />
    <BannerComp />
    <CardBox />
    <TitleMayYouLikeThis title="Our Journal"/>
    <JournalComp /> 
    <ContactCardBox />
    <FooterComp />
  </div>
</template>
<script>
import BannerComp from "../components/BannerComp.vue";
import CardBox from "../components/CardBox.vue";
import FooterComp from "../components/FooterComp.vue";
import NavbarComp from "../components/NavbarComp.vue";
import JournalComp from "../components/JournalComp.vue"
import TitleMayYouLikeThis from "../components/TitleMayYouLikeThis.vue";
import ContactCardBox from "../components/ContactCardBox.vue"
export default {
  components: {
    BannerComp,
    CardBox,
    FooterComp,
    NavbarComp,
    JournalComp,
    TitleMayYouLikeThis,
    ContactCardBox
  },
};
</script>
<style lang="css"></style>
