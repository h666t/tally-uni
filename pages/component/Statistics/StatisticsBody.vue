<template>
  <view class="wrapper">
    <view v-if="isShowCalendar" class="calendarList">
      <ol>
        <li @click="()=>{changeDate(item)}"
            v-for="item in allDate"
            :key="item"
            :class="item === date ? 'active' : undefined"
        >
          {{item}}
        </li>
      </ol>
    </view>
    <view class="header">
      <view class="left">
        <text class="date">{{date}}</text>
        <view class="inputAndOutput">
          <text class="output">支出：￥{{inputAmount}}</text>
          <text class="input">收入：￥{{outputAmount}}</text>
        </view>
      </view>
      <view class="right">
        <Icon @click="switchShowCalendar" class="iconfont" icon-name="icon-rili"/>
        <text @click="resetDate" v-if="isShowCalendar">查看本月账单</text>
      </view>

    </view>
  </view>
</template>

<script>
import moneyFooterlib from "../../lib/Money/moneyFooterlib"
import Icon from "../public/Icon"
import dayjs from 'dayjs'
export default {
  components: {Icon},
  created() {
    this.$store.commit('fetchDataList')
    console.log(this.date)
  },
  data(){
    return {
      isShowCalendar:false,
    }
  },
  props:{date:{
      type: String
    }},
  computed:{
    inputAmount(){
      return moneyFooterlib.fetchSpecialDateAmount('收入',this.date,this.$store)
    },
    outputAmount(){
      return moneyFooterlib.fetchSpecialDateAmount('支出',this.date,this.$store)
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
    },
    changeDate(value){
      if (value!=='暂无数据'){
        console.log('hi')
        this.$emit('update:date',value)
      }
    },
    resetDate(){
      this.$emit('update:date',dayjs().format('YYYY-MM'))
      this.isShowCalendar = false
    }
  }
}
</script>

<style scoped lang="scss">
@import "uni";
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
        &.active{
          color: white;
          background: $uni-color-subtitle;
        }
      }
    }
  }
  >.header{
    padding: 15px;
    display: flex;
    flex-direction: row;
    background: white;
    position: relative;
    justify-content: space-between;
    >.left{
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
    >.right{
      display:flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-right: 10px;
      >.iconfont{
        transform: scale(1.5);
      }
      >text{
        font-size: 12px;
        margin-top: 5px;
        color: #0f9570;
      }
    }

  }
}
</style>