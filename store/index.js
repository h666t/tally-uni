import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    amount:0
  },
  mutations: {
    updateAmount(state,payload){
      state.amount = payload
      console.log(state)
    }
  },
  actions: {}
})
export default store