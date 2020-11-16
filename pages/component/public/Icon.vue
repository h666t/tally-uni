<template>
  <view class="iconfont" :class="iconName"></view>
</template>

<script>
export default {
  props:{
    iconName:{
      type:String,
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../assets/icon/iconfont.css";
</style>