import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

const state = {
  rest_time: {
    rest_second: 30,
  }
};

const store = new Vuex.Store({
  state,
  mutations,
  actions,
});

export default store;
