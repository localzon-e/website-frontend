<template>
  <template v-if="!searchActive">
    <div class="button green" @click="activeSearchInputTimeout">
      <strong>Search</strong>
    </div>
  </template>
  <template v-else>
    <p class="control has-icons-left">
    <span>
      <input class="input green" @focus="disableSearchInputTimeout" @blur="searchActive = false"
             type="search" v-model="searchQuery" @keyup="search"
             placeholder="Search localzon(e)"/>
    </span>
      <span class="icon is-small is-left">
      <i class="search-icon"></i>
    </span>
    </p>
    <button v-if="searchQuery.length > 0" class="delete" @click="searchQuery = ''"/>
  </template>
</template>

<script>
export default {
  name: 'search',
  data() {
    return {
      searchActive: false,
      searchInputTimeout: null,
      searchQuery: ''
    }
  },
  methods: {
    activeSearchInputTimeout: function () {
      this.searchActive = true
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
    search: function (e) {
      if (e.keyCode === 13) {
        this.$emit('search', this.searchQuery)
      }
    },
  }
}
</script>

<style>
input {
  color: black;
}

.search-icon {
  background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaGVpZ2h0PSIzMnB4IiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdGg9IjMycHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6c2tldGNoPSJodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnMiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48dGl0bGUvPjxkZXNjLz48ZGVmcy8+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSI+PGcgZmlsbD0iIzkyOTI5MiIgaWQ9Imljb24tMTExLXNlYXJjaCI+PHBhdGggZD0iTTE5LjQyNzExNjQsMjAuNDI3MTE2NCBDMTguMDM3MjQ5NSwyMS40MTc0ODAzIDE2LjMzNjY1MjIsMjIgMTQuNSwyMiBDOS44MDU1NzkzOSwyMiA2LDE4LjE5NDQyMDYgNiwxMy41IEM2LDguODA1NTc5MzkgOS44MDU1NzkzOSw1IDE0LjUsNSBDMTkuMTk0NDIwNiw1IDIzLDguODA1NTc5MzkgMjMsMTMuNSBDMjMsMTUuODQ3MjEwMyAyMi4wNDg2MDUyLDE3Ljk3MjIxMDMgMjAuNTEwNDA3NywxOS41MTA0MDc3IEwyNi41MDc3NzM2LDI1LjUwNzc3MzYgQzI2Ljc4MjgyOCwyNS43ODI4MjggMjYuNzc2MTQyNCwyNi4yMjM4NTc2IDI2LjUsMjYuNSBDMjYuMjIxOTMyNCwyNi43NzgwNjc2IDI1Ljc3OTYyMjcsMjYuNzc5NjIyNyAyNS41MDc3NzM2LDI2LjUwNzc3MzYgTDE5LjQyNzExNjQsMjAuNDI3MTE2NCBMMTkuNDI3MTE2NCwyMC40MjcxMTY0IFogTTE0LjUsMjEgQzE4LjY0MjEzNTgsMjEgMjIsMTcuNjQyMTM1OCAyMiwxMy41IEMyMiw5LjM1Nzg2NDE3IDE4LjY0MjEzNTgsNiAxNC41LDYgQzEwLjM1Nzg2NDIsNiA3LDkuMzU3ODY0MTcgNywxMy41IEM3LDE3LjY0MjEzNTggMTAuMzU3ODY0MiwyMSAxNC41LDIxIEwxNC41LDIxIFoiIGlkPSJzZWFyY2giLz48L2c+PC9nPjwvc3ZnPg==);
}
</style>