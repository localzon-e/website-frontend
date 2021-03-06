<template>
  <nav class="navbar is-transparent is-fixed-top" role="navigation" aria-label="main navigation">
    <div class="navbar-brand noselect">

      <!-- LOGO -->
      <div class="navbar-item noselect">
        <div class="navbar-item">
          <logo/>
        </div>
      </div>

      <!-- BURGER TO TOGGLE NAVIGATION BAR ON MOBILE -->
      <a role="button" class="navbar-burger" id="navbarBurger" aria-label="menu" aria-expanded="false"
         data-target="navbarLinks" @click="toggleNavigationBarOnMobile">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarLinks" class="navbar-menu">

      <!-- NAVIGATION LINKS -->
      <div class="navbar-start">
        <router-link v-for="route in routes" :key="route" :to="{ name: route.name, query: {} }"
                     class="navbar-item is-size-5 noselect">
          {{ $t('views.' + route.name + '.name') }}
        </router-link>
      </div>

      <!-- <div class="navbar-item">
        <ticker />
      </div> -->


      <div class="navbar-end">

        <!-- LANGUAGES -->
        <div class="navbar-item">
          <div class="select is-medium">
            <select v-model="$i18n.locale">
              <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">{{
                  mapLocaleToLanguage[locale]
                }}
              </option>
            </select>
          </div>
        </div>

        <!-- BUTTONS TO REGISTER AND SEARCH -->
        <div class="navbar-item">
          <div class="buttons">
            <accessibility/>
            <get_location v-show="!searchIsActive"/>
            <github v-show="!searchIsActive"/>
            <!-- <donation v-show="!searchIsActive"/> -->
            <register v-show="!searchIsActive"/>
            <search v-bind="$attrs" @searchIsActive="activateSearch" @searchIsNotActive="searchIsActive = false"/>
          </div>
        </div>

      </div>
    </div>
  </nav>
</template>

<script>
import get_location from "@/components/utility/get_location";
import Github from "@/components/pagination/github";
import Accessibility from "@/components/pagination/accessibility";

export default {
  name: 'navigation-bar',
  components: {Accessibility, Github, get_location},
  data() {
    return {
      mapLocaleToLanguage: {
        'de': 'Deutsch',
        'en': 'English',
        'it': 'Italiano',
        'ru': 'русский'
      },
      notIncludedRoutes: [
        'PageNotFound',
        'SignIn'
      ],
      searchIsActive: false,
      isHiddenNavigationBarOnMobile: true
    }
  },
  computed: {
    routes: function () {
      return this.$router.options.routes.filter(r => !this.notIncludedRoutes.includes(r.name)).filter((v, i, a) => a.indexOf(v) === i)
    }
  },
  methods: {
    toggleNavigationBarOnMobile: function () {
      const burger = document.getElementById('navbarBurger')
      const $target = document.getElementById('navbarLinks')
      if (burger !== null)
        burger.classList.toggle('is-active')
      if ($target !== null)
        $target.classList.toggle('is-active')
    },
    hideNavigationBarOnMobile: function () {
      const burger = document.getElementById('navbarBurger')
      const $target = document.getElementById('navbarLinks')
      if (burger !== null)
        burger.classList.remove('is-active')
      if ($target !== null)
        $target.classList.remove('is-active')
    },
    activateSearch: function () {
      this.searchIsActive = true
      this.isHiddenNavigationBarOnMobile = false
      if (this.$route.name !== 'Home')
        this.$router.push({name: 'Home'})
    },
  },
  watch: {
    '$route.query.search': {
      handler: 'hideNavigationBarOnMobile',
      immediate: true
    }
  }
}

</script>