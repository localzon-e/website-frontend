<template>
  <header_greeting />
  <update_data />
</template>


<script>
import header_greeting from '@/components/header_greeting.vue'
import update_data from '@/components/update_data.vue'

export default {
  name: 'main',
  components: {
    header_greeting,
    update_data
  }
}
</script>