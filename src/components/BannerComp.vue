<template lang="html">
  <div>
    <div
      class="banner_comp d-flex flex-column justify-content-center bg-img-cover-center vh-100 custom-height-sm"
    >
      <div class="d-flex flex-column h-100 justify-content-center">
        <div class="container_block container-xxl">
          <div>
            <p
              class="newIn"
              data-animate="fadeInUp"
              data-aos="fade-up"
              data-aos-offset="100"
              data-aos-delay="200"
              data-aos-duration="800"
            >
              New - In
            </p>
            <h1
              class="mb-4 mb-md-8 fs-60 fs-xxl-120 heading-home-01 lh-113"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-offset="100"
              data-aos-duration="900"
            >
              <strong
                class="d-block title_banner fadeInUp animated"
                data-animate="fadeInUp"
                >Sundae</strong
              >
              <strong
                class="d-block title_banner fadeInUp animated"
                data-animate="fadeUp"
                >Lounges</strong
              >
            </h1>
            <a
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="800"

              href="shop-page-02.html"
              class="btn btn-outline-primary text-uppercase shop_now_btn"
              data-animate="fadeInUp"
              tabindex="0"
              >Shop Now</a
            >
          </div>
        </div>
      </div>
      <div class="mt-auto">
        <div class="container_block container-xxl">
          <div>
            <p class="design-by-p">
              Designed by
              <span class="design-by-span"
                >Nicholas Karlovasitis &amp; Sarah Gibson</span
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  components: {
   
  },
};
</script>
<style lang="css">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300&family=Philosopher:wght@700&family=Poppins:ital,wght@0,100;0,300;0,400;0,500;0,800;1,100&family=Roboto&display=swap');
.banner_comp {
  background-image: url("../assets/bg-home-01.jpg");
  background-position: center top;
  background-size: cover;
  background-repeat: no-repeat;
  max-height: 1200px;
}
.newIn {
  font-weight: 700;
  font-size: 24px;
  line-height: 1.63;
  font-family: "Poppins", sans-serif;
  color: #000;
  margin-bottom: 30px;
}
.title_banner {
  font-size: 60px !important;
  font-weight: 800 !important;
  font-family: "Poppins", sans-serif;
  color: #000;
}
.shop_now_btn {
  border: 1px solid #000 !important;
  border-radius: 0 !important;
  color: #000;
  font-weight: 700 !important;
  padding: 0.625rem 1.875rem !important;
  margin-top: 20px;
}
.shop_now_btn:hover {
  border: 1px solid #000 !important;
  background-color: black !important;
  color: #fff !important;
}
.design-by-span {
  font-weight: 600 !important;
}
.design-by-p {
  margin-bottom: 3.125rem !important;
}
@media (max-width: 991.98px) {
  .custom-height-sm {
    height: 600px !important;
  }
}
</style>
