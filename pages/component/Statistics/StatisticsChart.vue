<template>
  <view class="wrapper">
    <view class="buttons">
      <button class="output" @click="changeType">查看{{type}}</button>
    </view>
    <view v-if="data.length === 0">暂无数据</view>
    <ul v-else>
      <li v-for="(item,index) in data" :key="index">
        <text>
          {{item.tags }} {{item.date}}
        </text>
        <text>
          ￥{{item.amount}}
        </text>
      </li>
    </ul>
  </view>
</template>

<script>

export default {
  name: 'Index',
  created() {
    this.$store.commit('fetchDataList')
    this.$store.commit('fetchTags')
  },
  props: {
    date: {
      type: String
    }
  },
  data() {
    return {
      type: '支出'
    };
  },
  computed: {
    data() {
      const result = []
      const dataList = this.$store.state.dataList
      dataList.forEach(item => {
        if (item.date.indexOf(this.date) >= 0 && item.type === this.type) {
          result.push({
            tags: this.findTagName(item.beSelectedTags), amount: item.amount, date: item.date
          })
        }
      })
      return result
    }
  },
  methods: {
    changeType() {
      if (this.type === '支出') {
        this.type = '收入'
      } else {
        this.type = '支出'
      }
    },
    findTagName(idList) {
      const result = []
      idList.forEach(item1 => {
        this.$store.state.tags.forEach(item2 => {
          if (item1 === item2.id) {
            result.push(item2.name)
          }
        })
      })
      return result
    }
  },

};
</script>

<style scoped lang="scss">
.wrapper {
  > .buttons {
    margin-top: 15px;
    display: flex;
    justify-content: flex-start;

    > button {
      font-size: 12px;
    }
  }

  > ul {
    margin-top: 15px;

    > li {
      padding: 5px 20px;
      border-radius: 15px;
      background: white;
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;
      >text{
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
      }
    }
  }
}
</style>
