<template>
  <view class="wrapper">
    <ol>
      <li v-for="item in tags" :key="item.id"
          :class="beSelectedTags.indexOf(item.id) !== -1 ? 'active' : undefined"
          @click="()=>{
            changeBeSelectedTags(item)
          }"
      >
        {{item.name}}
      </li>
      <!--      <li>-->
      <!--        <Icon class="icon" icon-name="icon-Settingscontroloptions"/>-->
      <!--      </li>-->
    </ol>
  </view>
</template>

<script>
import Icon from "../public/Icon"
import idCreator from "../../lib/idCreator"

export default {
  beforeCreate() {
    this.$store.commit('fetchTags')
    this.$store.commit('updateBeSelectedTags', [])
  },
  data() {
    return {
      beSelectedTags: this.$store.state.beSelectedTags
    }
  },
  computed: {
    tags() {
      return this.$store.state.tags
    },
    beSelectedTagsInStore() {
      return this.$store.state.beSelectedTags
    }
  }
  ,
  components: {Icon},
  methods: {
    idCreator,
    changeBeSelectedTags(item) {
      const {id} = item.$orig
      const publicFn = (array) => {
        this.beSelectedTags = array
        this.$store.commit('updateBeSelectedTags', this.beSelectedTags)
      }
      if (this.beSelectedTags.indexOf(id) !== -1) {
        const index = this.beSelectedTags.indexOf(id)
        const newBeSelectedTags = [...this.beSelectedTags]
        newBeSelectedTags.splice(index, 1)
        publicFn(newBeSelectedTags)
      } else {
        publicFn([...this.beSelectedTags, id])
      }
    }
  },
  //点击OK时，store中的beSelectedTags会被置空，watch它，来保证视图上被选中的标签也会被清除
  watch: {
    'beSelectedTagsInStore': {
      handler() {
        if (this.$store.state.beSelectedTags.length === 0)
          this.beSelectedTags = []
      },
      immediate: true
    }
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
      padding: 5px 15px;
      border-radius: 15px;
    }

    > .active {
      background: $uni-color-subtitle;
      color: white;
    }
  }
}
</style>