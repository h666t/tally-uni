<template>
  <view class="wrapper">
    <StatisticsHeader/>
    <StatisticsBody :date="date" 
	v-on:update:date="date = $event" />
    <StatisticsChart :date="date"/>
  </view>
</template>

<script>
import StatisticsHeader from "../component/Statistics/StatisticsHeader"
import StatisticsBody from "../component/Statistics/StatisticsBody"
import dayjs from "dayjs"
import StatisticsChart from "../component/Statistics/StatisticsChart"
export default {
  components: {StatisticsChart, StatisticsBody, StatisticsHeader,},
  data(){
    return {
      date:dayjs().format('YYYY-MM'),
    }
  },
  updated() {
    console.log(this.date)
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