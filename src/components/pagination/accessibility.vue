<template>
  <button :class="['button','is-medium']" @click="toggleAccessibility">
    <i class="fas fa-universal-access"></i>
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