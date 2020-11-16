<template>
<!--  点击支出-->
  <view @click="changeType" v-if="type === '支出'" class="wrapper">
    <text v-for="item in text"
          :key="item"
          :class="item === '支出' ? 'output active' : 'input'"
    >
      {{item}}
    </text>
  </view>
<!--  点击收入-->
  <view @click="changeType" v-else class="wrapper">
    <text v-for="item in text"
          :key="item"
          :class="item === '支出' ? 'output ' : 'input active'"
    >
      {{item}}
    </text>
  </view>
</template>

<script>
export default {
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
