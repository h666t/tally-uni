<template>
  <view class="wrapper">
    <view class="moneyHeader">
      <MoneyHeader/>
    </view>
  <view class="moneyBody">
    <MoneyBody/>
  </view>
  <MoneyFooter/>
  </view>
</template>

<script>
import MoneyHeader from "../component/Money/MoneyHeader"
import MoneyBody from "../component/Money/MoneyBody"
import MoneyFooter from "../component/Money/MoneyFooter"
export default {
  components: {MoneyFooter, MoneyBody, MoneyHeader}
}
</script>

<style scoped lang="scss">
@import "../../uni";
.wrapper{
  background:$uni-bg-color-grey;
  display: flex;
  flex-direction: column;
  height: 100vh;
  >.moneyBody{
    flex-grow: 1;
    overflow: auto;
  }
}
</style>