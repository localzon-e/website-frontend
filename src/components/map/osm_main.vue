<template>
  <osm_coordinates @update_coords="coordinates.centerCoordinates = $event"/>
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
  computed: {
    coordinates: function () {
      return {
        centerCoordinates: this.coords,
        coordinates: []
      }
    },
    coords: function () {
      if (this.location.value === null)
        return [8.85, 47.76]
      const c = this.location.value.coords
      return [c.longitude, c.latitude]
    }
  }
}
</script>