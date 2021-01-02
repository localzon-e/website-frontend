<template>
  <header_greeting />
  <osm_map />
  <update_data />
</template>


<script>
import header_greeting from '@/components/header_greeting.vue'
import update_data from '@/components/update_data.vue'
import osm_map from "@/components/osm_map";

export default {
  name: 'main',
  components: {
    osm_map,
    header_greeting,
    update_data
  }
}
</script>