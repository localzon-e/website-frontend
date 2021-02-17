<template>
  <osm_coordinates @update_coords="coords = $event"/>
  <osm_map :coordinates="coordinates"/>
</template>

<script>
import osm_map from "@/components/map/osm_map.vue"
import osm_coordinates from "@/components/map/osm_coordinates.vue"

export default {
  name: 'osm-main',
  components: {
    osm_coordinates,
    osm_map
  },
  inject: ['location'],
  data () {
    return {
      coords: [8.85, 47.76]
    }
  },
  computed: {
    reactiveLocation: function () {
      if (this.location.value !== null)
        return this.location.value.coords
      return null
    },
    coordinates: function () {
      return {
        centerCoordinates: this.coords,
        coordinates: []
      }
    }
  },
  watch: {
    reactiveLocation: function (newCoords) {
      if (newCoords !== null)
        this.coords = [newCoords.longitude, newCoords.latitude]
    }
  }
}
</script>