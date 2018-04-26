<template>
  <div class="kkk">
    <div style="height: 1000px;">
      footer
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
