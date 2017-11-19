<template>
  <div id="app">
    <el-button type="primary" @click="increment">增加</el-button>
    <el-button type="default" @click="decrement">减少</el-button>
    <el-button type="default"  @click="clickOdd">偶数才能增加</el-button>
    <el-button type="default"  @click="clickAsync">点击异步</el-button>
    <div>
      现在数字为: {{ count}},它现在是
    </div>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld'
import {mapGetters, mapActions} from 'vuex'

export default {
  name: 'app',
  computed:mapGetters([
    'count',
    'getOdd'
  ]),
  methods:mapActions([
    'increment',
    'decrement',
    'clickOdd',
    'clickAsync'
  ]),

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
