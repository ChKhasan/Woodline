<template lang="html">
  <div class="comments-comp mxw-830 py-3">
    <div
      class="d-flex comments-comp-reyt flex-column align-items-center flex-wrap"
    >
      <div class="reting_star_box pb-3">
        <font-awesome-icon class="comments-star" icon="fa-solid fa-star" />
        <font-awesome-icon class="comments-star" icon="fa-solid fa-star" />
        <font-awesome-icon class="comments-star" icon="fa-solid fa-star" />
        <font-awesome-icon class="comments-star" icon="fa-solid fa-star" />
        <font-awesome-icon class="comments-star" icon="fa-solid fa-star" />
      </div>
      <p class="mb-0 fs-15 lh-1 overflow-hidden see_reviews">
        <span class="pr-1 mr-1 border-right">5.0</span
        ><a href="#">Base on 3 Reviews</a>
      </p>
    </div>
    <CommentsCard />
    <CommentsCard />
    <CommentsCard />
    <CommentsCard />
    <div class="d-flex justify-content-center my-5">
      <a
        class="btn btn-outline-primary text-uppercase shop_now_btn"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="800"
        >Shop Now</a
      >
    </div>
  </div>
</template>
<script>
import CommentsCard from "../smallComponents/CommentsCard.vue";
export default {
  components: {
    CommentsCard,
  },
};
</script>
<style lang="css">
.comments-comp-reyt {
  margin-bottom: 60px;
}
.comments-star {
    font-size: 18px;
    margin-left: 2px !important;
}
</style>
