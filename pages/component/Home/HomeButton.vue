<template>
  <view class="wrapper">
    <button @click="goToMoney">记一笔</button>
  </view>
</template>

<script>
export default {
  methods:{
    goToMoney(){
      uni.redirectTo({url:'Money'})
    }
  }
}
</script>

<style scoped lang="scss">
.wrapper {
  position: relative;
  margin-bottom: 30px;
  height: 55px;
  > button {
    position: absolute;
    right: 25px;
    bottom: 0;
    width: 100px;
    height: 45px;
    background: #f60;
    padding: 0;
    border-radius: 20px;
    color: white;
  }
}

</style>