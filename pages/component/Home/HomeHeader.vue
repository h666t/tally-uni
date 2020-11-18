<template>
  <view class="parent">
    <view class="wrapper">
      <view class="inputAndOutput">
        <view class="input">
          <text class="text">本月支出：</text>
          <text class="money">￥{{outputAmount}}</text>
        </view>
        <view class="output">
          <text class="text">本月收入：</text>
          <text class="money">￥{{inputAmount}}</text>
        </view>
      </view>
      <navigator class="chartAnalyse" url="Statistics">
        查看分析
      </navigator>
    </view>
  </view>
</template>

<script>
import dayjs from 'dayjs'
import moneyFooterlib from "../../lib/Money/moneyFooterlib"
export default {
  created() {
    this.$store.commit('fetchDataList')
  },
  data(){
    return {
      thisMonth: dayjs().format('YYYY-MM')
    }
  },
  computed:{
    outputAmount(){
      return moneyFooterlib.fetchSpecialDateAmount('支出',this.thisMonth,this.$store)
    },
    inputAmount(){
      return moneyFooterlib.fetchSpecialDateAmount('收入',this.thisMonth,this.$store)
    }
  },

}
</script>

<style scoped lang="scss">
  .parent{
    display: flex;
    justify-content: center;
    >.wrapper{
      margin: 10px;
      padding: 10px 30px;
      border-radius: 15px;
      background: white;
      width: 80%;
      display: flex;
      flex-direction: column;
      >.inputAndOutput{
        display: flex;
        justify-content: space-between;
        >.input,>.output{
          display: flex;
          flex-direction: column;
          >.text{
            color: #9b9b9b;
          }
        }
      }
      >.chartAnalyse{
        display: flex;
        justify-content: center;
        margin-top: 10px;
        color: #0f9570;
      }
    }
  }
</style>