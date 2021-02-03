<script>
export default {
  name: 'osm-coordinates',
  inject: ['searchQuery'],
  computed: {
    reactiveSearchQuery: function () {
      return this.searchQuery.value
    }
  },
  watch: {
    reactiveSearchQuery: function (newQuery) {
      fetch(`https://nominatim.openstreetmap.org/search?q=${newQuery}&format=json&polygon=1&addressdetails=1`)
          .then(response => response.json())
          .then(data => this.$emit('update_coords', [
                data[0].lon,
                data[0].lat
              ]
          ))
    }
  }
}
</script>