<template lang="html">
  <div class="container-shop py-5">
    <div class="row pb-6">
      <div class="col-md-3">
        <div class="shop-sticky">
          <div class="filter-card">
            <div class="filter-card-title">
              <h3>Categories</h3>
            </div>
            <div class="filter-card-body">
              <ul class="f-card-list" style="padding-left: none">
                <li class="mb-1">
                  <a href="#" class="">Accessories</a>
                </li>
                <li class="mb-1">
                  <a href="#" class="">Chairs</a>
                </li>
                <li class="mb-1">
                  <a href="#" class="">Clock</a>
                </li>
                <li class="mb-1">
                  <a href="#" class="">Dining Tables</a>
                </li>
                <li class="mb-1">
                  <a href="#" class="">Lighting</a>
                </li>
                <li class="mb-1">
                  <a href="#" class="">Lounges &amp; Sofa</a>
                </li>
                <li class="mb-1">
                  <a href="#" class="">Stool</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="filter-card">
            <div class="filter-card-title">
              <h3>Price</h3>
            </div>
            <div class="filter-card-body">
              <ul class="f-card-list" style="padding-left: none">
                <li class="mb-1">
                  <a href="#" class="">All</a>
                </li>
                <li class="mb-1">
                  <a href="#" class="">$10 - $100</a>
                </li>
                <li class="mb-1">
                  <a href="#" class="">$100 - $200</a>
                </li>
                <li class="mb-1">
                  <a href="#" class="">$200 - $300</a>
                </li>
                <li class="mb-1">
                  <a href="#" class="">$300 - $400</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="filter-card">
            <div class="filter-card-title">
              <h3>Material</h3>
            </div>
            <div class="filter-card-body">
              <ul class="f-card-list" style="padding-left: none">
                <li class="mb-1">
                  <a href="#" class="">Laminate</a>
                </li>
                <li class="mb-1">
                  <a href="#" class="">Acrylic</a>
                </li>
                <li class="mb-1">
                  <a href="#" class="">Aluminium</a>
                </li>
                <li class="mb-1">
                  <a href="#" class="">Cotton</a>
                </li>
                <li class="mb-1">
                  <a href="#" class="">Leather</a>
                </li>
                <li class="mb-1">
                  <a href="#" class="">Metal</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="filter-card">
            <div class="filter-card-title">
              <h3>Color</h3>
            </div>
            <div class="filter-card-body">
              <ul
                class="f-card-list list-inline color_selection d-flex justify-content-start mb-0"
              >
                <li class="list-inline-item mr-1 selected" @click="takeColor">
                  <a
                    class="d-block swatches-item"
                    data-var="black"
                    style="background-color: #d0a272"
                  >
                  </a>
                </li>
                <li class="list-inline-item" @click="takeColor">
                  <a
                    class="d-block swatches-item"
                    data-var="brown"
                    style="background-color: #68412d"
                  ></a>
                </li>
                <li class="list-inline-item" @click="takeColor">
                  <a
                    class="d-block swatches-item"
                    data-var="green"
                    style="background-color: #000000"
                  >
                  </a>
                </li>
                <li class="list-inline-item mr-1" @click="takeColor">
                  <a
                    class="d-block swatches-item"
                    data-var="black"
                    style="background-color: #aa5959"
                  >
                  </a>
                </li>
                <li class="list-inline-item" @click="takeColor">
                  <a
                    class="d-block swatches-item"
                    data-var="brown"
                    style="background-color: #8db4d2"
                  ></a>
                </li>
                <li class="list-inline-item" @click="takeColor">
                  <a
                    class="d-block swatches-item"
                    data-var="green"
                    style="background-color: #c2c3a0"
                  >
                  </a>
                </li>
                <li class="list-inline-item mr-1" @click="takeColor">
                  <a
                    class="d-block swatches-item"
                    data-var="black"
                    style="background-color: #c7857d"
                  >
                  </a>
                </li>
                <li class="list-inline-item" @click="takeColor">
                  <a
                    class="d-block swatches-item"
                    data-var="brown"
                    style="background-color: #e3e1e7"
                  ></a>
                </li>
                <li class="list-inline-item" @click="takeColor">
                  <a
                    class="d-block swatches-item"
                    data-var="green"
                    style="background-color: #b490b0"
                  >
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="filter-card">
            <div class="filter-card-title">
              <h3>Tags</h3>
            </div>
            <div class="filter-card-body">
              <ul
                class="f-card-list d-flex flex-wrap"
                style="padding-left: none"
              >
                <li class="mr-2 py-1">
                  <a href="#" class="">Accessories</a>
                </li>
                <li class="mr-2 py-1">
                  <a href="#" class="">Chairs</a>
                </li>
                <li class="mr-2 py-1">
                  <a href="#" class="">Clock</a>
                </li>
                <li class="mr-2 py-1">
                  <a href="#" class="">Dining Tables</a>
                </li>
                <li class="mr-2 py-1">
                  <a href="#" class="">Lighting</a>
                </li>
                <li class="mr-2 py-1">
                  <a href="#" class="">Lounges &amp; Sofa</a>
                </li>
                <li class="mr-2 py-1">
                  <a href="#" class="">Stool</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-9">
        <div class="shop-page-banner">
          <img src="../../public/images/b-12.jpg" alt="" />

          <div class="shop-page-img-overlay pt-xl-10">
            <p class="fs-18 font-weight-bold text-center text-white mb-2">
              2021 Trending
            </p>
            <h2 class="text-white text-center fs-30 fs-sm-40">
              Pastel Color Vibe
            </h2>
          </div>
        </div>
        <div class="d-flex mb-6 justify-content-between">
          <div class="d-flex align-items-center number-pages">
            Showing 1-15 of 90 results
          </div>
          <div class="ml-auto">
            <div class="dropdown">
              <a
                href="#"
                class="dropdown-toggle fs-14"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Default Sorting
              </a>
              <div
                class="dropdown-menu dropdown-menu-right"
                aria-labelledby="dropdownMenuButton"
                style=""
              >
                <a class="dropdown-item text-primary fs-14" href="#"
                  >Price high to low</a
                >
                <a class="dropdown-item text-primary fs-14" href="#"
                  >Price low to high</a
                >
                <a class="dropdown-item text-primary fs-14" href="#">Random</a>
              </div>
            </div>
          </div>
        </div>
        <div class="shop-card-controller">
          <ProductCard  data-aos="fade-up"
        data-aos-delay="400"
        data-aos-duration="900"
        img="images/product-10.jpg"/>
          <ProductCard  data-aos="fade-up"
        data-aos-delay="400"
        data-aos-duration="900"
        img="images/product-10.jpg"/>
          <ProductCard  data-aos="fade-up"
        data-aos-delay="400"
        data-aos-duration="900"
        img="images/product-10.jpg"/>
          <ProductCard  data-aos="fade-up"
        data-aos-delay="400"
        data-aos-duration="900"
        img="images/product-10.jpg"/>
          <ProductCard  data-aos="fade-up"
        data-aos-delay="400"
        data-aos-duration="900"
        img="images/product-10.jpg"/>
          <ProductCard  data-aos="fade-up"
        data-aos-delay="400"
        data-aos-duration="900"
        img="images/product-10.jpg"/>
          <ProductCard  data-aos="fade-up"
        data-aos-delay="400"
        data-aos-duration="900"
        img="images/product-10.jpg"/>
          <ProductCard  data-aos="fade-up"
        data-aos-delay="400"
        data-aos-duration="900"
        img="images/product-10.jpg"/>
          <ProductCard  data-aos="fade-up"
        data-aos-delay="400"
        data-aos-duration="900"
        img="images/product-10.jpg"/>
          <ProductCard  data-aos="fade-up"
        data-aos-delay="400"
        data-aos-duration="900"
        img="images/product-10.jpg"/>
          <ProductCard  data-aos="fade-up"
        data-aos-delay="400"
        data-aos-duration="900"
        img="images/product-10.jpg"/>
          <ProductCard  data-aos="fade-up"
        data-aos-delay="400"
        data-aos-duration="900"
        img="images/product-10.jpg"/>
          <ProductCard  data-aos="fade-up"
        data-aos-delay="400"
        data-aos-duration="900"
        img="images/product-10.jpg"/>
          <ProductCard  data-aos="fade-up"
        data-aos-delay="400"
        data-aos-duration="900"
        img="images/product-10.jpg"/>
          <ProductCard  data-aos="fade-up"
        data-aos-delay="400"
        data-aos-duration="900"
        img="images/product-10.jpg"/>
          <ProductCard  data-aos="fade-up"
        data-aos-delay="400"
        data-aos-duration="900"
        img="images/product-10.jpg"/>
          <ProductCard  data-aos="fade-up"
        data-aos-delay="400"
        data-aos-duration="900"
        img="images/product-10.jpg"/>
          <ProductCard  data-aos="fade-up"
        data-aos-delay="400"
        data-aos-duration="900"
        img="images/product-10.jpg"/>
          <ProductCard  data-aos="fade-up"
        data-aos-delay="400"
        data-aos-duration="900"
        img="images/product-10.jpg"/>
          <ProductCard  data-aos="fade-up"
        data-aos-delay="400"
        data-aos-duration="900"
        img="images/product-10.jpg"/>
          <ProductCard  data-aos="fade-up"
        data-aos-delay="400"
        data-aos-duration="900"
        img="images/product-10.jpg"/>
          <ProductCard  data-aos="fade-up"
        data-aos-delay="400"
        data-aos-duration="900"
        img="images/product-10.jpg"/>
          <ProductCard  data-aos="fade-up"
        data-aos-delay="400"
        data-aos-duration="900"
        img="images/product-10.jpg"/>
          <ProductCard  data-aos="fade-up"
        data-aos-delay="400"
        data-aos-duration="900"
        img="images/product-10.jpg"/>
          <ProductCard  data-aos="fade-up"
        data-aos-delay="400"
        data-aos-duration="900"
        img="images/product-10.jpg"/>
        </div>
        <div class="shop-pagination d-flex justify-content-center pt-5">
          <el-pagination layout="prev, pager, next" :pager-count="4" :total="70">
          </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ProductCard from "../smallComponents/ProductCard.vue";
