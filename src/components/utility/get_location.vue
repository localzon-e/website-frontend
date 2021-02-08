<script>
export default {
  name: 'get_location',
  mounted() {
    if (window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(location => {
        this.$emit('location', location)
      });
    }
  }
}
</script>