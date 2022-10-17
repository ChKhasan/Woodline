<template lang="html">
  <div>
    <div class="container_block container-xxl">
      <div class="row">
        <div class="col-12 j-card-controller">
          <JournalCard />
          <JournalCard />
          <JournalCard />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import JournalCard from "../smallComponents/JournalCard.vue";
export default {
  components: {
    JournalCard,
  },
};
</script>
<style lang="css">
.j-card-controller {
    display: grid;
    grid-template-columns: auto auto auto;
    grid-column-gap: 30px;
    padding-bottom: 120px;
}
</style>
