<template>
  <view class="wrapper">
    <view>
      <UniCalendar :insert="false" ref="calendar"/>
      <button @click="openCalendar">请选择日期</button>
    </view>

    <view class="numberScreen">
      {{amount}}
    </view>

    <view class="remark">
      <text>备注：</text>
      <input type="text" placeholder="写点备注吧...">
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
    console.log(dayjs().format('YYYY/MM/DD/HH/mm'))
  },
  components: {UniCalendar},
  data() {
    return {
      numberPadValue: [1, 2, 3, "删除", 4, 5, 6, "清零", 7, 8, 9, ".", 0, "ok"],
      amount:'0'
    }
  },
  methods: {
    openCalendar() { //打开日历
      this.$refs.calendar.open()
    },

    changeAmount(item){
      this.amount = moneyFooterlib.clickNumberPad(item,this.$store)
    },

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

  .remark {
    display: flex;
    padding: 10px;
    border: 1px solid #eaeaea;
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