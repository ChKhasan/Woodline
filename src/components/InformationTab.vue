<template lang="html">
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="Description" name="first">
        <DescriptionComp
      /></el-tab-pane>
      <el-tab-pane
        label="
Infomation"
        name="second"
        ><InformationComp
      /></el-tab-pane>
      <el-tab-pane
        label="
Reviews (3)"
        name="third"
        ><CommentsComp
      /></el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import DescriptionComp from "../components/DescriptionComp.vue";
import InformationComp from "../components/InformationComp.vue";
import CommentsComp from "../components/CommentsComp.vue";
export default {
  data() {
    return {
      activeName: "first",
    };
  },
  components: {
    DescriptionComp,
    InformationComp,
    CommentsComp,
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>
<style lang="css">
.el-tabs__nav-scroll {
  display: flex;
  justify-content: center;
}
.el-tabs__nav-wrap::after {
  background: transparent !important;
}
.el-tabs__item.is-active {
  color: #000 !important;
}
.el-tabs__active-bar {
  background: transparent !important;
}
.el-tabs__item {
  padding: 0 20px;
  height: 40px;
  box-sizing: border-box;
  line-height: 40px;
  display: inline-block;
  list-style: none;
  font-size: 24px !important;
  font-weight: 500 !important;
  color: #bebebe !important;
  position: relative;
  transition: all 0.2s !important;
  font-family: "Poppins", sans-serif;
}
@media (min-width: 992px) {
  .el-tabs__item {
    font-size: 32px !important;
  }
}
</style>
