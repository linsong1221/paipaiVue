<template>
  <div>
    <Navigation></Navigation>
    <!--<Content></Content>-->
    <router-view></router-view>
    <footers></footers>
  </div>
</template>
<script>
  import Navigation from './nav/Navigation'
//  import Content from '../components/content/Contents'
  import footers from './footer/index'
  export default {
    components : {
      Navigation,
      footers
//      Content,
    }
  }
</script>
<style>

</style>
<style>
  .margin-top-10 {
    margin-top:10px;
  }
</style>
