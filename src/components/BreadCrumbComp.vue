<template lang="">
  <div>
    <div class="container-fluid bg-color py-4 mt-70">
      <div class="container-shop container-xxl">
        <div class="row">
          <div class="col-md-8">
            <div class="bread_crumb_box">
              <router-link class="bread_crumb" to="/"> Home </router-link>
              <span>/</span>

              <a href="#" class="bread_crumb">Shop</a><span>/</span>
              <a href="#" class="last_crumb">Tuck Bar Stool</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="css">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300&family=Philosopher:wght@700&family=Poppins:ital,wght@0,100;0,300;0,400;0,500;0,800;1,100&family=Roboto&display=swap");
.bread_crumb_box span {
  padding-right: 1rem;
  padding-left: 1rem;
  font-size: 0.9375rem;
  font-family: "Poppins", sans-serif;
  color: #959595 !important;
}
.mt-70 {
  margin-top: 76px;
}
.bread_crumb {
  font-size: 0.9375rem;
  text-transform: capitalize;
  list-style: none;
  color: #959595 !important;
  font-weight: 500 !important;
  letter-spacing: 0;
  text-transform: capitalize;
  font-family: "Poppins", sans-serif;
}
.last_crumb {
  font-size: 0.9375rem;
  text-transform: capitalize;
  list-style: none;
  color: #000 !important;
  font-weight: 400 !important;
  letter-spacing: 0;
  text-transform: capitalize;
  font-family: "Poppins", sans-serif;
}
</style>
