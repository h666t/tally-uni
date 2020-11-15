<template>
  <view class="wrapper">
    <ol>
      <li>衣</li>
      <li>食</li>
      <li>住</li>
      <li>行</li>
      <li><Icon class="icon" icon-name="icon-Settingscontroloptions"/></li>
    </ol>
  </view>
</template>

<script>
import Icon from "../public/Icon"
export default {
  components: {Icon}
}
</script>

<style scoped lang="scss">
.wrapper{
  padding: 15px;
  background: white;
  display: flex;
  justify-content: center;
  >ol{
    display: flex;
    flex-wrap: wrap;
    >li{
      margin: 15px 20px;
      display: flex;
      flex-grow: 1;
      justify-content: center;
      padding: 5px 10px;
    }
  }
}
</style>