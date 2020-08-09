<template>
    <div style="height: 1050px">
      <img style="height: 180px; width: 100%" src="../../assets/contactusp3.png"/>
      <van-row class="margin-top-15">
        <van-col style="color: rgb(121, 121, 121);font-size: 18px;font-weight: bold" offset="1" span="20">大连营业部</van-col>
      </van-row>
      <van-row class="margin-top-5">
        <van-col style="color: rgb(121, 121, 121);font-size: 16px;" offset="1" span="20">手机号码: +86-157-3413-1263</van-col>
      </van-row>
      <van-row class="margin-top-5">
        <van-col style="color: rgb(121, 121, 121);font-size: 16px;" offset="1" span="22">地址：辽宁省大连市甘井子区恩泽东园56号1层</van-col>
      </van-row>
      <van-row class="margin-top-5">
        <van-col style="color: rgb(121, 121, 121);font-size: 16px;" offset="1" span="20">邮编: 132500</van-col>
      </van-row>
      <van-row class="margin-top-15">
        <van-col style="color: rgb(121, 121, 121);font-size: 18px;font-weight: bold" offset="1" span="20">韩国营业部</van-col>
      </van-row>
      <van-row class="margin-top-5">
        <van-col style="color: rgb(121, 121, 121);font-size: 16px;" offset="1" span="20">手机号码: +82-010-6557-1569</van-col>
      </van-row>
      <van-row class="margin-top-10">
        <van-col style="color: rgb(121, 121, 121);font-size: 16px;" offset="1" span="20">
          <img style="width: 150px; height: 150px;" src="../../assets/img/wechatpic.jpg"/>
        </van-col>
      </van-row>
      <div class="col-xs-12" >
        <div style="height:400px; border: 1px solid #a2a2a2;" class=" col-xs-12 text-center margin-top-70" id="geumap">
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "ContactUs",
      mounted() {
        var map = new BMap.Map("geumap");
        var x = 121.514683;
        var y = 38.941891;
        var ggPoint = new BMap.Point(x,y);

        map.centerAndZoom(ggPoint,13);
// 创建地图实例
//var point = new BMap.Point(116.404, 39.915);
// 创建点坐标
//map.centerAndZoom(point, 15);
        map.addControl(new BMap.NavigationControl());
        map.addControl(new BMap.ScaleControl());
        map.addControl(new BMap.OverviewMapControl());
        map.addControl(new BMap.MapTypeControl());
        map.enableScrollWheelZoom(true);

        var markergg = new BMap.Marker(ggPoint);
        map.addOverlay(markergg); //添加谷歌marker
        var labelgg = new BMap.Label("锦艾国际贸易（大连）有限公司",{offset:new BMap.Size(20,-10)});
        markergg.setLabel(labelgg); //添加谷歌label
        // $("#box").focus(function(){
        //   document.activeElement.blur();
        // })
      }
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
</style>
