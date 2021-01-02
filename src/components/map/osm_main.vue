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
  data() {
    return {
      coordinates: {
        centerCoordinates: [8, 47],
        coordinates: []
      }
    }
  }
}
</script>