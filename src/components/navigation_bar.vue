<template>
  <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link class="navbar-item" to="/">
        <img :src="require('@/assets/Logo.png')" alt="localzon(e)">
      </router-link>
      <a role="button" class="navbar-burger" id="navbarBurger" aria-label="menu" aria-expanded="false" data-target="navbarLinks" @click="toggleMenuOnMobile">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarLinks" class="navbar-menu">
      <div class="navbar-start">
        <router-link v-for="route in routes" :key="route" :to="route.path" class="navbar-item">
          {{ route.name }}
        </router-link>
      </div>

      <div class="navbar-center">
        <div class="navbar-item title">
          Localzon(e)
        </div>
      </div>


      <div class="navbar-end">
        <div class="navbar-item">
          <template v-if="!searchActive">
            <div class="button green" @click="activeSearchInputTimeout">
              <strong>Search</strong>
            </div>
          </template>
          <template v-else>
            <input class="input green is-small" @focus="disableSearchInputTimeout" @blur="searchActive = false"
                   type="search" v-model="searchQuery" @keyup="search"/>
            <button v-if="searchQuery.length > 0" class="delete" @click="searchQuery = ''"/>
          </template>


          <div class="button is-light">
            Log in
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
      searchActive: false,
      searchInputTimeout: null,
      searchQuery: ''
    }
  },
  computed: {
    routes: function () {
      return this.$router.options.routes.filter(r => r.name !== 'PageNotFound').filter((v, i, a) => a.indexOf(v) === i)
    }
  },
  methods: {
    activeSearchInputTimeout: function () {
      this.searchActive = true
      this.searchInputTimeout = setTimeout(() => {
        this.searchActive = false
      }, 10000)
    },
    disableSearchInputTimeout: function () {
      clearTimeout(this.searchInputTimeout)
    },
    search: function (e) {
      if (e.keyCode === 13) {
        this.$emit('search', this.searchQuery)
      }
    },
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
.navbar-item.navbar-center {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: auto;
}
</style>