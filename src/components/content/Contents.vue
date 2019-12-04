<template>
  <div>
    <!-- 轮播图 -->

    <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
      <!-- Indicators -->
      <ol class="carousel-indicators margin-0-auto">
        <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
        <li data-target="#carousel-example-generic" data-slide-to="1"></li>
      </ol>
      <!-- Wrapper for slides -->
      <div class="carousel-inner">
        <div class="item active">
          <div style="z-index: 1;font-size: 30px;color: yellow;position: absolute;" class="text-center col-xs-12 margin-top-100 animate two">
            <strong><span>G</span><span>E</span><span>U</span><span>M</span> <span>A</span><span>I</span> <span>I</span><span>N</span><span>T</span><span>E</span><span>R</span><span>N</span><span>A</span><span>T</span><span>I</span><span>O</span><span>N</span><span>A</span><span>L</span></strong>
          </div>
          <img  src="../../assets/img/banner1.jpeg"/>
        </div>
        <div class="item">
          <div style="z-index: 1;font-size: 30px;color: yellow;position: absolute;" class="text-center col-xs-12 margin-top-100 animate two">
            <strong><span>G</span><span>E</span><span>U</span><span>M</span> <span>A</span><span>I</span> <span>I</span><span>N</span><span>T</span><span>E</span><span>R</span><span>N</span><span>A</span><span>T</span><span>I</span><span>O</span><span>N</span><span>A</span><span>L</span></strong>
          </div>
          <img  src="../../assets/img/banner2.jpeg"/>
        </div>
      </div>
      <!-- Controls -->
      <a class="left carousel-control" href="#carousel-example-generic" data-slide="prev">
        <span class="glyphicon glyphicon-chevron-left"></span>
      </a>
      <a class="right carousel-control" href="#carousel-example-generic" data-slide="next">
        <span class="glyphicon glyphicon-chevron-right"></span>
      </a>
    </div>

    <!-- 服务项目 -->
    <div class="geu-home-leone-div">
      <div class="col-xs-12 text-center">
        <div class="col-xs-3">
          <img src="../../assets/img/contentp1.jpg"/>
        </div>
        <div class="col-xs-3">
          <img src="../../assets/img/contentp2.jpg"/>
        </div>
        <div class="col-xs-3">
          <img src="../../assets/img/contentp3.jpg"/>
        </div>
        <div class="col-xs-3">
          <img src="../../assets/img/contentp4.jpg"/>
        </div>
      </div>
      <div style="color: #5b6169; font-size: 20px;" class="col-xs-12 text-center margin-top-30">
        <div v-text="$t('m.homeContent1')" class="col-xs-3">
        </div>
        <div v-text="$t('m.homeContent2')" class="col-xs-3">
          丰富的外贸经验
        </div>
        <div v-text="$t('m.homeContent3')" class="col-xs-3">
          齐全的售后服务
        </div>
        <div v-text="$t('m.homeContent4')" class="col-xs-3">
          国际物流代理
        </div>
      </div>
      <div class="col-xs-12 margin-top-80">
        <div class="col-xs-1"></div>
        <div class="col-xs-3">
          <hr class="geu-home-leone-service-hr"/>
        </div>
        <div class="col-xs-4 text-center">
          <span v-text="$t('m.homeContent5')" class="geu-home-leone-service-btitle"></span>
          <span class="geu-home-leone-service-stitle">Service items</span>
        </div>
        <div class="col-xs-3">
          <hr class="geu-home-leone-service-hr"/>
        </div>
        <div class="col-xs-1"></div>
      </div>
      <div class="col-xs-12 margin-top-10">
        <div v-text="$t('m.homeContent6')" class="col-xs-10 col-xs-offset-1 geu-home-leone-service-content"></div>
      </div>
      <div class="col-xs-12 margin-top-10">
        <div v-text="$t('m.homeContent7')" class="col-xs-10 geu-home-leone-service-content col-xs-offset-1"></div>
      </div>
    </div>
    <div class="geu-home-letwo-back-div">
      <div>
        <img src="../../assets/img/con-background1.png"/>
      </div>
    </div>


    <div class="geu-home-letwo-div">

      <div  class="col-xs-12 margin-top-50">
        <div class="col-xs-offset-4 col-xs-4 text-center">
          <span v-text="$t('m.homeContent8')" class="geu-home-letwo-title"></span>
        </div>

        <div class="col-xs-offset-4 col-xs-home-con-icon1.png4 text-center">
          <span class="geu-home-letwo-content">SERVICE PHILOSOPHY</span>
        </div>
      </div>
      <div class="col-xs-12 margin-top-40 text-center">
        <div class="geu-home-letwo-philosophy-div">
          <div class="geu-home-letwo-philosophy-partone">
            <div class="text-center margin-top-70">
              <img class="geu-home-philosophy-img" src="../../assets/img/home-con-icon1.png"/>
            </div>
            <div class="text-center margin-top-25">
              <span v-text="$t('m.homeContent9')" class="geu-home-philosophy-top-content"></span>
            </div>
            <div class="col-xs-12 margin-top-50">
              <span v-text="$t('m.homeContent10')"  class="geu-home-philosophy-center-content"></span>
            </div>
            <div class="col-xs-12 margin-top-60">
              <span v-text="$t('m.homeContent11')" class="geu-home-philosophy-bottom-content"></span>
            </div>
            <div class="col-xs-12 margin-top-10">
              <span v-text="$t('m.homeContent12')" class="geu-home-philosophy-footer-content"></span>
            </div>
          </div>
          <div class="geu-home-letwo-philosophy-parttwo">
            <div class="text-center margin-top-70">
              <img class="geu-home-philosophy-img" src="../../assets/img/home-con-icon3.png"/>
            </div>
            <div class="text-center margin-top-25">
              <span v-text="$t('m.homeContent13')" class="geu-home-philosophy-top-content"></span>
            </div>
            <div class="col-xs-12 margin-top-50">
              <span v-text="$t('m.homeContent14')" class="geu-home-philosophy-center-content"></span>
            </div>
            <div class="col-xs-12 margin-top-60">
              <span v-text="$t('m.homeContent15')" class="geu-home-philosophy-bottom-content"></span>
            </div>
            <div class="col-xs-12 margin-top-10">
              <span v-text="$t('m.homeContent16')" class="geu-home-philosophy-footer-content"></span>
            </div>
          </div>
          <div class="geu-home-letwo-philosophy-partthree">
            <div class="text-center margin-top-70">
              <img class="geu-home-philosophy-img" src="../../assets/img/home-con-icon2.png"/>
            </div>
            <div class="text-center margin-top-25">
              <span v-text="$t('m.homeContent17')" class="geu-home-philosophy-top-content"></span>
            </div>
            <div class="col-xs-12 margin-top-50">
              <span v-text="$t('m.homeContent18')" class="geu-home-philosophy-center-content"></span>
            </div>
            <div class="col-xs-12 margin-top-60">
              <span v-text="$t('m.homeContent19')" class="geu-home-philosophy-bottom-content"></span>
            </div>
            <div class="col-xs-12 margin-top-10">
              <span v-text="$t('m.homeContent20')" class="geu-home-philosophy-footer-content"></span>
            </div>
          </div>
        </div>
      </div>

    </div>
    <div class="geu-home-thinking-back">

      <div class="geu-home-thinking-div">

        <div class="col-xs-12 text-center margin-top-65">
          <div v-text="$t('m.homeContent21')" class="col-xs-offset-4 col-xs-4 geu-home-thinking-ch-title"></div>
        </div>

        <div class="col-xs-12">
          <div class="col-xs-offset-4 col-xs-4">
            <hr class="geu-home-thinking-hr">
          </div>

        </div>
        <div class="col-xs-12 text-center">
          <span class="geu-home-thinking-en-title">THINKING</span>
        </div>
        <div  class="col-xs-12 text-center margin-top-30">
          <span v-text="$t('m.homeContent22')" class="geu-home-thinking-content"></span>
        </div>
        <div  class="col-xs-12 text-center margin-top-10">
          <span v-text="$t('m.homeContent23')" class="geu-home-thinking-content"></span>
        </div>
        <div class="col-xs-12 text-center margin-top-80">



          <div class="col-xs-12 text-center">
            <div class="col-xs-3">
              <img style="width: 50px; height: 50px" src="../../assets/img/contentth1.png"/>
            </div>
            <div class="col-xs-3">
              <img style="width: 50px; height: 50px" src="../../assets/img/contentth2.png"/>
            </div>
            <div class="col-xs-3">
              <img style="width: 50px; height: 50px" src="../../assets/img/contentth3.png"/>
            </div>
            <div class="col-xs-3">
              <img src="../../assets/img/contentth4.png"/>
            </div>
          </div>
          <div style="font-size: 18px;" class="col-xs-12 text-center margin-top-20">
            <div v-text="$t('m.homeContent24')" class="col-xs-3">
            </div>
            <div v-text="$t('m.homeContent25')" class="col-xs-3">
            </div>
            <div v-text="$t('m.homeContent26')" class="col-xs-3">
            </div>
            <div v-text="$t('m.homeContent27')" class="col-xs-3">
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--    底部-->
    <div class="geu-home-aboutus-back">
      <div class="geu-home-aboutus-div">
        <div class="col-xs-12 text-center margin-top-30">
          <span class="geu-home-aboutus-ch-title">关于我们 </span>
          <span class="geu-home-aboutus-en-title"> / about us</span>
        </div>
        <div class="col-xs-offset-1 col-xs-10 geu-home-aboutus-content-div margin-top-25" >
          <span class="geu-home-aboutus-content">锦艾国际贸易（大连）有限公司，创立于2018年，公司业务涉及国内一般贸易、货物进出口、技术进出口等多个领域，主要经营各类电子产品,汽车零配件，百货，建筑材料，布料，办公与家居用品，服装以及设备。现拥有合作密切的专业产品供应商，提供优质产品，客商分布韩国、日本等国家。目前公司拥有良好的信誉、稳固丰富的货源、稳定的海外客户和广阔的市场网络，在“有诚信、服务好、效率高”的企业宗旨指引下，定能更加快速的成长，同时，也期待与更多国内外朋友合作，共商大业，共创辉煌</span>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

  export default {
    name: "Company",

  }
