import Vue from 'vue'
import Vuex from 'vuex'
import dayjs from "dayjs"
import IdCreator from "../pages/lib/idCreator"

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    type: '支出',
    amount: 0,
    date: dayjs().format('YYYY-MM-DD'),
    tags: undefined,
    beSelectedTags: [],
    dataList: []
  },
  mutations: {
    updateAmount(state, payload) {
      state.amount = payload
    },
    updateDate(state, payload) {
      state.date = payload
    },
    updateType(state, payload) {
      state.type = payload
    },
    fetchTags(state) {
      const defaultTags = [
        {id: IdCreator(), name: '衣'},
        {id: IdCreator(), name: '食'},
        {id: IdCreator(), name: '住'},
        {id: IdCreator(), name: '行'}
      ]
      uni.getStorage({
        key: 'tags', success(res) {
          state.tags = res
        }
      })
      if (state.tags === undefined) {
        uni.setStorage({
          key: 'tags', data: defaultTags
        })
        state.tags = defaultTags
      }
    },
    updateBeSelectedTags(state, payload) {
      state.beSelectedTags = payload
    },
    updateDataList(state, payload) {
      let dataList = []
      // 从storage获取dataList
      try {
        dataList = uni.getStorageSync('dataList');
      } catch (e) {
        console.log(e)
      }
      console.log('---')
      console.log(dataList)
      uni.setStorage({key: 'dataList', data: [...dataList, payload]})
    }
  },
  actions: {}
})
export default store