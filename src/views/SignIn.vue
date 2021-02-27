<template>
  <div class="columns">
    <div class="column">
      <email @email="eMail = $event"/>
      <password @password="password = $event"/>
      <div class="field">
        <p class="control">
          <button class="button is-primary" :disabled="!(eMail && password)" role="button">
            {{ $t('views.Contact.submit') }}
          </button>
        </p>
      </div>
    </div>
    <div class="column title">
      {{ $t('views.SignIn.signIn_text') }}
    </div>
  </div>
</template>

<script>
import email from "@/components/common/email";
import password from "@/components/common/password";

export default {
  name: 'signin',
  components: {
    password,
    email
  },
  data() {
    return {
      eMail: '',
      password: ''
    }
  }
}

</script>