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
      <text class="chartAnalyse">查看图标分析</text>
    </view>
  </view>
</template>

<script>
import dayjs from 'dayjs'
export default {
  created() {
    this.$store.commit('fetchDataList')
  },
  methods:{
    fetchInputOrOutputAmount(type){
      const {dataList} = this.$store.state
      const thisMonth = dayjs().format('YYYY-MM')
      let amount = 0
      for (let i = 0; i < dataList.length; i++){
        if (dataList[i].date.indexOf(thisMonth) === 0 && dataList[i].type === type){
          amount += dataList[i].amount
        }
      }
      return amount
    }
  },
  computed:{
    outputAmount(){
       return this.fetchInputOrOutputAmount('支出')
    },
    inputAmount(){
      return this.fetchInputOrOutputAmount('收入')
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