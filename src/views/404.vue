<template>
  <h1 class="title">{{ $t('views.PageNotFound.text') }}</h1>
  <h2 class="subtitle">{{ $t('views.PageNotFound.goback_text')}}</h2>
  <router-link class="button green" to="/">{{ $t('views.PageNotFound.goback_button')}}</router-link>
</template>

<script>
export default {
  name: "404"
}
</script>

<style scoped>

</style>