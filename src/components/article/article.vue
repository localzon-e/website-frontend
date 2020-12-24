<template>
  {{ article.name }}
</template>

<script>
export default {
  name: 'article',
  props: {
    article: {
      type: Object,
      required: true
    }
  }
}
</script>