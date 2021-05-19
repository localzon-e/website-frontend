<template>
  <div class="field has-addons" id="email">
    <p class="control has-icons-left has-icons-right">
      <input :class="['input', {'is-success': checkEmail && eMail, 'is-warning': !checkEmail && eMail}]"
             @focusout="handleEmail"
             @keypress="removeEmailDelayed; removeUserDelayed"
             @keyup="handleEmailDelayed"
             type="email"
             :placeholder="$t('components.email.email_text')"
             v-model="eMail"
             role="textbox">
      <span class="icon is-small is-left">
      <span class="fas fa-envelope"></span>
      </span>
    </p>
    <p class="control">
      <template v-if="eMail">
        <button class="button is-primary" @click="eMail = ''">
          <span class="icon is-small">
            <span class="fas fa-times"></span>
          </span>
        </button>
      </template>
    </p>
  </div>
</template>

<script>
import {checkEmail} from "@/functions/checkEmail.js";
import {sha3_512} from 'js-sha3'

export default {
  name: 'signin',
  data() {
    return {
      eMail: '',
      checkEmailTimeout: null,
      checkEmail: false,
      checkIfUserExistsTimeout: null
    }
  },
  computed: {
    encryptedEmail: function () {
      return sha3_512(this.eMail)
    }
  },
  methods: {
    handleEmail: function () {
      this.checkEmail = checkEmail(this.eMail)
      if (this.checkEmail)
        this.$emit('email', this.encryptedEmail)
      else
        this.$emit('email', '')
    },
    handleEmailDelayed: function () {
      this.checkIfUserExistsDelayed()
      this.checkEmailTimeout = setTimeout(() => {
        this.handleEmail()
      }, 300)
    },
    removeEmailDelayed: function () {
      this.removeUserDelayed()
      clearTimeout(this.checkEmailTimeout)
    },


    checkIfUserExists: function () {
      fetch('http://localhost:8081/users/' + this.encryptedEmail)
          .then(data => console.log(data.text()))
    },
    checkIfUserExistsDelayed: function () {
      this.checkIfUserExistsTimeout = setTimeout(() => {
        this.checkIfUserExists()
      }, 2000)
    },
    removeUserDelayed: function () {
      clearTimeout(this.checkIfUserExistsTimeout)
    }
  }
}
</script>