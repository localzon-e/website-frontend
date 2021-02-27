<template>
  <div class="field has-addons" id="password">
    <p class="control has-icons-left has-icons-right">
      <input :class="['input', {'is-success': checkPassword && password, 'is-danger': !checkPassword && password}]"
             type="password"
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
</template>

<script>
import {checkPassword} from "@/functions/checkPassword";
import {sha3_512} from 'js-sha3'

export default {
  name: 'password',
  data() {
    return {
      password: '',
      checkPassword: false
    }
  },
  watch: {
    password: function () {
      this.checkPassword = checkPassword(this.password)
      if (this.checkPassword)
        this.$emit('password', sha3_512(this.password))
      else
        this.$emit('password', '')
    }
  }
}
</script>