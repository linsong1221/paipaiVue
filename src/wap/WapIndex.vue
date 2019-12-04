<template>
    <div>
      <MeuHeader></MeuHeader>
      <Navigation></Navigation>
      <router-view></router-view>
      <MeuFooter></MeuFooter>
    </div>
</template>

<script>
  import Navigation from './nav/Navigation'
  import MeuHeader from './header/MeuHeader'
  import MeuFooter from './footer/MeuFooter'
    export default {
      name: "WapIndex",
      components : {
        Navigation,
        MeuHeader,
        MeuFooter,
      }
    }
</script>

<style scoped>

</style>
