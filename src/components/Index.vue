<template>
  <div>
    <Header></Header>
    <Navigation></Navigation>
    <!--<Content></Content>-->
    <router-view></router-view>
    <footers></footers>
  </div>
</template>
<script>
  import Header from './header/Header'
  import Navigation from './nav/Navigation'
//  import Content from '../components/content/Contents'
  import footers from './footer/index'
  export default {
    components : {
      Header,
      Navigation,
      footers
//      Content,
    }
  }
</script>
<style>

</style>
<style>

</style>
