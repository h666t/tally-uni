<template>
  <view class="wrapper">
    <UniCalendar :insert="false" ref="calendar"/>
    <button @click="openCalendar">open</button>
  </view>
</template>

<script>
import UniCalendar from "../../../components/uni-calendar/uni-calendar"
export default {
  components: {UniCalendar},
  methods:{
    openCalendar(){ //打开日历
      this.$refs.calendar.open()
    }
  }
}
</script>

<style scoped lang="scss">

</style>