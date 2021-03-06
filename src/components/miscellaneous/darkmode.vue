<template>
  <button class="button" @click="toggleDarkmode">
    <i class="fas fa-moon" v-if="darkmode"/>
    <i class="fas fa-sun" v-else/>
  </button>
</template>

<script>
export default {
  name: 'darkmode',
  data() {
    return {
      darkmode: false
    }
  },
  methods: {
    toggleDarkmode: function () {
      this.darkmode = !this.darkmode
      this.$emit('darkmode', this.darkmode)
    }
  }
}
</script>