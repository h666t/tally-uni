<template>
  <view class="wrapper">
      <text class="output active">支出</text>
      <text class="input">收入</text>
  </view>
</template>

<script>
import Icon from "../public/Icon"
export default {
  components: {Icon}
}
</script>

<style scoped lang="scss">
@import "../../../uni";
.wrapper {
  display: flex;
  justify-content: center;
  background: $uni-bg-color-grey;
  padding: 10px 0;
  >.output{
    margin-right: 10px;
    position: relative;
  }
  >.input{
    margin-left: 10px;
    position: relative;
  }
  >.active:before{
    content: '';
    display: block;
    border-bottom:1px solid;
    position: absolute;
    top: 110%;
    left: 0;
    width: 100%;
  }
}
</style>
