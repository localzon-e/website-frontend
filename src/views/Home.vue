<template>
  <div class="columns">
    <div class="column">
      <osm_main/>
    </div>
    <div class="column">
      <how_it_works/>
    </div>
  </div>
</template>


<script>
import osm_main from "@/components/map/osm_main.vue"
import how_it_works from "@/components/how_it_works";

export default {
  name: 'home',
  components: {
    how_it_works,
    osm_main
  }
}
</script>