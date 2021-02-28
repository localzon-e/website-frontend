<template>
  <template v-if="!searchActive">
    <!-- SEARCH BUTTON: IF PRESSED THE INPUT IS DISPLAYED -->
    <button class="button is-primary" @click="activeSearchInputTimeout">
      <strong>{{ $t('components.search.search_button') }}</strong>
    </button>
  </template>
  <template v-else>
    <div class="field has-addons navbar-item has-dropdown is-boxed" id="search-wrapper">
      <p class="control has-icons-left">
        <span>
          <!-- SEARCH INPUT -->
          <input class="input is-primary" @focus="activeSearchInputTimeout"
                 type="search" v-model="searchQuery" @keyup="searchOnEnter"
                 id="search-input"
                 :placeholder="$t('components.search.search_text')"/>
        </span>
        <!-- SEARCH ICON ON THE LEFT -->
        <span class="icon is-small is-left" v-if="!searchButton">
          <i class="fas fa-search"></i>
        </span>
      </p>

      <!-- SEARCH BUTTON AND CLEAR BUTTON -->
      <!-- CLEAR BUTTON SWITCHES TO SEARCH BUTTON AFTER SOME TIME
      IF PEOPLE DON'T KNOW HOW TO INITIATE THE SEARCH -->
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


      <!-- QUICKFIND -->
      <div class="navbar-dropdown is-right">
        <template v-for="(category, idx) in Object.keys(reactiveQuickFindResults)" :key="category">
          <template v-for="item in reactiveQuickFindResults[category]" :key="item">
            <component :is="categoryToComponent[category]" :item="item"/>
          </template>
          <hr v-if="idx < reactiveQuickFindResults.length" class="navbar-divider">
        </template>
      </div>
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
      searchQuery: '',
      quickFindTimer: null,
      categoryToComponent: {
        "location": "search_item_location"
      }
    }
  },
  inject: [
    'quickFindResults'
  ],
  computed: {
    reactiveQuickFindResults: function () {
      return this.quickFindResults.value
    }
  },
  methods: {
    activeSearchInputTimeout: function () {
      /* disable hiding of navigationbar on mobile, jump to home to show map. */
      this.$emit('searchIsActive')

      /* activate search */
      this.searchActive = true

      /* it needs some time before being found in the DOM, therefore timeout. */
      setTimeout(() => {
        document.getElementById('search-input').focus()
      }, 100)
    },
    search: function () {
      this.searchButton = false

      /* emit search event with query to all components.
      Every component decides how to interpret the search. */
      clearTimeout(this.quickFindTimer)
      this.$router.push({name: 'Home', query: {search: this.searchQuery}})
      // this.$emit('search', this.searchQuery) /* emit is not necessary anymore */

      /* reset search query. */
      this.searchQuery = ''
    },
    searchOnEnter: function (e) {

      clearTimeout(this.quickFindTimer)

      /* keyCode 13 is "ENTER". */
      if (e.keyCode === 13) {
        /* disable search button. */
        this.searchButton = false

        /* initiate search. */
        this.search()
      } else {
        this.quickFindTimer = setTimeout(() => {
          /* send quickFind event to all components above in order to get quickFind results. */
          this.$router.push({name: 'Home', query: {quickfind: this.searchQuery}})
          // this.$emit('quickFind', this.searchQuery) /* emit is not necessary anymore */
        }, 1000)
      }
    },
    clearButton: function () {
      /*
        if search query is not empty, then clear it.
        if search query is empty, then disable the search.
       */
      this.$router.push({name: 'Home', query: {quickfind: ''}})
      if (this.searchQuery !== '') {
        this.searchQuery = ''
      } else {
        this.searchActive = false
      }
    }
  },
  watch: {
    '$route.query': function (newQuery) {
      if (newQuery.search || newQuery.quickfind === '') {
        document.getElementById('search-wrapper').classList.remove('is-active')
      } else if (newQuery.quickfind) {
        document.getElementById('search-wrapper').classList.add('is-active')
      }
    }
  }
}
</script>