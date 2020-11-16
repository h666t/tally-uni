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
    tags: undefined
  },
  mutations: {
    updateAmount(state, payload) {
      state.amount = payload
    },
    updateDate(state, payload) {
      state.date = payload
      console.log(state)
    },
    updateType(state, payload) {
      state.type = payload
    },
    fetchTags(state){
        uni.getStorage({key:'tags',success(res) {
          state.tags = res
        }})
      if (state.tags === undefined){
        state.tags = [
          {id: IdCreator(), name: '衣'},
          {id: IdCreator(), name: '食'},
          {id: IdCreator(), name: '住'},
          {id: IdCreator(), name: '行'}
        ]
      }
    }
  },
  actions: {}
})
export default store