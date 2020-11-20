<template>
  <view class="wrapper">
    <view class="header">
      <text class="output">今日支出 ￥{{todayOutput}}</text>
      <text class="input">今日收入 ￥{{todayInput}}</text>
    </view>
    <ol class="list">
      <li v-for="(item,index) in detail" :key="index">
        <text>{{item.beSelectedTags}}</text>
        <text>
          <text>{{item.type}}</text>
          <text>￥{{item.amount}}</text>
        </text>
      </li>
    </ol>
  </view>
</template>

<script>
import dayjs from 'dayjs'
import moneyFooterlib from "../../lib/Money/moneyFooterlib"
  export default {
    beforeCreate() {
      this.$store.commit('fetchDataList')
      this.$store.commit('fetchTags')
    },
    data(){
      return {
        dataList:this.$store.state.dataList,
        thisMonth:dayjs().format('YYYY-MM-DD'),
        tags:this.$store.state.tags
      }
    },
    computed:{
      detail(){ //今天的记账明细
        let result = []
        if (this.dataList.length > 0){ //若账单存在
          this.dataList.map(item=>{
            if (item.date.indexOf(this.thisMonth)===0){
              //重置类型
              let type
              item.type === '支出' ? type = '-' : type =  '+'
              //重置标签名
              let tags = []
              item.beSelectedTags.forEach(item=>{
                for (let i = 0; i < this.tags.length; i++){
                  if (item === this.tags[i].id){
                    tags.push(this.tags[i].name)
                    break
                  }
                }
              })
              result.push({
                beSelectedTags:tags,
                type:type,
                amount:item.amount})
            }
          })
        }
        result.reverse()
        return result
      },
      todayInput(){
        return moneyFooterlib.fetchSpecialDateAmount('收入',dayjs().format('YYYY-MM-DD'),this.$store)
      },
      todayOutput(){
        return moneyFooterlib.fetchSpecialDateAmount('支出',dayjs().format('YYYY-MM-DD'),this.$store)
      }
    }
  }
</script>

<style scoped lang="scss">
.wrapper {
  .header {

    > .output, > .input {
      margin-left: 15px;
      font-weight: bold;
    }
  }

  > .list {
    display: flex;
    flex-direction: column;
    overflow: auto;
    padding: 10px;

    > li {
      padding: 5px 20px;
      border-radius: 15px;
      background: white;
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;
    }
  }
}
</style>