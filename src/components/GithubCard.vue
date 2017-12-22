<template v-if="user">
  <div>
    <h2>
      Details
    </h2>
    <img width="250" height="250" :src="user.avatar_url" />
    <p>{{ user.name }}</p>
    <p>Public Repositories: {{ user.public_repos }}</p>
    <a v-bind:href="user.blog"> {{ user.blog }} </a>
    <p>{{ user.location }}</p>
    <p>{{ user.bio }}</p>
  </div>
</template>

<script>
export default {
  name: 'GithubCard',
  props: ['user'],
};
</script>