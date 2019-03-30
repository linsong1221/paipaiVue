<template>
  <div>
    <div class="col-xs-1"></div>
    <div style="position: relative; z-index: 1" class="col-xs-3">
      <img style="width: 65px; height: 65px;" src="../../assets/img/logo.png"/>
      <img style="width: 100px; height: 35px; margin-left: 20px;" src="../../assets/img/logo-font.png"/>

    </div>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item v-text="$t('m.home')" style="margin-right: 60px;" index="1"></el-menu-item>
      <!--<el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>-->
      <el-menu-item v-text="$t('m.company')" style="margin-right: 60px;" index="2"></el-menu-item>
      <el-menu-item v-text="$t('m.trade')" style="margin-right: 60px;" index="4"><a href="https://www.ele.me" target="_blank">外贸业务</a></el-menu-item>
      <el-menu-item v-text="$t('m.news')" style="margin-right: 60px;" index="4"><a href="https://www.ele.me" target="_blank">新闻中心</a></el-menu-item>
      <el-menu-item v-text="$t('m.contact')" style="margin-right: 60px;" index="4"><a href="https://www.ele.me" target="_blank">联系我们</a></el-menu-item>
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
