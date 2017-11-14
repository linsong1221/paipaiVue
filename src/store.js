import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

var state = {
  count: 10
}

//主要做数据的变化
const mutations = {
  increment(state){
    state.count++
  },
  decrement(state){
    state.count--
  }
}

//主要做动作，处理你要干什么，异步请求，判断，流程控制
const actions = {
  increment: ({commit}) => {
    commit('increment')
  },
  decrement: ({commit}) => {
    commit('decrement')
  },
  clickOdd: ({commit,state}) => {
    if(state.count%2 ==0){
      commit('increment')
    }
  },
  clickAsync:({commit})=>{
    //Promise  es6方法
    new Promise((resolve)=>{
      setTimeout(function () {
        commit('increment')
        //如果成功则继续往下走
        resolve()
      },1000)
    })
  }
}

const getters = {
  count(state){
    return state.count
  }
}

//需要导出Store对象
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
