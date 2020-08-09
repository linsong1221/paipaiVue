<template>
  <div>
    <div style="height: 60px; width: 100%;">
      <div style="z-index: 4">
        <van-row  style="height: 60px;">
          <van-col span="1">
          </van-col>
          <van-col span="14">
            <div style="line-height: 60px;">
              <img style="width: 40px; height: 40px;" src="../../assets/img/logo.png"/>
              <img style="width: 80px; height: 30px; margin-top: 5px; margin-left: 10px;" src="../../assets/img/logo-font.png"/>
            </div>
          </van-col>
          <van-col span="6">
            <div style="line-height: 60px;">
<!--              <van-button is-link @click="showPopup" type="info">信息按钮</van-button>-->
              <van-popup position="left" :style="{ height: '100%',width: '60%' }" v-model="showPop">
                <van-row  style="height: 48px;line-height: 48px">
                  <van-col style="text-align: center;border-right: 1px solid #ebedf0; height: 48px" span="12">
                    韩语
                  </van-col>
                  <van-col style="text-align: center;height: 48px" span="12">
                    中文
                  </van-col>
                </van-row>
                <van-cell-group>
                  <van-cell style="text-align: center" size="large" title="菜单"/>
                  <van-cell @click="routePage('1')" clickable="true" title="首页"/>
                  <van-cell  @click="routePage('2')" clickable="true" title="公司介绍"/>
                  <van-cell  @click="routePage('3')" clickable="true" title="外贸业务"/>
                  <van-cell  @click="routePage('4')" clickable="true" title="联系我们"/>
                </van-cell-group>
              </van-popup>
<!--              <van-popup v-model="show" position="top" :style="{ height: '30%' }" />-->
            </div>
          </van-col>
          <van-col span="2">
<!--            <van-icon @click="onClickNav()"  color="#F44336" style="line-height: 60px;" size="30px" name="wap-nav" />-->
            <van-icon @click="showPopup"  color="#F44336" style="line-height: 60px;" size="30px" name="wap-nav" />
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
        <li @click="onClickTitle('3')" class="nav-item" style="z-index: 0; visibility: inherit; opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0);">
          <a href="" title="外贸业务" class="nav-linkactive ">外贸业务</a>
        </li>
<!--        <li @click="onClickTitle('4')" class="nav-item" style="z-index: 0; visibility: inherit; opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0);">-->
<!--          <a href="" title="新闻" class="nav-linkactive ">新闻</a>-->
<!--        </li>-->
        <li @click="onClickTitle('5')" class="nav-item" style="z-index: 0; visibility: inherit; opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0);">
          <a href="" title="联系我们" class="nav-linkactive ">联系我们</a>
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
          show: false,
          showPop: false,
          loading: true,
        }
    },
      methods: {
        routePage(value) {
          let flag = 1;
          if(value === '2'){
            flag = 'wapCompany'
          } else if(value === '3') {
            flag = 'wapBusiness'
          } else if(value === '4') {
            flag = 'wapContactUs'
          } else {
            flag = 'wapHome'
          }
          this.showPop = false;
          this.$router.push({
            name: flag,
          });
        },
        showPopup() {
          this.showPop = true;
        },
        onClickNav(){
          this.show = !this.show;
        },
        onClickTitle(value){
          let flag = 1;
          if(value === '2'){
            flag = 'wapCompany'
          } else if(value === '3') {
            flag = 'wapBusiness'
          } else if(value === '4') {
            flag = 'wapNews'
          } else if(value === '5') {
            flag = 'wapContactUs'
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
