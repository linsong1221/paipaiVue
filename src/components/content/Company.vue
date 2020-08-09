<template>
  <div>
    <!--      <h1>123123</h1>-->
    <!--        <img width="100%" class="" src="../../assets/img/company_building2.jpg"/>-->


    <div style="height: 478px;">
      <img style="height: 478px; width: 100%;" src="../../assets/img/companyback1.jpg"/>
    </div>
    <div style="height: 1450px;" class="geu-common-auto-width margin-top-65">

      <div class="col-xs-12">
        <!--        <div class="col-xs-1"></div>-->
        <div class="col-xs-4">
          <hr class="geu-home-leone-service-hr"/>
        </div>
        <div class="col-xs-4 text-center">
          <span class="geu-company-leone-service-btitle" v-text="$t('m.homeContent28')">关于我们 / </span>
          <span class="geu-company-leone-service-stitle">About Us</span>
        </div>
        <div class="col-xs-4">
          <hr class="geu-home-leone-service-hr"/>
        </div>
        <!--        <div class="col-xs-1"></div>-->
      </div>
      <div class="col-xs-12 text-center margin-top-15">
        <span style="font-size: 24px; color: #999999;">做外贸服务，我们是认真的!</span>
      </div>

      <div class="col-xs-12 margin-top-50" style="font-size: 16px;">
        <div class="col-offset-3 text-center" v-text="$t('m.company1')"></div>
        <div class="col-offset-3 text-center margin-top-10"  v-text="$t('m.company2')"></div>
        <div class="col-offset-3 text-center margin-top-10"  v-text="$t('m.company3')"></div>
        <div class="col-offset-3 text-center margin-top-10"  v-text="$t('m.company4')"></div>
        <!--          <div class="col-offset-3 text-center margin-top-60">-->
        <!--            <img class="" src="../../assets/img/companylogo.jpg"/>-->
        <!--          </div>-->
      </div>

      <div class="col-xs-12 margin-top-40" style="font-size: 16px;">
        <div class="col-xs-offset-1 col-xs-10 text-center">
          <img style="height: 400px;" src="../../assets/img/companyphoto.jpg"/>
        </div>
      </div>
      <div class="col-xs-12 margin-top-60">
        <div class="col-xs-12">
          <strong style="font-size: 16px;">一个破茧而出的进出口外贸多类型特色对外贸易公司</strong>
        </div>
      </div>
      <div class="col-xs-12 margin-top-10">
        <div class="col-xs-2">
          <hr/>
        </div>
      </div>
      <div class="col-xs-12 margin-top-10">
        <div class="col-xs-12" style="font-size: 16px;">
          围绕电子商务、产业结构集产、供、销一条龙，贸、工、农一体化，深入推进、自主创新、发展壮大。
        </div>
      </div>
      <div class="col-xs-12 margin-top-60">
        <div style="text-align: center;" class="col-xs-12">
          <img  src="../../assets/img/companyPhoto3.jpg"/>
        </div>
      </div>



      <div class="col-xs-12">
        <h1><div id="slidemeta">文字</div></h1>
      </div>



    </div>

  </div>
</template>

<script>

  export default {
    name: "Company",
  }
</script>

<style scoped>

  .geu-company-leone-service-btitle{
    color: #000000;
    font-family: Microsoft YaHei;
    font-size: 28px;
  }
  .geu-company-leone-service-stitle{
    font-family: Arial,Helvetica,sans-serif;
    font-size: 24px;
    color: #999999;
  }
  .geu-business-philosophy-img{
    width: 60px;
    height: 60px;
  }



  #slidemeta {
    display: none;
    right:0;
    position: absolute;
    font-size: 14px;
    color: #ccc;
    font-family:arial
  }
  h1:hover #slidemeta{
    display:block;
    -webkit-animation:slide .8s ease-in;
    -webkit-animation-fill-mode:forwards;
    -moz-animation:slide .8s ease-in;
    -moz-animation-fill-mode:forwards;
  }
  @-webkit-keyframes slide{
    0%   { right:410px; opacity:0;}
    70%  { right:0;opacity:0.7}
    100% { opacity:1;right:85px;}
  }
  @-moz-keyframes slide{
    0%   { right:410px; opacity:0;}
    70%  { right:0;opacity:0.7}
    100% { opacity:1;right:85px;}
  }
</style>
