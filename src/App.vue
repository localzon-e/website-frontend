<template>
  <navigation-bar @resetQuickFind="quickFindResults={}"/>
  <router-view @quickFindResults="addToQuickFind($event)"/>
  <fix_vul/>
  <footer-bar/>
</template>

<script>
import NavigationBar from "@/components/pagination/navigation_bar";
import FooterBar from "@/components/pagination/footer_bar";
import fix_vul from "@/components/utility/fix_vulnerabilities";
import {computed} from 'vue';

export default {
  name: 'App',
  components: {fix_vul, FooterBar, NavigationBar},
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
