<template>
  <template v-if="!searchActive">
    <!-- SEARCH BUTTON: IF PRESSED THE INPUT IS DISPLAYED -->
    <button class="button is-primary is-medium search-button" @click="activeSearchInputTimeout">
      <span v-if="accessibility">
        <strong class="search-text">{{ $t('components.search.search_button') }}</strong>
      </span>
      <span v-else>
        <span class="fas fa-search"/>
      </span>
    </button>
  </template>
  <template v-else>
    <div class="field has-addons navbar-item has-dropdown is-boxed" id="search-wrapper">
      <p class="control has-icons-left">
        <!-- SEARCH INPUT -->
        <input class="input is-primary is-medium" @focus="activeSearchInputTimeout"
               type="search" v-model="searchQuery" @keyup="searchOnEnter"
               id="search-input"
               :placeholder="$t('components.search.search_text')"/>
        <!-- SEARCH ICON ON THE LEFT -->
        <span class="icon is-left">
          <span class="fas fa-search"></span>
        </span>
      </p>

      <!-- SEARCH BUTTON AND CLEAR BUTTON -->
      <!-- CLEAR BUTTON SWITCHES TO SEARCH BUTTON AFTER SOME TIME
      IF PEOPLE DON'T KNOW HOW TO INITIATE THE SEARCH -->
      <p class="control">
        <button class="button is-primary is-medium" @click="clearButton">
            <span class="icon is-medium">
              <span class="fas fa-times"></span>
            </span>
        </button>
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


import {mapGetters} from "vuex";

export default {
  name: 'search',
  data() {
    return {
      searchActive: false,
      searchQuery: '',
      quickFindTimer: null,
      categoryToComponent: {
        "location": "search_item_location"
      }
    }
  },
  inject: [
    'quickFindResults',
  ],
  computed: {
    reactiveQuickFindResults: function () {
      return this.quickFindResults.value
    },
    ...mapGetters({
      accessibility: 'getAccessibilityStatus'
    })
  },
  methods: {
    activeSearchInputTimeout: function () {
      /* disable hiding of navigationbar on mobile, jump to home to show map. */
      this.$emit('searchIsActive')

      /* activate search */
      this.searchActive = true

      /* it needs some time before being found in the DOM, therefore timeout. */
      setTimeout(() => {
        // document.getElementById('search-input').focus()
      }, 200)
    },
    search: function () {

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
        this.$emit('searchIsNotActive')
        this.searchActive = false
      }
    }
  },
  watch: {
    '$route.query': function (newQuery) {
      if (this.searchActive) {
        if (newQuery.search || newQuery.quickfind === '') {
          document.getElementById('search-wrapper').classList.remove('is-active')
        } else if (newQuery.quickfind) {
          document.getElementById('search-wrapper').classList.add('is-active')
        }
      }
    }
  }
}
</script>