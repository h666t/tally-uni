<template>
  <view class="wrapper">
    <StatisticsHeader/>
    <StatisticsBody/>
  </view>
</template>

<script>
import StatisticsHeader from "../component/Statistics/StatisticsHeader"
import StatisticsBody from "../component/Statistics/StatisticsBody"
export default {
  components: {StatisticsBody, StatisticsHeader}
}
</script>

<style lang="scss" scoped>
@import "uni";
.wrapper{
  background: $uni-bg-color-grey;
  height: 100vh;
}
</style>