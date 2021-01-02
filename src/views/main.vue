<template>
  <header_greeting />
  <osm_main />
  <update_data />
</template>


<script>
import header_greeting from '@/components/header_greeting.vue'
import update_data from '@/components/update_data.vue'
import osm_main from "@/components/map/osm_main.vue"

export default {
  name: 'main',
  components: {
    osm_main,
    header_greeting,
    update_data
  }
}
</script>