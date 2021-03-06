<template>
  <div class="columns">
    <div class="column">
      <email @email="eMail = $event"/>
      <password @password="password = $event"/>
      <div class="field">
        <p class="control">
          <button class="button is-primary" v-if="eMail && password" role="button" @click="submitSignIn">
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
import password from "@/components/pagination/signIn/password";

export default {
  name: 'signin',
  components: {
    password,
    email
  },
  data() {
    return {
      eMail: '',
      password: '',
      data: null
    }
  }
}

</script>