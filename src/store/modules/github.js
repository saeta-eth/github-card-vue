import api from '@/api';

import {
  FILL_GITHUB_USER,
  UPDATE_SEARCH_VAL,
  CLEAR_ALL_DATA,
} from '../mutation-types';


const defaultState = {
  searchKey: '',
  githubUser: null,
};

const actions = {
  searchGithubUser: (context, value) => {
    api.getSearchGithubUser({ value })
      .then((reply) => {
        context.commit(FILL_GITHUB_USER, reply.body);
      })
      .catch((reply) => {
        // eslint-disable-next-line
        alert('Something is wrong --> ' + reply.body.message);
        context.commit(CLEAR_ALL_DATA);
      });
  },
  updateSearchKey: (context, value) => {
    context.commit(UPDATE_SEARCH_VAL, value);
  },
};

const getters = {
  searchKey: state => state.searchKey,
  githubUser: state => state.githubUser,
};

const mutations = {
  // eslint-disable-next-line
  [FILL_GITHUB_USER](state, key) {
    state.githubUser = key;
  },
  // eslint-disable-next-line
  [UPDATE_SEARCH_VAL](state, key) {
    state.searchKey = key;
  },
  [CLEAR_ALL_DATA](state) {
    state.searchKey = '';
    state.githubUser = null;
  },
};

export default {
  state: defaultState,
  getters,
  actions,
  mutations,
};
