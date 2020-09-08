<template>
<h1>介绍</h1>
<article v-html="md"></article>
</template>

<script>
import md from './Intro.md'
export default {
  props: {
    y: String
  },
  data() {
    return {
      md
    }
  }
}
</script>