export default {
  methods: {
    takeColor(e) {
      console.log(e);
      const take = document.querySelectorAll(".list-inline-item");
      take.forEach((item) => {
        item.classList.remove("selected");
      });
      e.target.className === "list-inline-item"
        ? e.target.classList.add("selected")
        : e.target.parentNode.classList.add("selected");
    },
  },
  components: {
    ProductCard,
  },
};
</script>
<style lang="css">
.f-card-list {
  list-style: none;
  padding-left: 0 !important;
  padding-top: 20px;
}
.f-card-list li a {
  color: #777 !important;
  line-height: 1.2 !important;
  transition: all 0.2s;
  font-weight: 400 !important;
  font-family: "Poppins", sans-serif;
  border-bottom: 1px solid transparent !important;
}
.f-card-list li a:hover {
  border-bottom: 1px solid #000 !important;
}
.filter-card-title h3 {
  font-size: 20px !important;
  font-weight: 700;
  line-height: 1.25;
  color: #000;
  font-family: "Poppins", sans-serif;
  margin-bottom: 0 !important;
}
.filter-card {
  margin-bottom: 40px;
}

.color_selection .list-inline-item.selected,
.color_selection .list-inline-item:hover {
  border-color: #000;
}

.color_selection .list-inline-item {
  border-radius: 50%;
  border: 1px solid transparent;
  transition: all 0.2s;
  padding: 4px;
  margin-right: 5px;
}
.list-inline-item {
  display: inline-block;
}
.color_selection .list-inline-item.selected,
.color_selection .list-inline-item:hover {
  border-color: #000;
}
.color_selection .swatches-item {
  width: 18px;
  height: 18px;
  border-radius: 50%;
}
.color_selection {
  display: flex;
  flex-wrap: wrap;
  max-width: 200px;
}
.mr-2 {
  margin-right: 0.625rem !important;
}
.shop-page-banner {
  position: relative;
  margin-bottom: 50px;
}
.shop-page-banner img {
  width: 100%;
}

