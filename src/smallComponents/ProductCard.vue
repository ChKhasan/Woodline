<template lang="">
  <div
    class="product_card px-sm-4 px-2 py-sm-4 py-2 d-flex flex-row justify-content-between position-relative"
    style="background-image: url(images/product-19.jpg)"
  >
    <div
      class="d-flex flex-column justify-content-between"
      style="height: 100%"
    >
      <div class="product_card_title d-flex flex-column">
        <!-- <a href="#" class="p_card_title">Bow Chair</a> -->
        <router-link class="p_card_title" to="/product-page">
          Bow Chair
          </router-link>
        <a href="#" class="p_card_title_type">Table</a>
      </div>
      <p class="p_card_title_price">$1390.00</p>
    </div>
    <div class="d-flex flex-column content-change-vertical">
      <div class="status_sale status" v-if="false"><span>SALE</span></div>
      <div class="status_new status" v-else><span>SALE</span></div>
      <a
        href="#"
        class="add-to-cart d-flex align-items-center justify-content-center text-primary bg-white hover-white bg-hover-primary w-45px h-45px rounded-circle mb-2 border"
        data-original-title="Add to card"
      >
        <font-awesome-icon class="mx-3 card_icons" icon="fa-regular fa-heart" />
      </a>
      <a
        href="#"
        class="add-to-cart d-flex align-items-center justify-content-center text-primary bg-white hover-white bg-hover-primary w-45px h-45px rounded-circle mb-2 border"
        data-original-title="Add to card"
      >
        <font-awesome-icon class="mx-3 card_icons" icon="fa-regular fa-heart" />
      </a>
      <a
        href="#"
        class="add-to-cart d-flex align-items-center justify-content-center text-primary bg-white hover-white bg-hover-primary w-45px h-45px rounded-circle mb-2 border"
        data-original-title="Add to card"
      >
        <font-awesome-icon class="mx-3 card_icons" icon="fa-solid fa-shuffle" />
      </a>
      <a
        href="#"
        class="add-to-cart d-flex align-items-center justify-content-center text-primary bg-white hover-white bg-hover-primary w-45px h-45px rounded-circle mb-2 border"
        data-original-title="Add to card"
      >
        <!-- <font-awesome-icon class="mx-3 card_icons" icon="fa-solid fa-basket-shopping" /> -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-basket2"
          viewBox="0 0 16 16"
        >
          <path
            d="M4 10a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0v-2zm3 0a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0v-2zm3 0a1 1 0 1 1 2 0v2a1 1 0 0 1-2 0v-2z"
          />
          <path
            d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-.623l-1.844 6.456a.75.75 0 0 1-.722.544H3.69a.75.75 0 0 1-.722-.544L1.123 8H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM2.163 8l1.714 6h8.246l1.714-6H2.163z"
          />
        </svg>
      </a>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="css">
a {
  text-decoration: none !important;
  color: #000 !important;
}
.product_card {
  background-position: center;
  background-size: cover;
  aspect-ratio: 1/1.3;
  overflow: hidden;
}
.p_card_title {
  line-height: 1.2 !important;
  font-weight: 700 !important;
}
.p_card_title_type {
  font-size: 13px !important;
  letter-spacing: 0.5px !important;
  font-weight: 500 !important;
  color: #999 !important;
}
.p_card_title_price {
  font-weight: 500 !important;
  color: #000 !important;
  margin-bottom: 0 !important;
}
.content-change-vertical {
  position: relative;
  display: flex !important;
  height: 100%;
  justify-content: space-between !important;
  align-content: space-between;
  width: 100px;
}
.content-change-vertical a {
  border-radius: 50%;
  width: 42px;
  aspect-ratio: 1.1;
  height: 42px;
  position: absolute;
  right: -100% !important;
  /* display: none !important; */
  transition: 0.5s;
  opacity: 0;
}
.content-change-vertical svg {
  color: black;
}
.content-change-vertical a:hover {
  background: black !important;
  color: white !important;
}
.content-change-vertical a:hover path {
  background: black !important;
  color: white !important;
}
.content-change-vertical a:hover .card_icons {
  color: white !important;
}
.card_icons {
  color: black;
}

.content-change-vertical a:first-child {
  top: 0px !important;
  transition-delay: 0.1s;
}
.content-change-vertical a:last-child {
  top: 25% !important;
  transition-delay: 0.2s;
}
.content-change-vertical a:nth-child(2) {
  top: 50%;
  transition-delay: 0.3s;
}
.content-change-vertical a:nth-child(3) {
  top: 75%;
  transition-delay: 0.4s;
}
.product_card:hover .add-to-cart {
  right: 0 !important;
  opacity: 1;
}
.product_card:hover .status {
  /* display: none; */
  opacity: 0 !important;
}
.status_sale {
  background-color: #e67a7a;
}
.status_new {
  background-color: #9bd6c1;
}
.status_sale,
.status_new {
  transition: 0.4s !important;
  opacity: 1 !important;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  position: absolute;
  aspect-ratio: 1.1;
  font-size: 12px !important;
  color: #fff;
  line-height: 1.15;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  font-weight: 600;
  right: 0;
  border-radius: 50%;
}
</style>
