<template>
  <button :class="['button','is-medium']" @click="toggleAccessibility">
    <span class="fas fa-universal-access"></span>
  </button>
</template>

<script>
import {mapMutations} from "vuex";

export default {
  name: 'accessibility',
  methods: {
    ...mapMutations([
      'toggleAccessibility'
    ])
  }
}
</script>