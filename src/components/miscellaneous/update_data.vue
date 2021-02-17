<template>
  <input type="text" v-model="email">
  <h2>{{ encrypted_email }}</h2>
</template>

<script>
import { sha3_512 } from 'js-sha3'

export default {
  name: 'update-data',
  data() {
    return {
      email: 'Type your e-mail here to verify',
      encrypted_email: ''
    }
  },
  watch: {
    email: function (newValue) {
      this.encrypted_email = sha3_512(newValue)
    }
  }
}
</script>