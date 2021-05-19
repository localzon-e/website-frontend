<template>
  <div class="field has-addons" id="password">
    <p class="control has-icons-left has-icons-right">
      <input
          :class="['input', {'is-success': compactCheckPassword && password, 'is-danger': !compactCheckPassword && password}]"
          type="text"
          :placeholder="$t('components.password.password_text')"
          v-model="password"
          role="textbox">
      <span class="icon is-small is-left">
    <span class="fas fa-key"></span>
    </span>
    </p>
    <p class="control">
      <template v-if="password">
        <button class="button is-primary" @click="password = ''">
        <span class="icon is-small">
          <span class="fas fa-times"></span>
        </span>
        </button>
      </template>
    </p>
  </div>
  <div v-if="!hiddenCheckPassword && !compactCheckPassword && password" class="notification is-danger is-light is-small" id="password-modal">
    <button class="delete" @click="hiddenCheckPassword = true"/>
    <ul>
      <li v-for="check in Object.entries(checkPassword)" :key="check">
        <div class="icon-text" v-if="check[1]">
          <span class="icon is-small has-text-success"><span class="fas fa-check is-primary"></span></span>
          <span v-html="descriptions[check[0]][0]"/>
        </div>
        <div v-else>
          <span class="icon is-small has-text-danger"><span class="fas fa-times"></span></span>
          <span v-html="descriptions[check[0]][1]"/>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import {checkPassword} from "@/functions/checkPassword";
import {sha3_512} from 'js-sha3'

export default {
  name: 'password',
  data() {
    return {
      password: '',
      checkPassword: {
        /* see checkPassword.js for regex */
        numbers: false,
        upperCase: false,
        lowerCase: false,
        specialCharacter: false,
        minimumCharacter: false
      },
      hiddenCheckPassword: false
    }
  },
  computed: {
    compactCheckPassword: function () {
      return !Object.values(this.checkPassword).some(val => val === false)
    },
    descriptions: function () {
      return this.$i18n.getLocaleMessage(this.$i18n.locale).components.password.password_checks
    }
  },
  watch: {
    password: function () {
      this.checkPassword = checkPassword(this.password)
      this.$emit('password', this.compactCheckPassword ? sha3_512(this.password) : '')
    }
  }
}
</script>