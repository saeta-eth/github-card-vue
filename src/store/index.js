import Vue from 'vue';
import Vuex from 'vuex';

import github from './modules/github';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    github,
  },
});

export default store;
