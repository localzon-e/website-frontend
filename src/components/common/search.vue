<template>
  <template v-if="!searchActive">
    <button class="button is-primary" @click="activeSearchInputTimeout">
      <strong>{{ $t('components.search.search_button') }}</strong>
    </button>
  </template>
  <template v-else>
    <div class="field has-addons">
      <p class="control has-icons-left">
        <span>
          <input class="input is-primary" @focus="disableSearchInputTimeout"
                 type="search" v-model="searchQuery" @keyup="searchOnEnter"
                 id="search-input"
                 :placeholder="$t('components.search.search_text')"/>
        </span>
        <span class="icon is-small is-left" v-if="!searchButton">
          <i class="fas fa-search"></i>
        </span>
      </p>
      <p class="control">
        <template v-if="!searchButton">
          <button class="button is-primary" @click="clearButton">
            <span class="icon is-small">
              <i class="fas fa-times"></i>
            </span>
          </button>
        </template>
        <template v-else>
          <button class="button is-primary" @click="search">
            <span class="icon is-small">
              <i class="fas fa-search"></i>
            </span>
          </button>
        </template>
      </p>
    </div>
  </template>
</template>

<script>
export default {
  name: 'search',
  data() {
    return {
      searchActive: false,
      searchButton: false,
      searchInputTimeout: null,
      searchQueryTimeout: null,
      searchQuery: ''
    }
  },
  methods: {
    activeSearchInputTimeout: function () {
      this.$router.push({name: 'Home'})
      this.searchActive = true
      /* it needs some time before being found in the DOM, therefore timeout */
      setTimeout(() => {
        document.getElementById('search-input').focus()
      }, 100)
      this.searchInputTimeout = setTimeout(() => {
        this.searchActive = false
        setTimeout(() => {
          this.searchQuery = ''
        }, 5000)
      }, 10000)
    },
    disableSearchInputTimeout: function () {
      clearTimeout(this.searchInputTimeout)
    },
    search: function () {
      this.searchButton = false
      this.$emit('search', this.searchQuery)
    },
    searchOnEnter: function (e) {
      clearTimeout(this.searchQueryTimeout)
      if (e.keyCode === 13) {
        this.searchButton = false
        this.search()
      } else {
        this.searchQueryTimeout = setTimeout(() => {
          this.searchButton = true
        }, 2500)
      }
    },
    clearButton: function () {
      if (this.searchQuery !== '') {
        this.searchQuery = ''
      } else {
        this.searchActive = false
      }
    }
  }
}
</script>

<style>
input {
  color: black;
}
</style>