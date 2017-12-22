<template>
  <div class="container-github-card">
    <h1> Github Card</h1>

    <div class="input-github-card">
      <input :value="searchKey" @input="update" @keyup.enter="searchAction" placeholder="Github User">
    </div>
    <github-card :user="githubUser"></github-card>
  </div>
</template>

<script>

import { mapGetters } from 'vuex';
import GithubCard from './GithubCard';

export default {
  name: 'Home',
  components: {
    GithubCard,
  },
  methods: {
    searchAction() {
      if (this.searchKey.length) {
        this.$store.dispatch('searchGithubUser', this.searchKey);
      }
    },
    update(e) {
      this.$store.dispatch('updateSearchKey', e.target.value);
    },
  },
  computed: {
    ...mapGetters({
      searchKey: 'searchKey',
      githubUser: 'githubUser',
    }),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
