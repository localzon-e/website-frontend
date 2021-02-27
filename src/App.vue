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

<style lang="scss" src="./styles/main_style.scss" />
