<template>
  <view class="wrapper">
    <ol>
      <li v-for="(name,id) in tags" :key="id">
        {{name}}
      </li>
      <li><Icon class="icon" icon-name="icon-Settingscontroloptions"/></li>
    </ol>
  </view>
</template>

<script>
import Icon from "../public/Icon"
import idCreator from "../../lib/idCreator"
export default {
  created() {
    this.$store.commit('fetchTags')
    console.log(this.$store.state.tags)
  },
  data(){
    return {
      tags: this.$store.state.tags
    }
  },
  components: {Icon},
  methods:{
    idCreator,
  }
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