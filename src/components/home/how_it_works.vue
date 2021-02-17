<template>
  <template v-for="faq in faqs" :key="faq.question">
    <h1 class="title">{{ faq.question }}</h1>
    <template v-if="typeof faq.answer === 'string'">
      <div class="textarea is-medium" rows="1"
           v-html="faq.answer"/>
    </template>
    <template v-else>
      <div class="textarea is-medium" rows="1" v-if="isMobile"
           readonly v-html="faq.answer.mobile"/>
      <div class="textarea is-medium" rows="1" v-else
           readonly v-html="faq.answer.desktop"/>
    </template>
    <br/>
  </template>
</template>

<script>
export default {
  name: 'how-it-works',
  computed: {
    faqs: function () {
      return this.$i18n.getLocaleMessage(this.$i18n.locale).components.how_it_works.faq
    }
  },
  inject: [
    'isMobile'
  ]
}
</script>