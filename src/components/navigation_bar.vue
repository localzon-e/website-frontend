<template>
  <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
    <div class="navbar-brand noselect">
      <div class="navbar-item noselect">
        <!-- svg is required here!! -->
        <router-link class="navbar-item" to="/">
          <img :src="require('@/assets/Logo_nobg.png')" alt="Localzon(e)" id="logo">
        </router-link>

      </div>
      <a role="button" class="navbar-burger" id="navbarBurger" aria-label="menu" aria-expanded="false"
         data-target="navbarLinks" @click="toggleMenuOnMobile">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarLinks" class="navbar-menu">
      <div class="navbar-start">
        <router-link v-for="route in routes" :key="route" :to="route.path" class="navbar-item noselect localzone">
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
          <register />
        </div>
        <div class="navbar-item">
          <search v-bind="$attrs"/>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'navigation-bar',
  data () {
    return {
      mapLocaleToLanguage: {
        'de': 'Deutsch',
        'en': 'English'
      },
      notIncludedRoutes: [
          'PageNotFound',
          'SignIn'
      ]
    }
  },
  computed: {
    routes: function () {
      return this.$router.options.routes.filter(r => !this.notIncludedRoutes.includes(r.name)).filter((v, i, a) => a.indexOf(v) === i)
    }
  },
  methods: {
    toggleMenuOnMobile: function () {
      const burger = document.getElementById('navbarBurger')
      const $target = document.getElementById('navbarLinks')
      burger.classList.toggle('is-active')
      $target.classList.toggle('is-active')
    }
  },
  watch: {
    $route: function () {
      const burger = document.getElementById('navbarBurger')
      const $target = document.getElementById('navbarLinks')
      burger.classList.remove('is-active')
      $target.classList.remove('is-active')
    }
  }
}

</script>