<template>
    <div>
      <van-row>
        <van-swipe style="height: 200px;" :autoplay="3000" indicator-color="white">
          <van-swipe-item>
            <img style="width: 100%; height: 100%;"  src="../../assets/img/banner1.jpeg"/>
          </van-swipe-item>
          <van-swipe-item>
            <img style="width: 100%; height: 100%;" src="../../assets/img/banner2.jpeg"/>
          </van-swipe-item>
        </van-swipe>
      </van-row>

      <div style="color: #5b6169;">
        <van-row class="margin-top-50">
          <van-col @touchstart="linsong" align="center" offset="1" span="11">
            <img style="max-width: 75%;" src="../../assets/img/contentp1.jpg"/>
          </van-col>
          <van-col align="center"span="11">
            <img style="max-width: 75%;"  src="../../assets/img/contentp2.jpg"/>
          </van-col>
        </van-row>
        <van-row class="margin-top-20">
          <van-col align="center" offset="1" span="11">
            优秀的产品质量
          </van-col>
          <van-col align="center"span="11">
            丰富的外贸经验
          </van-col>
        </van-row>
        <van-row class="margin-top-50">
          <van-col align="center" offset="1" span="11">
            <img style="max-width: 75%;" src="../../assets/img/contentp3.jpg"/>
          </van-col>
          <van-col align="center"span="11">
            <img style="max-width: 75%;"  src="../../assets/img/contentp4.jpg"/>
          </van-col>
        </van-row>
        <van-row class="margin-top-20">
          <van-col align="center" offset="1" span="11">
            国际物流代理
          </van-col>
          <van-col align="center"span="11">
            齐全的售后服务
          </van-col>
        </van-row>
      </div>
      <div class="margin-top-60" style="background-color: #f9f9f9;">
        <van-row  class="margin-top-25">
          <van-col offset="2" span="20"><van-divider><span style="font-size: 22px;"> 服务项目</span></van-divider></van-col>
        </van-row>
        <van-row  class="margin-top-10">
          <van-col offset="3" span="18">我司是一家专注用户体验便利，为客户提供完善的商业研究、产品提供、产品设计、OEM定制， 以及使用快捷运输方案提供优质服务的公司。</van-col>
        </van-row>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Contents"
    }
</script>

<style scoped>

</style>
