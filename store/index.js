import Vue from 'vue'
import Vuex from 'vuex'
import dayjs from "dayjs"
import IdCreator from "../pages/lib/idCreator"
const defaultTags = [
  {id: IdCreator(), name: '衣'},
  {id: IdCreator(), name: '食'},
  {id: IdCreator(), name: '住'},
  {id: IdCreator(), name: '行'}
]
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

      let tags
      // storage中存在tags
         tags = uni.getStorageSync('tags');
        if (!tags) {
          tags = defaultTags
          uni.setStorageSync('tags', tags);
        }
        state.tags = tags
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
      uni.setStorage({key: 'dataList', data: [...dataList, payload]})
    },
    fetchDataList(state){
      let dataList = []
      try {
        dataList = uni.getStorageSync('dataList');
      } catch (e) {
        console.log(e)
      }
      state.dataList = dataList
    }
    },

  }
)
export default store