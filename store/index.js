import Vue from 'vue'
import Vuex from 'vuex'
import dayjs from "dayjs"
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    type:'-',
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
    }
  },
  actions: {}
})
export default store