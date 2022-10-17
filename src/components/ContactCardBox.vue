<template lang="html">
  <div>
    <div class="container_block container-xxl">
      <div class="row">
        <div class="col-12 d-flex">
          <ContactCard />
          <ContactCard />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ContactCard from "../smallComponents/ContactCard.vue";
export default {
  components: {
    ContactCard,
  },
};
</script>
<style lang="css"></style>
