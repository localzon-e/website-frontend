<template>
  <navigation-bar @resetQuickFind="quickFindResults={}"/>
  <router-view @quickFindResults="addToQuickFind($event)"/>
  <get_location />
  <fix_vul/>
</template>

<script>
import NavigationBar from "@/components/navigation_bar";
import {computed} from 'vue';
import get_location from "@/components/utility/get_location";
import fix_vul from "@/components/utility/fix_vulnerabilities";

export default {
  name: 'App',
  components: {fix_vul, get_location, NavigationBar},
  data() {
    return {
      quickFindResults: {}
    }
  },
  methods: {
    addToQuickFind: function (results) {
      const category = Object.keys(results)[0]
      this.quickFindResults[category] = results[category]
    }
  },
  provide() {
    return {
      isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(window.navigator.userAgent),
      quickFindResults: computed(() => this.quickFindResults)
    }
  }
}
</script>

<style lang="scss" src="./styles/main_style.scss"/>
