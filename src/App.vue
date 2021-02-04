<template>
  <navigation-bar @search="searchQuery = $event"/>
  <router-view/>
</template>

<script>
import NavigationBar from "@/components/navigation_bar";
import {computed} from 'vue';

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
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
  padding: 1em;
}

:root {
  --main-color: #5C8001;
  --second-color: #86312D;
  --third-color: #7CB518;
}

#localzone, #localzon {
  color: var(--main-color);
}


/* button */

.green.button {
  background-color: var(--main-color);
  border-color: transparent;
  color: #fff;
}

.green.input, .green.textarea {
  border-color: var(--main-color);
}

/* transitions */

</style>
