<template>
  <view class="wrapper">
    <ol>
      <li v-for="item in tags" :key="item.id">
        {{item.name}}
      </li>
      <li>
        <Icon class="icon" icon-name="icon-Settingscontroloptions"/>
      </li>
    </ol>
  </view>
</template>

<script>
import Icon from "../public/Icon"
import idCreator from "../../lib/idCreator"

export default {
  beforeCreate() {
    this.$store.commit('fetchTags')
  },
  mounted() {
    console.log(this.tags)
  },
  data() {
    return {
      tags: this.$store.state.tags
    }
  },
  components: {Icon},
  methods: {
    idCreator,
  }
}
</script>

<style scoped lang="scss">
@import "../../../uni";

.wrapper {
  padding: 15px;
  background: white;
  display: flex;
  justify-content: center;

  > ol {
    display: flex;
    flex-wrap: wrap;

    > li {
      margin: 10px 15px;
      display: flex;
      padding: 5px 20px;
      border-radius: 15px;
    }

    > .active {
      background: $uni-color-subtitle;
      color: white;
    }
  }
}
</style>