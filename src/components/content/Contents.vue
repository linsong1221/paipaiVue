<template>
  <div>
    <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
      <!-- Indicators -->
      <ol class="carousel-indicators" style="margin: 0 auto;">
        <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
        <li data-target="#carousel-example-generic" data-slide-to="1"></li>
      </ol>

      <!-- Wrapper for slides -->
      <div class="carousel-inner" style="text-align:center;">
        <div class="item active">
          <img style="height: 478px; width: 100%" src="../../assets/img/banner1.jpeg"/>
        </div>
        <div class="item">
          <img style="height: 478px; width: 100%" src="../../assets/img/banner2.jpeg"/>
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

    <div style="width: 1190px; margin-left: auto;margin-right: auto; height: 1000px; padding-top: 100px;">
      <div style="width: 100%; height: 267px;">
        <div class="geu-home-con" style="float: left;">
          <img width="272px" height="267px" src="../../assets/img/con1.png"/>
        </div>
        <div class="geu-home-con" style="float: left; margin-left: 34px;">
          <img width="272px" height="267px" src="../../assets/img/con2.png"/>
        </div>
        <div class="geu-home-con" style="float: left; margin-left: 34px;">
          <img width="272px" height="267px" src="../../assets/img/con3.png"/>
        </div>
        <div class="geu-home-con" style="float: right; margin-left: 34px;">
          <img width="272px" height="267px" src="../../assets/img/con4.png"/>
        </div>

      </div>
      <div style="width: 100%; height: 42px; margin-top: 50px;">
          <div class="col-xs-12">
            <div class="col-xs-1"></div>
              <div class="col-xs-3">
                <hr class="style-one"/>
              </div>
              <div class="col-xs-4" style="text-align: center;">
                <span style="color: #000000;
    font-family: Microsoft YaHei;
    font-size: 24px;">服务项目 / </span>  <span style="font-family: Arial,Helvetica,sans-serif; font-size: 22px; color: #999999">Service items</span>
              </div>
              <div class="col-xs-3">
                <hr class="style-one"/>
              </div>
            <div class="col-xs-1"></div>
          </div>
        <div class="col-xs-12" style="margin-top: 10px;">
          <div class="col-xs-2"></div>
          <div style="text-align: center; font-family: Microsoft YaHei; font-size: 16px; color: #434a54;" class="col-xs-8"> 我司是一家专注用户体验便利，为客户提供完善的商业研究、产品提供、产品</div>
          <div class="col-xs-2"></div>
        </div>
        <div class="col-xs-12" style="margin-top: 10px;">
          <div class="col-xs-2"></div>
          <div style="text-align: center; font-family: Microsoft YaHei; font-size: 16px; color: #434a54;" class="col-xs-8"> 设计、OEM定制， 以及使用快捷运输方案提供优质服务的公司。</div>
          <div class="col-xs-2"></div>
        </div>


      </div>


    </div>


  </div>
</template>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  /*home css*/
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

  .style-one {
    border: 0;
    height: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  }

  .geu-home-con{
    overflow: hidden;
  }
  .geu-home-con img{
    cursor: pointer;
    transition: all 0.5s;
  }
  .geu-home-con img:hover{
    transform: scale(1.3);
  }
</style>
