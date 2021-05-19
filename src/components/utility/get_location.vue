<template>
  <button class="button is-medium" @click="getLocation">
    <span v-if="accessibility">
      <strong>{{ $t('components.location.location_button')}}</strong>
    </span>
    <span v-else>
      <span class="fas fa-location-arrow"/>
    </span>
  </button>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: 'get_location',
  computed: {
    ...mapGetters({
      accessibility: 'getAccessibilityStatus'
    })
  },
  methods: {
    getLocation: function () {
      if (window.navigator.geolocation) {
        window.navigator.geolocation.getCurrentPosition(location => {
          this.$router.push({name: 'Home', query: {lat: location.coords.latitude, lon: location.coords.longitude}})
        });
      }
    }
  }
}
</script>