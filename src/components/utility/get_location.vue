<script>
export default {
  name: 'get_location',
  mounted() {
    if (window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(location => {
        this.$router.push({name: 'Home', query: {lat: location.coords.latitude, lon: location.coords.longitude}})
      });
    }
  }
}
</script>