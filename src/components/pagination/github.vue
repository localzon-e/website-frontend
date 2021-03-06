<template>
  <a class="button is-medium" href="https://github.com/localzon-e/website-frontend" target="_blank" rel="noopener">
    <span v-if="accessibility">
      <strong>GitHub</strong>
    </span>
    <span v-else>
      <i class="fab fa-github"/>
    </span>
  </a>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  name: 'github',
  computed: {
    ...mapGetters({
      accessibility: 'getAccessibilityStatus'
    })
  }
}
</script>