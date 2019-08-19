<template>
  <div class="body-width">
    <MeuHeader></MeuHeader>
    <Navigation></Navigation>
    <!--<Content></Content>-->
    <router-view></router-view>
    <footers></footers>
  </div>
</template>
<script>
  import MeuHeader from './header/MeuHeader'
  import Navigation from './nav/Navigation'
//  import Content from '../components/content/Contents'
  import footers from './footer/index'
  export default {
    components : {
      MeuHeader,
      Navigation,
      footers
//      Content,
    }
  }
</script>
<style>
  .body-width{
    min-width: 1220px;
    max-width: 100%;
    margin: auto;
  }
</style>
