<template>
  <view class="wrapper">
    <view>
      <UniCalendar @confirm="selectDate" :insert="false" ref="calendar"/>
      <button @click="openCalendar">请选择日期：{{date}}</button>
    </view>

    <view class="numberScreen">
      {{amount}}
    </view>

    <view class="numberPad" >
      <!--      三元套三元，我吐了。。。。
                0 / ok 键 的宽度为 45%
      -->
      <button
          :class="item === 0 ? 'zero' : item === 'ok' ? 'ok' : undefined"
          v-for="item in numberPadValue"
          :key="numberPadValue.indexOf(item)"
          @click="()=>{changeAmount(item)}"
      >
        {{ item }}
      </button>
    </view>
  </view>
</template>

<script>
import UniCalendar from "../../../components/uni-calendar/uni-calendar"
import moneyFooterlib from '../../lib/Money/moneyFooterlib'
import dayjs from 'dayjs'
export default {
  created() { //每次打开页面重置amount
    moneyFooterlib.resetAmount()
    this.$store.commit('updateDate',dayjs().format('YYYY-MM-DD'))
  },
  components: {UniCalendar},
  data() {
    return {
      numberPadValue: [1, 2, 3, "删除", 4, 5, 6, "清零", 7, 8, 9, ".", 0, "ok"],
      amount:'0',
      date: this.$store.state.date,
    }
  },
  methods: {
    openCalendar() { //打开日历
      this.$refs.calendar.open()
    },

    changeAmount(item){
      this.amount = moneyFooterlib.clickNumberPad(item,this.$store)
    },
    selectDate(e){
      this.$store.commit('updateDate',e.fulldate)
      this.date = e.fulldate
    }
  },
}
</script>

<style scoped lang="scss">
.wrapper {
  .numberScreen {
    display: flex;
    flex-direction: row-reverse;
    padding: 10px;
  }


  .numberPad {
    margin-top: 10px;
    margin-bottom: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    > button {
      width: 20%;
      margin-left: 5px;
      margin-right: 5px;
      margin-top: 5px;

      &.zero, &.ok {
        min-width: 45%;
      }
    }
  }
}
</style>