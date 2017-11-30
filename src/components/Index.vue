<template>
  <div>
    <Navigation></Navigation>
    <content></content>
  </div>
</template>
<script>
  import Navigation from '../components/nav/Navigation'
  import content from '../components/content'
  export default {
    components : {
      Navigation,
      content
    }
  }
</script>
<style>

</style>
