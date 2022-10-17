<template lang="html">
  <div class="comment-card">
    <div class="d-flex">
      <div class="col-1">
        <div class="comment-avatar">
          <img src="../../public/images/tes_01.png" alt="" />
        </div>
      </div>
      <div class="col-11 comments-card-body">
        <div class="comments-card-reyting d-flex justify-content-between">
          <div class="comments_star_box">
            <font-awesome-icon class="com_star" icon="fa-solid fa-star" />
            <font-awesome-icon class="com_star" icon="fa-solid fa-star" />
            <font-awesome-icon class="com_star" icon="fa-solid fa-star" />
            <font-awesome-icon class="com_star" icon="fa-solid fa-star" />
            <font-awesome-icon class="com_star" icon="fa-solid fa-star" />
          </div>
          <div class="comment-date">
            <p>Nov 20, 2020</p>
          </div>
        </div>
        <div class="comments-card-text">
          <p>
            It has a really nice fit however it loses many fluffs and is kind of
            see-through because the fabric is quite wid-meshed. Nevertheless
            it's a really good and comfy staple that goes with every kind
          </p>
        </div>
        <div class="comments-card-name">
          <span>Dean. D</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="css">
.comment-card {
  border-bottom: 1px solid #e4e4e4 !important;
  padding-bottom: 1.875rem!important;
  margin-bottom: 1.875rem!important;
}
.com_star {
  font-size: 12px !important;
  margin-right: 2px;
}
.comment-avatar {
  max-width: 70px;
}
.comment-avatar img {
  width: 100%;
}
.comments-card-body {
  padding-left: 30px;
}
.comments-card-text p {
    color: #666!important;
    line-height: 1.75!important;
    margin-bottom: 0.625rem!important;
    font-family: "Poppins",sans-serif;
}
.comments-card-name span {
    font-weight: 600!important;
    color: #000!important;
    font-family: "Poppins",sans-serif;
    font-size: 1rem;
}
</style>
