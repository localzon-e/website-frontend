<template>
  <div class="field has-addons" id="email">
    <p class="control has-icons-left has-icons-right">
      <input :class="['input', {'is-success': checkEMail && eMail, 'is-warning': !checkEMail && eMail}]"
             @focusout="handleEmail"
             @keypress="removeEmailDelayed"
             @keyup="handleEmailDelayed"
             type="email"
             :placeholder="$t('components.email.email_text')"
             v-model="eMail"
             role="textbox">
      <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
      </span>
    </p>
    <p class="control">
      <template v-if="eMail">
        <button class="button is-primary" @click="eMail = ''">
          <span class="icon is-small">
            <i class="fas fa-times"></i>
          </span>
        </button>
      </template>
    </p>
  </div>
</template>

<script>
import {checkEMail} from "@/functions/checkEmail";

export default {
  name: 'signin',
  data() {
    return {
      eMail: '',
      checkEmailTimeout: null,
      checkEMail: false
    }
  },
  methods: {
    handleEmail: function () {
      this.checkEMail = checkEMail(this.eMail)
      if (this.checkEMail)
        this.$emit('email', this.eMail)
      else
        this.$emit('email', '')
    },
    handleEmailDelayed: function () {
      this.checkEmailTimeout = setTimeout(() => {
        this.handleEmail()
      }, 100)
    },
    removeEmailDelayed: function () {
      clearTimeout(this.checkEmailTimeout)
    }
  }
}
</script>