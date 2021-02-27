<template>
  <div class="columns">
    <div class="column">
      <contact-form />
    </div>
    <div class="column">
      <h1 class="title">{{ $t('views.Contact.contact_text') }}</h1>
    </div>
  </div>
</template>

<script>
import ContactForm from "@/components/contact/contact_form.vue";
export default {
  name: 'contact',
  components: {ContactForm}
}
</script>