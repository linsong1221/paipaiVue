<template>
  <div>
    <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
      <!-- Indicators -->
      <ol class="carousel-indicators" style="margin: 0 auto;">
        <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
        <li data-target="#carousel-example-generic" data-slide-to="1"></li>
        <li data-target="#carousel-example-generic" data-slide-to="2"></li>
      </ol>

      <!-- Wrapper for slides -->
      <div class="carousel-inner" style="text-align:center;">
        <div class="item active">
          <img style="height: 640px;" src="../../assets/img/banner01.jpg"/>
        </div>
        <div class="item">
          <img style="height: 640px;" src="../../assets/img/bk002.jpg"/>
        </div>
        <div class="item">
          <img style="height: 640px;" src="../../assets/img/bk003.jpg"/>
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
    <div style="margin-top: 20px;">
      <!--<div class="col-xs-3">
        <img style="width: 250px;" src="../../assets/img/con1.jpg"/>
      </div>
      <div class="col-xs-3">
        <img style="width: 250px;" src="../../assets/img/con2.jpg"/>
      </div>
      <div class="col-xs-3">
        <img style="width: 250px;" src="../../assets/img/con3.jpg"/>
      </div>
      <div class="col-xs-3">
        <img style="width: 250px;"  src="../../assets/img/con4.jpg"/>
      </div>-->
      <img src="../../assets/img/q01.jpg"/>
      <img src="../../assets/img/q02.jpg"/>
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
</style>
