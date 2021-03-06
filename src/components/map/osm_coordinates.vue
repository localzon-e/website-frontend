<script>
export default {
  name: 'osm-coordinates',
  methods: {
    fetchData: function (newQuery, callback) {
      fetch(`https://nominatim.openstreetmap.org/search?q=${newQuery}&format=json&polygon=1&addressdetails=1`)
          .then(response => response.json())
          .then(data => callback(data))
    },
    handleSearchQuery: function (newQuery) {
      this.fetchData(newQuery, data => {
        this.$router.push({name: 'Home', query: {lat: data[0].lat, lon: data[0].lon}})
      })
    },
    handleQuickFind: function (newQuery) {
      this.fetchData(newQuery, data => {
        this.$emit('quickFindResults', {
              'location': data
            }
        )
      })
    },
    handleQuery: function (newQuery) {
      if (newQuery.quickfind) {
        this.handleQuickFind(newQuery.quickfind)
      } else if (newQuery.search) {
        this.handleSearchQuery(newQuery.search)
      }
    }
  },
  watch: {
    '$route.query': {
      handler: 'handleQuery',
      immediate: true
    }
  }
}
</script>