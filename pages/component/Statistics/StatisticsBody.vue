<template>
  <view class="wrapper">
    <view v-if="isShowCalendar" class="calendarList">
      <ol>
        <li v-for="item in allDate" :key="item">
          {{item}}
        </li>
      </ol>
    </view>
    <view class="header">
      <text class="date">{{thisMonth}}</text>
      <view class="inputAndOutput">
        <text class="output">支出：￥{{inputAmount}}</text>
        <text class="input">收入：￥{{outputAmount}}</text>
      </view>
      <Icon @click="switchShowCalendar" class="iconfont" icon-name="icon-rili"/>
    </view>
  </view>
</template>

<script>
import dayjs from 'dayjs'
import moneyFooterlib from "../../lib/Money/moneyFooterlib"
import Icon from "../public/Icon"
export default {
  components: {Icon},
  created() {
    this.$store.commit('fetchDataList')
  },
  data(){
    return {
      thisMonth:dayjs().format('YYYY年MM月'),
      isShowCalendar:false,
    }
  },
  computed:{
    inputAmount(){
      return moneyFooterlib.fetchSpecialDateAmount('收入',dayjs().format('YYYY-MM'),this.$store)
    },
    outputAmount(){
      return moneyFooterlib.fetchSpecialDateAmount('支出',dayjs().format('YYYY-MM'),this.$store)
    },
    allDate(){
      const dataList = this.$store.state.dataList
      let result = []
      if (dataList.length>0){
        result = []
        dataList.forEach(item=>{
          const year = item.date.substring(0,4)
          if (result.indexOf(year)===-1){
            result.push(year)
          }
        })
      }else {
        result.push('暂无数据')
      }
      result.sort()
      return result
    }
  },
  methods:{
    switchShowCalendar(){
      this.isShowCalendar = !this.isShowCalendar
    }
  }
}
</script>

<style scoped lang="scss">
.wrapper{
  >.calendarList{
    border:1px solid rgba(0,0,0,0.25);
    height: 100px;
    margin: 10px;
    border-radius: 15px;
    >ol{
      padding: 10px;
      overflow: auto;
      >li{
        display: inline-block;
        background: white;
        padding: 5px 20px;
        border-radius: 15px;
        margin: 0 5px;
      }
    }
  }
  >.header{
    padding-left: 15px;
    display: flex;
    flex-direction: column;
    background: white;
    padding-bottom: 10px;
    position: relative;
    >.date{
      font-weight: bold;
      margin: 10px 0;
    }
    >.inputAndOutput{
      display: flex;
      flex-direction: column;
      font-size: 14px;
    }
    >.iconfont{
      position: absolute;
      top: 30px;
      right: 30px;
      transform: scale(2);
    }
  }

}
</style>