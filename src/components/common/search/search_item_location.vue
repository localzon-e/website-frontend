<template>
  <div class="navbar-item">
    <router-link :to="{ name: 'Home', query: { lat: item.lat, lon: item.lon }}">
      {{ item.display_name }}
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'search_item_location',
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>