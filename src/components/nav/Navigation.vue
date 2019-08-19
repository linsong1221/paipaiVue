<template>
  <div>
    <div class="col-xs-1"></div>
    <div style="position: relative; z-index: 1" class="col-xs-3">
      <img style="width: 65px; height: 65px;" src="../../assets/img/logo.png"/>
      <img style="width: 100px; height: 35px; margin-left: 20px;" src="../../assets/img/logo-font.png"/>

    </div>
    <el-menu :default-active="this.$route.path" router  class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item v-text="$t('m.home')" style="margin-right: 60px; font-size: 16px;" index="/index"></el-menu-item>
      <el-menu-item v-text="$t('m.company')" style="margin-right: 60px; font-size: 16px;" index="company">/</el-menu-item>
      <el-menu-item v-text="$t('m.trade')" style="margin-right: 60px; font-size: 16px;" index="business"></el-menu-item>
      <el-menu-item v-text="$t('m.news')" style="margin-right: 60px; font-size: 16px;" index="news"></el-menu-item>
      <el-menu-item v-text="$t('m.contact')" style="margin-right: 60px; font-size: 16px;" index="contactus"></el-menu-item>
    </el-menu>
    <div class="line"></div>
  </div>

</template>
<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style>

</style>
