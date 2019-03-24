<template>
  <div>
    <div style="height: 78px; background-color: black">

      <div style="width: 1190px; margin-left: auto; margin-right: auto;">

        <div class="col-xs-12 text-center" style="margin-top: 30px;">
          <span style="font-size: 14px; color: #ffffff;">版权所有： 锦艾国际贸易（大连）有限公司  备案号： 辽ICP备18018441号-1</span>
        </div>

      </div>
    </div>
  </div>
</template>

<style>
  .kkk{
    background-color: #11beff;
  }
</style>
<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
