<template>
  <router-link class="button is-primary is-medium" :to="{ name: 'SignIn' }">
    <span v-if="accessibility">
      <strong>{{ $t('components.signIn.signIn_button') }}</strong>
    </span>
    <span v-else>
      <i class="fas fa-sign-in-alt"/>
    </span>
  </router-link>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  name: 'signIn',
  computed: {
    ...mapGetters({
      accessibility: 'getAccessibilityStatus'
    })
  }
}
</script>