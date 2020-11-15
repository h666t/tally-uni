<template>
  <view class="wrapper">
    <Icon iconName="icon-baseline-close-px"/>
    <view class="inputAndOutput">
      <text>支出</text>
      <text>收入</text>
    </view>
  </view>
</template>

<script>
import Icon from "../public/Icon"
export default {
  components: {Icon}
}
</script>

<style scoped lang="scss">

.wrapper{
  display: flex;
}
</style>
