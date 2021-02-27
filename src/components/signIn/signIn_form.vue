<template>
  <div class="field has-addons" id="signin-email">
    <p class="control has-icons-left has-icons-right">
      <input :class="['input', {'is-success': checkEMail && eMail, 'is-warning': !checkEMail && eMail}]"
             type="email"
             placeholder="E-Mail"
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