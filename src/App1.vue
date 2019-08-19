<template>
  <div id="app1">
    <el-button type="primary" @click="increment">增加</el-button>
    <el-button type="default" @click="decrement">减少</el-button>
    <div>
      现在数字为: {{ count}},它现在是
    </div>
    <Index></Index>
  </div>
</template>
<script>
import Index from './components/Index'
import {mapGetters, mapActions} from 'vuex'
export default {
  name: 'app1',
  data () {
    return {
      endTime : '2017-11-21 11:01:00',
      message: ''
    }
  },
  computed:mapGetters([
    'count',
    'getOdd'
  ]),
  methods:mapActions([
    'increment',
    'decrement',
  ]),
  components : {
    Index
  }

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
