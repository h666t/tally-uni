<template>
  <view class="wrapper">
    <ol>
      <li class="active">衣</li>
      <li>食</li>
      <li>住</li>
      <li>行</li>
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
@import "../../../uni";
.wrapper{
  padding: 15px;
  background: white;
  display: flex;
  justify-content: center;
  >ol{
    display: flex;
    flex-wrap: wrap;
    >li{
      margin: 10px 15px;
      display: flex;
      padding: 5px 20px;
      border-radius: 15px;
    }
    >.active{
      background: $uni-color-subtitle;
      color: white;
    }
  }
}
</style>