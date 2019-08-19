<template>
    <div>
      <MeuHeader></MeuHeader>
      <Navigation></Navigation>
      <router-view></router-view>
      <h1>手机端底部</h1>
    </div>
</template>

<script>
  import Navigation from './nav/Navigation'
  import MeuHeader from './header/MeuHeader'
    export default {
      name: "WapIndex",
      components : {
        Navigation,
        MeuHeader,
      }
    }
</script>

<style scoped>

</style>
