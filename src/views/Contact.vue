<template>
  <h1 class="title">Contact Us</h1>
  <div class="field">
    <p class="control has-icons-left has-icons-right">
      <input class="input" type="email" placeholder="E-Mail" v-model="eMail">
      <span class="icon is-small is-left">
        <i class="fas fa-envelope"></i>
      </span>
      <span class="icon is-small is-right" v-if="checkEMail">
        <i class="fas fa-check"></i>
      </span>
      <span class="icon is-small is-right" v-else>
        <i class="fas fa-times"></i>
      </span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'contact',
  data () {
    return {
      eMail: ''
    }
  },
  computed: {
    checkEMail: function () {
      // eslint-disable-next-line no-control-regex
      const eMailRegEx = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
      return eMailRegEx.test(this.eMail)
    }
  }
}
</script>