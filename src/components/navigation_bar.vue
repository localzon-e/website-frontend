<template>
  <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <!--<router-link class="navbar-item" to="/Home">
        <img :src="require('@/assets/Logo.png')" alt="localzon(e)">
      </router-link> -->
      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarLinks">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarLinks" class="navbar-menu">
      <div class="navbar-start">
        <router-link v-for="route in routes" :key="route" :to="route" class="navbar-item">
          {{ route }}
        </router-link>
      </div>
      <div class="navbar-center">
        <div class="navbar-item">
          <h1 id="welcome-msg">Welcome to the <span id="localzone">localzon(e)</span></h1>
        </div>
      </div>


      <div class="navbar-end">
        <div class="navbar-item">
          <template v-if="!searchActive">
            <div class="button is-primary" @click="activeSearchInputTimeout">
              <strong>Search</strong>
            </div>
          </template>
          <template v-else>
            <input class="input is-primary is-small" @focus="disableSearchInputTimeout" @blur="searchActive = false"
                   type="search" v-model="searchQuery" @keyup="search"/>
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
      return this.$router.options.routes.map(x => x.name).filter((v, i, a) => a.indexOf(v) === i)
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
    }
  }
}

</script>

<style>
.navbar-item.navbar-center {
  flex-grow: 1;
  justify-content: center;
}
</style>