<template>
  <view class="container">
    <view class="title">极简记帐</view>
    <HomeHeader/>
    <HomeBody/>
    <view>
      <navigator url="../Component">
        111
      </navigator>
    </view>
  </view>
</template>

<script>
import HomeHeader from "../component/Home/HomeHeader"
import HomeBody from "../component/Home/HomeBody"

export default {
  components: {HomeBody, HomeHeader},
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
  > .title {
    background: $uni-text-color;
    color: white;
    padding-left: 20px;
    padding-top: 5px;
    padding-bottom: 5px;
  }
}
</style>
