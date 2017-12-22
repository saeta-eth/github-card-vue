import Vue from 'vue';
import VueResource from 'vue-resource';
import { API_ROOT } from '../config';

Vue.use(VueResource);

Vue.http.options.crossOrigin = true;

// eslint-disable-next-line
export const searchGithubUser = (user) => {
  return Vue.http.get(API_ROOT + user.value);
};
