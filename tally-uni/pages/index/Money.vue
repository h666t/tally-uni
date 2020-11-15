<template>
  <view>
    <MoneyHeader/>
    <MoneyBody/>
  </view>
</template>
<script>
import MoneyHeader from "../component/Money/MoneyHeader"
import MoneyBody from "../component/Money/MoneyBody"
export default {
  components: {MoneyBody, MoneyHeader}
}
</script>