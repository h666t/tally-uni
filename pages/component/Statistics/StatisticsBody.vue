<template>
  <view class="wrapper">
    <view class="header">
      <text class="date">{{thisMonth}}</text>
      <view class="inputAndOutput">
        <text class="output">支出：￥25.00</text>
        <text class="input">收入：￥25.00</text>
      </view>
    </view>
  </view>
</template>

<script>
import dayjs from 'dayjs'
export default {
  created() {
    this.$store.commit('fetchDataList')
  },
  data(){
    return {
      thisMonth:dayjs().format('YYYY年MM月')
    }
  }
}
</script>

<style scoped lang="scss">
.wrapper{
  >.header{
    padding-left: 15px;
    display: flex;
    flex-direction: column;
    background: white;
    padding-bottom: 10px;
    >.date{
      font-weight: bold;
      margin: 10px 0;
    }
    >.inputAndOutput{
      display: flex;
      flex-direction: column;
      font-size: 14px;
    }
  }

}
</style>