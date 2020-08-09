<template>
  <div id="app">
        <div v-if="ifMobile">
          <WapIndex></WapIndex>
        </div>
        <div v-else>
          <Index></Index>
        </div>
<!--    <Index></Index>-->
  </div>
</template>
<script>
  import Index from './components/Index'
  import WapIndex from './wap/WapIndex'
  export default {
    name: 'app',
    data () {
      return {
        ifMobile: false,
      }
    },
    components : {
      Index,
      WapIndex
    },
    mounted() {
      if (this._isMobile()) {
        this.ifMobile = true;
      } else {
        this.ifMobile = false;
      }
    },
    updated() {

      window.scroll(0,0);

    },
    methods :{
      _isMobile () {
        if(/Android|webOS| iPhone | iPad | iPod |BlackBerry|opera mini|opera mobile|appleWebkit.*mobile|mobile/i.test(
          navigator.userAgent)) {
          return true;
        }
      },


    }
  }
</script>

<style>
  @import "assets/css/common.scss";
</style>
