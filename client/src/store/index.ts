import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data: {}
  },
  mutations: {
    SAVE_DATA: (state, playload) => {
      state.data = playload
    }
  },
  actions: {
    fetchData: async ({ commit }) => {
      const rs = await fetch('/api/data')
      const data = await rs.json()
      commit('SAVE_DATA', data)
    }
  },
  modules: {
  },
});
