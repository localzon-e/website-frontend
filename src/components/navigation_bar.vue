<template>
  <nav class="navbar is-transparent is-fixed-top" role="navigation" aria-label="main navigation">
    <div class="navbar-brand noselect">
      <div class="navbar-item noselect">
        <!-- svg is required here!! -->
        <router-link class="navbar-item" :to="{ name: 'Home' }">
          <span id="logo" />
        </router-link>

      </div>
      <a role="button" class="navbar-burger" id="navbarBurger" aria-label="menu" aria-expanded="false"
         data-target="navbarLinks" @click="toggleNavigationBarOnMobile">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarLinks" class="navbar-menu">
      <div class="navbar-start">
        <router-link v-for="route in routes" :key="route" :to="{ name: route.name }" class="navbar-item noselect">
          {{ $t('views.' + route.name + '.name') }}
        </router-link>
      </div>

      <!-- <div class="navbar-item">
        <ticker />
      </div> -->


      <div class="navbar-end">
        <div class="navbar-item">
          <div class="select">
            <select v-model="$i18n.locale">
              <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">{{
                  mapLocaleToLanguage[locale]
                }}
              </option>
            </select>
          </div>
        </div>
        <div class="navbar-item">
          <div class="buttons">
            <register/>
            <search v-bind="$attrs" @searchIsActive="searchIsActive" />
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'navigation-bar',
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
      burger.classList.toggle('is-active')
      $target.classList.toggle('is-active')
    },
    hideNavigationBarOnMobile: function () {
      const burger = document.getElementById('navbarBurger')
      const $target = document.getElementById('navbarLinks')
      burger.classList.remove('is-active')
      $target.classList.remove('is-active')
    },
    searchIsActive: function () {
      this.isHiddenNavigationBarOnMobile = false
      if (this.$route.name !== 'Home')
        this.$router.push({name: 'Home'})
    },
  },
  watch: {
    '$route.query.search': function () {
      this.hideNavigationBarOnMobile()
    }
  }
}

</script>