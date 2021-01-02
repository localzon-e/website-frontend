<template>
  <input type="text" v-model="location"/>
  <button @click="search">Search</button>
</template>

<script>
export default {
  name: 'osm-coordinates',
  data() {
    return {
      location: ''
    }
  },
  methods: {
    search: function () {
      fetch(`https://nominatim.openstreetmap.org/search?q=${this.location}&format=json&polygon=1&addressdetails=1`)
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