<template>
  <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
    <div class="navbar-brand noselect">
      <!-- svg is required here!! -->
      <!-- <router-link class="navbar-item" to="/">
        <img :src="require('@/assets/Logo.png')" alt="localzon(e)">
      </router-link> -->
      <a role="button" class="navbar-burger" id="navbarBurger" aria-label="menu" aria-expanded="false"
         data-target="navbarLinks" @click="toggleMenuOnMobile">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarLinks" class="navbar-menu">
      <div class="navbar-start">
        <router-link v-for="route in routes" :key="route" :to="route.path" class="navbar-item noselect">
          {{ $t('views.' + route.name + '.name') }}
        </router-link>
      </div>

      <div class="navbar-center">
        <div class="navbar-item title noselect">
          Localzon(e)
        </div>
      </div>


      <div class="navbar-end">
        <div class="navbar-item ">
          <div class="select">
            <select v-model="$i18n.locale">
              <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">{{
                  locale
                }}
              </option>
            </select>
          </div>
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
  computed: {
    routes: function () {
      return this.$router.options.routes.filter(r => r.name !== 'PageNotFound').filter((v, i, a) => a.indexOf(v) === i)
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

<style>
.navbar {
  background-color: var(--navbar-bg);
}

/* mobile */
@media screen and (max-width: 1023px) {
  .navbar {
    color: black;
  }
}

/* desktop */
@media screen and (min-width: 1024px) {
  .navbar-item, .navbar-link {
    color: var(--navbar-color)
  }

  .navbar-center {
    position: fixed;
    left: 50%;
    transform: translate(-50%, 0);
    margin: auto;
  }
}

#navbarBurger {
  color: var(--navbar-color);
}

</style>