<template>
  <div>
    <div style="height: 46px; width: 100%;">
      <div style="z-index: 4">
        <van-row  style="height: 46px;">
          <van-col span="1">
          </van-col>
          <van-col span="20">
            <div style="line-height: 46px;">
              <img style="width: 40px; height: 40px;" src="../../assets/img/logo.png"/>
            </div>
          </van-col>
          <van-col span="2">
            <van-icon @click="onClickNav()"  color="#F44336" style="line-height: 46px;" size="30px" name="wap-nav" />
          </van-col>
        </van-row>
      </div>
    </div>


<!--    <van-overlay custom-style="height:100px" :show="show" @click="show = false" />-->
    <div v-if="show" class="navbar-collapse navbar-collapse-toolbar pull-md-right p-0 collapse in" id="head_nav_met_11_7_115-collapse" style="max-height: 712px;z-index: 3;width: 100%;
    background-color: #fffefe;
    border-top: 1px solid #e1e1e1;" aria-expanded="true">
      <ul class="nav navbar-nav navlist">
        <li @click="onClickTitle('1')"  class="nav-item" style="z-index: 0; visibility: inherit; opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0);">
          <a href="" title="首页" class="nav-linkactive ">首页</a>
        </li>
        <li @click="onClickTitle('2')" class="nav-item" style="z-index: 0; visibility: inherit; opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0);">
          <a href="" title="公司介绍" class="nav-linkactive ">公司介绍</a>
        </li>
        <li class="nav-item" style="z-index: 0; visibility: inherit; opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0);">
          <a href="" title="公司介绍" class="nav-linkactive ">外贸业务</a>
        </li>
        <li class="nav-item" style="z-index: 0; visibility: inherit; opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0);">
          <a href="" title="公司介绍" class="nav-linkactive ">新闻</a>
        </li>
        <li class="nav-item" style="z-index: 0; visibility: inherit; opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0);">
          <a href="" title="公司介绍" class="nav-linkactive ">联系我们</a>
        </li>
<!--        <li class="nav-item dropdown m-l-0" style="z-index: 0; visibility: inherit; opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0);">-->
<!--          <a href="about1/" target="_self" title="关于我们" class="nav-link dropdown-toggle " data-toggle="dropdown" data-hover="dropdown">-->
<!--            关于我们</a>-->
<!--          <div class="dropdown-menu dropdown-menu-right dropdown-menu-bullet two-menu">-->
<!--            <a href="about1/show.php?id=10" target="_self" title="公司简介" class="dropdown-item hassub ">首页</a>-->
<!--            <a href="about1/show.php?id=11" target="_self" title="企业框架" class="dropdown-item hassub ">公司介绍</a>-->
<!--            <a href="about1/show.php?id=19" target="_self" title="联系我们" class="dropdown-item hassub ">外贸业务</a>-->
<!--          </div>-->
<!--        </li>-->
      </ul>


  </div>




  </div>

</template>

<script>
    export default {
      name: "navigation",
      data (){
        return {
          current: 0,
          show: false
        }
    },
      methods: {
        onClickNav(){
          this.show = !this.show;
        },
        onClickTitle(value){
          let flag = 1;
          if(value === '2'){
            flag = 'wapNews'
          } else {
            flag = 'wapHome'
          }
          this.$router.push({
            name: flag,
          });

        }
      }
    }
</script>

<style scoped>
  .sub {
    display:block;
    position: absolute;
    z-index: 3;
    float:right;
    height:40px;
  }



  .block {
    width: 120px;
    height: 120px;
    background-color: #fff;
  }
</style>
