<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import ProductPage from "./pages/ProductPage.vue";
export default {
  name: "App",
  components: {
    // ProductPage,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300&family=Philosopher:wght@700&family=Poppins:ital,wght@0,100;0,300;0,400;0,500;0,800;1,100&family=Roboto&display=swap");
body {
  margin: 0;
  font-family: "Poppins", sans-serif;
}
a {
  text-decoration: none !important;
}
@media (min-width: 768px) {
  .mb-md-8,
  .my-md-8 {
    margin-bottom: 3.125rem !important;
  }
}
.container_block {
    padding-left: 24px !important;
    padding-right: 24px !important;
  }
@media (min-width: 576px) {
  .container_block {
    max-width: 540px !important;
    margin: 0 auto !important;
    padding-left: 24px !important;
    padding-right: 24px !important;
  }
}
@media (min-width: 768px) {
  .container_block {
    max-width: 720px !important;
    margin: 0 auto !important;
  }
}
@media (min-width: 992px) {
  .container_block {
    max-width: 960px !important;
    margin: 0 auto !important;
  }
}
@media (min-width: 1200px) {
  .container_block {
    max-width: 1200px !important;
    margin: 0 auto !important;
  }
}
@media (min-width: 1400px) {
  .container_block {
    max-width: 1390px !important;
    margin: 0 auto !important;
  }
}
.container-shop {
    padding-left: 24px !important;
    padding-right: 24px !important;
  }
@media (min-width: 576px) {
  .container-shop {
    max-width: 540px !important;
    margin: 0 auto !important;
  }
}
@media (min-width: 768px) {
  .container-shop {
    max-width: 720px !important;
    margin: 0 auto !important;
  }
}
@media (min-width: 992px) {
  .container-shop {
    max-width: 960px !important;
    margin: 0 auto !important;
  }
}
@media (min-width: 1200px) {
  .container-shop {
    max-width: 1200px !important;
    margin: 0 auto !important;
  }
}

.shop_now_btn {
  border: 1px solid #000 !important;
  border-radius: 0 !important;
  color: #000 !important;
  font-weight: 700 !important;
  padding: 0.625rem 1.875rem !important;
  margin-top: 20px;
  transition: .3s !important;
}
.shop_now_btn:hover {
  border: 1px solid #000 !important;
  background-color: black !important;
  color: #fff !important;
}
.text-muted {
  color: #999 !important;
}
#icon-container {
  background: #fff !important;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
}
#icon-arrow-up {
  color: #000 !important;
}
.color-gray {
  color: #777 !important;
  font-family: "Poppins", sans-serif;
}
#icon-container {
  z-index: 2000 !important;
}
</style>