</script>

<style lang="scss">
  .carousel-inner img{
    height: 478px !important;
    width: 100%;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  .home-tab {
    padding-left: 20px;
    padding-right: 20px;
    border-right: 1px solid #dedede;
    cursor: pointer;
  }
  .tab-active {
    color: #da1414;
  }
  .carousel-indicators{
    width:50px;
  }


  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  /*home css*/
  .geu-home-leone-div {
    width: 1190px;
    margin-left: auto;
    margin-right: auto;
    padding-top: 100px;
    height: 600px;
  }
  .geu-home-leone-service {
    width: 100%;
    height: 267px;
  }
  .geu-home-leone-service > div:nth-of-type(1){
    overflow: hidden;
    float: left;
  }
  .geu-home-leone-service-div{
    overflow: hidden;
    float: left;
    margin-left: 34px;
  }
  .geu-home-leone-service img{
    width: 150px;
    height: 150px;
    cursor: pointer;
    transition: all 0.5s;
  }
  .geu-home-leone-service img:hover{
    transform: scale(1.3);
  }

  .geu-home-leone-service-hr {
    border: 0;
    height: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  }
  .geu-home-leone-service-btitle{
    color: #000000;
    font-family: Microsoft YaHei;
    font-size: 28px;
  }
  .geu-home-leone-service-stitle{
    font-family: Arial,Helvetica,sans-serif;
    font-size: 24px;
    color: #999999;
  }
  .geu-home-leone-service-content{
    text-align: center;
    font-family: Microsoft YaHei;
    font-size: 20px; color: #434a54;
  }

  .geu-home-letwo-back-div{
    position: relative;
    margin-top: 15px;
    z-index: -1;
  }
  .geu-home-letwo-back-div > div{
    position: absolute;
  }
  .geu-home-letwo-back-div img{
    height: 653px;
    width: 100%;
  }
  .geu-home-letwo-div {
    width: 100px;
    height: 651px;
    margin-left: 300px;
    width: 1190px;
    margin-left: auto;
    margin-right: auto;
    z-index: 1;
  }
  .geu-home-letwo-title{
    color: #465b53;
    font-size: 36px;
  }
  .geu-home-letwo-content {
    color: #cfd9d5;
    font-size: 16px;
  }
  .geu-home-letwo-philosophy-div{
    margin: 0 auto;
    width: 990px;
  }
  .geu-home-letwo-philosophy-partone{
    width: 330px;
    height: 490px;
    background-color: rgb(233, 239, 237);
    float: left;
  }
  .geu-home-letwo-philosophy-parttwo{
    @extend .geu-home-letwo-philosophy-partone;
    background-color: rgb(213, 224, 221);
  }
  .geu-home-letwo-philosophy-partthree{
    @extend  .geu-home-letwo-philosophy-partone;
    background-color: rgb(50, 196, 141);
  }
  .geu-home-philosophy-img{
    width: 60px;
    height: 60px;
  }

  .geu-home-philosophy-top-content{
    color: #4a5752;
    font-size: 30px;
  }
  .geu-home-philosophy-center-content{
    color: #5d6763;
    line-height: 2;
    font-size: 15px;
  }
  .geu-home-philosophy-bottom-content{
    color: #5d6763;
    font-size: 18px;
  }
  .geu-home-philosophy-footer-content{
    color: #5d6763;
    font-size: 16px;
  }
  .geu-home-thinking-back{
    height: 700px;
    background-color: rgb(249, 249, 249);
  }
  .geu-home-thinking-div{
    width: 1190px;
    margin-left: auto;
    margin-right: auto;
    height: 200px;
  }
  .geu-home-thinking-ch-title{
    color: #000000;
    font-family: cursive;
    font-size: 28px;
  }

  .geu-home-thinking-hr{
    width:60%;
    margin:0 auto;
    border: 0;
    height: 4px;
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(75, 200, 255, 0.75), rgba(0, 0, 0, 0));
  }

  .geu-home-thinking-en-title{
    color: #000000;
    font-family: Arial Black;
    font-size: 38px;
  }
  .geu-home-thinking-content{
    color: #999999;
    font-size: 18px;
  }
  .geu-home-thinking-img{
    width: 675px;
    height: 270px;
  }
  .geu-home-aboutus-back{
    height: 500px;
    background-color: rgb(30, 49, 69)
  }
  .geu-home-aboutus-div{
    width: 1190px;
    margin-left: auto;
    margin-right: auto;
    height: 200px;
  }
  .geu-home-aboutus-ch-title{
    font-size: 30px;
    color: #ffffff;
  }
  .geu-home-aboutus-en-title{
    font-size: 20px;
    color: #ffffff;
  }
  .geu-home-aboutus-content-div{
    border: 2px dashed #d5d5d5;
    height: 300px;
    padding: 30px 70px;
  }
  .geu-home-aboutus-content{
    line-height: 2.5;color:
    rgb(255, 255, 255);
    font-size: 16px;
  }
  /*  文字动画*/
  .animate span {
    display: inline-block;
  }



  .animate span:nth-of-type(2) {
    animation-delay: .1s;
  }

  .animate span:nth-of-type(3) {
    animation-delay: .15s;
  }

  .animate span:nth-of-type(4) {
    animation-delay: .2s;
  }

  .animate span:nth-of-type(5) {
    animation-delay: .25s;
  }

  .animate span:nth-of-type(6) {
    animation-delay: .3s;
  }

  .animate span:nth-of-type(7) {
    animation-delay: .35s;
  }

  .animate span:nth-of-type(8) {
    animation-delay: .4s;
  }

  .animate span:nth-of-type(9) {
    animation-delay: .45s;
  }

  .animate span:nth-of-type(10) {
    animation-delay: .5s;
  }

  .animate span:nth-of-type(11) {
    animation-delay: .55s;
  }

  .animate span:nth-of-type(12) {
    animation-delay: .6s;
  }

  .animate span:nth-of-type(13) {
    animation-delay: .65s;
  }

  .animate span:nth-of-type(14) {
    animation-delay: .7s;
  }
  .animate span:nth-of-type(15) {
    animation-delay: .75s;
  }
  .animate span:nth-of-type(16) {
    animation-delay: .8s;
  }
  .animate span:nth-of-type(17) {
    animation-delay: .85s;
  }
  .animate span:nth-of-type(18) {
    animation-delay: .9s;
  }
  .animate span:nth-of-type(19) {
    animation-delay: .95s;
  }


  /* Animation Two */

  .two span {
    font-size: 54px;
    color: rgb(255, 252, 0);
    opacity: 0;
    transform: translate(200px, -100px) scale(2);
    animation: ballDrop .3s forwards;
  }

  @keyframes ballDrop {
    60% {
      transform: translate(0, 20px) rotate(-180deg) scale(.5);
    }
    100% {
      transform: translate(0) rotate(0deg) scale(1);
      opacity: 1;
    }
  }





</style>
