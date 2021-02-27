<template>
  <div class="ticker-wrap">
    <div class="ticker">
      <div class="ticker__item" v-for="message in tickerMessages" :key="message">
        {{ message }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ticker',
  data() {
    return {
      tickerMessages: [
        'Be a local hero',
        'Buy at 127.0.0.1',
        'We need more local heroes like you!'
      ]
    }
  }
}
</script>