.shop-page-img-overlay {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 1.25rem;
  border-radius: 0;
}
.shop-page-img-overlay h2 {
  font-size: 30px !important;
  margin-bottom: 0.5rem;
  font-weight: 700;
  line-height: 1.25;
  font-family: "Poppins", sans-serif;
}
.shop-page-img-overlay p {
  font-size: 18px !important;
  font-weight: 700 !important;
  font-family: "Poppins", sans-serif;
}
@media (min-width: 576px) {
  .shop-page-img-overlay h2 {
    font-size: 40px !important;
  }
}

@media (min-width: 1200px) {
  .shop-page-img-overlay {
    padding-top: 4.375rem !important;
  }
}
.number-pages {
  font-family: "Poppins", sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.63;
}
.shop-card-controller {
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 30px;
}
.shop-sticky {
  position: sticky;
  top: 100px;
}
.page-link {
  position: relative;
  display: block;
  padding: 0.5rem 21px;
  margin-left: 0;
  line-height: 1.25;
  color: #a2a2a2;
  background-color: transparent;
  border: 0 solid #dee2e6;
}
.el-pager li {
  padding: 0.5rem 21px !important;
  background: transparent !important;

  min-width: 35.5px;
  color: #a2a2a2 !important;
  height: 28px;
  line-height: 1.25 !important;
  box-sizing: border-box;
  border: 0 solid #dee2e6 !important  ;
  font-size: 18px !important;
  font-weight: 500 !important;
  letter-spacing: 4.5px;
  /* font-family: "Poppins",sans-serif !important; */
}
.el-pager li:hover {
color: #000 !important;
}
.el-pager li.active {
    color: #000 !important;
    cursor: default;
}
</style>
