<template>
  <view class="wrapper">
    <Icon class="iconfont" @click="goback" icon-name="icon-left_3"/>
    <text>账单详情</text>
  </view>
</template>

<script>
import Icon from "../public/Icon"

export default {
  components: {Icon},
  methods: {
    goback(){
      uni.redirectTo({url:'Home'})
    }
  }
}
</script>

<style scoped lang="scss">
.wrapper{
  padding: 10px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid rgba(0,0,0,0.25);
  >.iconfont{
    position: absolute;
    left: 20px;
    width: 14px;
    height: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>