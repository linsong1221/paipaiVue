import {INCREMENT} from './types'
import getters from './getters'
const state = {
  count:30
}
const mutations = {
  [INCREMENT](state){
    state.count++
  }
}

export default {
  state,
  mutations,
  getters
}
