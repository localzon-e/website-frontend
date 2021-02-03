<template>
  <navigation-bar @search="searchQuery = $event"/>
  <router-view/>
</template>

<script>
import NavigationBar from "@/components/navigation_bar";
import { computed } from 'vue';

export default {
  name: 'App',
  components: {NavigationBar},
  data() {
    return {
      searchQuery: 'Singen'
    }
  },
  provide() {
    return {
      searchQuery: computed(() => this.searchQuery)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#localzone, #localzon {
  color: #56882d;
}
</style>
