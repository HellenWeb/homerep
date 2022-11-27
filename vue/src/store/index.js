
// Modules

import { createStore } from 'vuex'

// Logic

const store = createStore({
  state: {
    user: {
      token: sessionStorage.getItem('TOKEN')
    }
  },
  actions: {},
  getters: {},
  modules: {},
  mutations: {}
})

export default store
