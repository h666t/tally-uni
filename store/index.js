import Vue from 'vue'
import Vuex from 'vuex'
import dayjs from "dayjs"
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    type:'支出',
    amount:0,
    date: dayjs().format('YYYY-MM-DD')
  },
  mutations: {
    updateAmount(state,payload){
      state.amount = payload
    },
    updateDate(state,payload){
      state.date = payload
      console.log(state)
    },
    updateType(state,payload){
      state.type = payload
    }
  },
  actions: {}
})
export default store