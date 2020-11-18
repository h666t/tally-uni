<template>
  <view class="container">
    <view class="title">极简记帐</view>
    <HomeHeader/>
    <view class="homeBodyWrapper"><HomeBody/></view>
    <HomeButton/>
  </view>
</template>

<script>
import HomeHeader from "../component/Home/HomeHeader"
import HomeBody from "../component/Home/HomeBody"
import HomeButton from "../component/Home/HomeButton"

export default {
  components: {HomeButton, HomeBody, HomeHeader},
}
</script>

<style scoped lang="scss">
@import "../../uni";

.container {
  font-size: 14px;
  line-height: 24px;
  height: 100vh;
  background: $uni-bg-color-grey;
  display: flex;
  flex-direction: column;
  overflow: auto;
  >.homeBodyWrapper{
    flex-grow: 1;
    overflow: auto;
  }
  > .title {
    background: $uni-text-color;
    color: white;
    padding-left: 20px;
    padding-top: 5px;
    padding-bottom: 5px;
  }
}
</style>
