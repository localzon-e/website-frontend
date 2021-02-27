<template>
  <email @email="eMail = $event"/>
  <div class="field" id="contact-textarea">
    <p class="control has-icons-left has-icons-right">
        <textarea class="textarea" :placeholder="$t('views.Contact.placeholder_text')" v-model="textbox"
                  role="textbox"/>
    </p>
  </div>

  <div class="field">
    <p class="control">
      <button class="button is-primary" disabled role="button">
        {{ $t('views.Contact.submit') }}
      </button>
    </p>
  </div>
</template>

<script>
import email from "@/components/common/email";

export default {
  name: 'contact-form',
  components: {
    email
  },
  data() {
    return {
      eMail: '',
      textbox: ''
    }
  }
}
</script>