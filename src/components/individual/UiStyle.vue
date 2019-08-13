<template>
    <div>
        <div class="geu-common-auto-width" style="height: 500px;">
          <div class="col-xs-12 margin-top-40">
            <div class="nub_cot0">
              <div class="nub_sub0">
                联系我们
              </div>
            </div>
          </div>
          <div class="col-xs-12">
            <hr class="geu-home-leone-service-hr">
          </div>
          <hr class="geu-home-thinking-hr">
        </div>

    </div>
</template>

<script>
    export default {
        name: "UiStyle"
    }
</script>

<style scoped>
  .nub_cot0 {
    border-bottom:1px solid #ccc;
  }
  .nub_sub0 {
    height: 30px;
    border-bottom:#f44336 2px solid;
    margin-bottom:-2px;
    width:80px;
    color: rgb(220, 37, 37);
    font-size: 16px;
  }
  .geu-home-leone-service-hr {
    border: 0;
    height: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  }
  .geu-home-thinking-hr{
    width:60%;
    margin:0 auto;
    border: 0;
    height: 4px;
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(75, 200, 255, 0.75), rgba(0, 0, 0, 0));
  }
</style>
