<template>
  <osm_coordinates @update_coords="coords = $event" v-bind="$attrs"/>
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
      coords: [8.85, 47.76]
    }
  },
  computed: {
    coordinates: function () {
      return {
        centerCoordinates: this.coords,
        coordinates: []
      }
    }
  },
  watch: {
    '$route.query': function (newQuery) {
      if (newQuery.lat && newQuery.lon) {
        this.coords = [newQuery.lon, newQuery.lat]
      }
    }
  }
}
</script>