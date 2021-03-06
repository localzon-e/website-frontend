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
    <i class="fas fa-key"></i>
    </span>
    </p>
    <p class="control">
      <template v-if="password">
        <button class="button is-primary" @click="password = ''">
        <span class="icon is-small">
          <i class="fas fa-times"></i>
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
          <span class="icon is-small has-text-success"><i class="fas fa-check is-primary"></i></span>
          <span v-html="descriptions[check[0]][0]"/>
        </div>
        <div v-else>
          <span class="icon is-small has-text-danger"><i class="fas fa-times"></i></span>
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
      const values = Object.values(this.checkPassword)
      for (let i = 0; i < values.length; i++) {
        if (values[i] === false)
          return false
      }
      return true
    },
    descriptions: function () {
      return this.$i18n.getLocaleMessage(this.$i18n.locale).components.password.password_checks
    }
  },
  watch: {
    password: function () {
      this.checkPassword = checkPassword(this.password)
      const check = this.checkPassword
      if (check.numbers && check.upperCase && check.lowerCase && check.minimumCharacter) {
        this.$emit('password', sha3_512(this.password))
      } else {
        this.$emit('password', '')
      }
    },
    compactCheckPassword: function (newVal) {
      if (!this.hiddenCheckPassword && newVal === false) {
        // document.getElementById('password-modal').classList.toggle('is-active', !newVal)
      }
    },
  }
}
</script>