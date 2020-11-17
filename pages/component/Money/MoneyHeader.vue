<template>
<view>
  <!--  点击支出-->
  <view @click="changeType" v-if="type === '支出'" class="wrapper">
      <Icon @click="goBack" class="iconfont" icon-name="icon-baseline-close-px"/>
    <text v-for="item in text"
          :key="item"
          :class="item === '支出' ? 'output active' : 'input'"
    >
      {{item}}
    </text>
  </view>
  <!--  点击收入-->
  <view @click="changeType" v-else class="wrapper">
    <Icon @click="goBack" class="iconfont" icon-name="icon-baseline-close-px"/>
    <text v-for="item in text"
          :key="item"
          :class="item === '支出' ? 'output ' : 'input active'"
    >
      {{item}}
    </text>
  </view>
</view>


</template>

<script>
import Icon from "../public/Icon"
export default {
  components: {Icon},
  created() {
    this.$store.commit('updateType','支出')
  },
  data(){
    return {
      text:['支出','收入'],
      type: '支出'
    }
  },
  methods:{
    changeType(){
      if (this.$store.state.type === '支出'){
        this.$store.commit('updateType','收入')
        this.type = '收入'
      }else {
        this.$store.commit('updateType','支出')
        this.type = '支出'
      }
    },
    goBack(){
      uni.navigateTo({url:'Home'})
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../../uni";
.wrapper {
  display: flex;
  justify-content: center;
  background: $uni-bg-color-grey;
  padding: 10px 0;
  position: relative;
  >.iconfont{
    position: absolute;
    left: 20px;
    top: 50%;
    transform: translateY(-50%);
    width: 14px;
    height: 14px;
  }
  >.output{
    margin-right: 10px;
    position: relative;
  }
  >.input{
    margin-left: 10px;
    position: relative;
  }
  >.active:before{
    content: '';
    display: block;
    border-bottom:1px solid;
    position: absolute;
    top: 110%;
    left: 0;
    width: 100%;
  }
}
</style>
