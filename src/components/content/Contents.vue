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
          <img src="../../assets/img/bk001.jpg"/>
        </div>
        <div class="item">
          <img src="../../assets/img/bk002.jpg"/>
        </div>
        <div class="item">
          <img src="../../assets/img/bk003.jpg"/>
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
    <div class="margin-top-10" style="width: 1250px; margin: 20px auto;">
      <div class="row">
        <div class="col-xs-8">
          22222222222222222222222
        </div>
        <div style="height: 200px;border: 1px solid #dedede;" class="col-xs-4">
          <div class="row" style="border-bottom: 1px solid #dedede; height: 40px;line-height: 40px;">
            <li class="home-tab tab-active">会员中心</li>
            <li class="home-tab">广告中心</li>
          </div>
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
</style>
