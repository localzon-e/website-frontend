<template>
  <navigation-bar @search="searchQuery = $event"/>
  <get_location @location="location = $event"/>
  <router-view/>
</template>

<script>
import NavigationBar from "@/components/navigation_bar";
import {computed} from 'vue';
import get_location from "@/components/utility/get_location";

export default {
  name: 'App',
  components: {get_location, NavigationBar},
  data() {
    return {
      searchQuery: '',
      location: null
    }
  },
  provide() {
    return {
      searchQuery: computed(() => this.searchQuery),
      isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(window.navigator.userAgent),
      location: computed(() => this.location)
    }
  }
}
</script>

<style>
@import "./assets/ol.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
  padding: 1em;
}

.noselect {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
  /* Non-prefixed version, currently
                                   supported by Chrome, Edge, Opera and Firefox */
}

:root {
  --main-color: #5C8001;
  --second-color: #86312D;
  --third-color: #7CB518;
  --navbar-bg: #393e46;
  --navbar-color: white;
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
