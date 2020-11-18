<template>
  <view class="wrapper">
    <StatisticsHeader/>
    <StatisticsBody :date="date" v-on:update:date="date = $event" />
  </view>
</template>

<script>
import StatisticsHeader from "../component/Statistics/StatisticsHeader"
import StatisticsBody from "../component/Statistics/StatisticsBody"
import dayjs from "dayjs"
export default {
  components: {StatisticsBody, StatisticsHeader},
  data(){
    return {
      date:dayjs().format('YYYY-MM'),
    }
  }
}
</script>

<style lang="scss" scoped>
@import "uni";
.wrapper{
  background: $uni-bg-color-grey;
  height: 100vh;
}
</style>