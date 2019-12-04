<template>
    <div style="height: 2500px;">
      <van-row>
        <van-swipe style="" :autoplay="3000" indicator-color="white">
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
          <van-col align="center" offset="1" span="11">
            <img style="max-width: 50%;" src="../../assets/img/contentp1.jpg"/>
          </van-col>
          <van-col align="center"span="11">
            <img style="max-width: 50%;"  src="../../assets/img/contentp2.jpg"/>
          </van-col>
        </van-row>
        <van-row class="margin-top-20">
          <van-col align="center" offset="1" span="11">
            <span style="color: #666666;">优秀的产品质量</span>
          </van-col>
          <van-col align="center"span="11">
            <span style="color: #666666;">丰富的外贸经验</span>
          </van-col>
        </van-row>
        <van-row class="margin-top-50">
          <van-col offset="1" align="center" span="11">
            <img style="max-width: 50%;"  src="../../assets/img/contentp4.jpg"/>
          </van-col>
          <van-col align="center" span="11">
            <img style="max-width: 50%;" src="../../assets/img/contentp3.jpg"/>
          </van-col>

        </van-row>
        <van-row class="margin-top-20">
          <van-col align="center" offset="1" span="11">
            <span style="color: #666666;">国际物流代理</span>
          </van-col>
          <van-col align="center"span="11">
            <span style="color: #666666;">齐全的售后服务</span>
          </van-col>
        </van-row>
      </div>
      <div class="margin-top-60" style="line-height: 35px">
        <van-row  class="margin-top-40">
          <van-col offset="2" span="20"><van-divider><span style="font-size: 22px;"> 服务项目</span></van-divider></van-col>
        </van-row>
        <van-row  class="margin-top-10">
          <van-col offset="3" span="18"><span style="font-size: 14px">我司是一家专注用户体验便利，为客户提供完善的商业研究、产品提供、产品设计、OEM定制， 以及使用快捷运输方案提供优质服务的公司。</span></van-col>
        </van-row>
      </div>

      <div>
        <van-row>
          <van-col class="margin-top-30" offset="1" span="22">
            <van-swipe :show-indicators = false @change="onChange">
              <van-swipe-item>
                <div class="margin-top-30 wap-home-inner1" style="height: 459px; ">
                  <div class="inner">
                    <van-row>
                      <van-col class="margin-top-45" offset="1" align="center" span="22">
                        <img style="width: 50px; height: 50px;" src="../../assets/img/home-con-icon1.png"/>
                      </van-col>
                    </van-row>
                    <van-row>
                      <van-col  class="margin-top-20" offset="1" align="center" span="22">
                        <span style="color: white; font-size: 30px;">快速响应</span>
                      </van-col>
                    </van-row>
                    <van-row>
                      <van-col class="margin-top-30" offset="1" align="center" span="22">
                        <span style="font-size: 14px; color: white; line-height: 35px;">我们提供7x24小时的全天候响应速度，随时随地为您服务，做到行业领衔的响应速度</span>
                      </van-col>
                    </van-row>
                    <van-row>
                      <van-col class="margin-top-45" offset="1" align="center" span="22">
                        <span style="font-size: 18px; color: white;">定制设计</span>
                      </van-col>
                    </van-row>
                    <van-row>
                      <van-col class="margin-top-20" align="center" span="24">
                        <span style="font-size: 14px;color: white;">产品确认，海运/空运，通关配送。</span>
                      </van-col>
                    </van-row>
                  </div>
                </div>
              </van-swipe-item>

              <van-swipe-item>
                <div class="margin-top-30 wap-home-inner2" style="height: 459px; ">
                  <div class="inner">
                    <van-row>
                      <van-col class="margin-top-45" offset="1" align="center" span="22">
                        <img style="width: 50px; height: 50px;" src="../../assets/img/home-con-icon2.png"/>
                      </van-col>
                    </van-row>
                    <van-row>
                      <van-col  class="margin-top-20" offset="1" align="center" span="22">
                        <span style="color: white; font-size: 30px;">诚信至上</span>
                      </van-col>
                    </van-row>
                    <van-row>
                      <van-col class="margin-top-30" offset="1" align="center" span="22">
                        <span style="font-size: 14px; color: white; line-height: 35px;">公司秉承“以人为本、追求超越”的经营理念;恪守“诚信为本、客户至尊”为服务宗旨。</span>
                      </van-col>
                    </van-row>
                    <van-row>
                      <van-col class="margin-top-45" offset="1" align="center" span="22">
                        <span style="font-size: 18px; color: white;">OEM</span>
                      </van-col>
                    </van-row>
                    <van-row>
                      <van-col class="margin-top-20" align="center" span="24">
                        <span style="font-size: 14px;color: white;">专业设计，提供优质产品。</span>
                      </van-col>
                    </van-row>
                  </div>
                </div>
              </van-swipe-item>

              <van-swipe-item>
                <div class="margin-top-30 wap-home-inner3" style="height: 459px; ">
                  <div class="inner">
                    <van-row>
                      <van-col class="margin-top-45" offset="1" align="center" span="22">
                        <img style="width: 50px; height: 50px;" src="../../assets/img/home-con-icon1.png"/>
                      </van-col>
                    </van-row>
                    <van-row>
                      <van-col  class="margin-top-20" offset="1" align="center" span="22">
                        <span style="color: white; font-size: 30px;">坚持不断创新</span>
                      </van-col>
                    </van-row>
                    <van-row>
                      <van-col class="margin-top-30" offset="1" align="center" span="22">
                        <span style="font-size: 14px; color: white; line-height: 35px;">通过坚持不懈地开拓创新、与时俱进，公司不断开创新局面、实现新跨越。</span>
                      </van-col>
                    </van-row>
                    <van-row>
                      <van-col class="margin-top-45" offset="1" align="center" span="22">
                        <span style="font-size: 18px; color: white;">访问工厂</span>
                      </van-col>
                    </van-row>
                    <van-row>
                      <van-col class="margin-top-20" align="center" span="24">
                        <span style="font-size: 14px;color: white;">提供专业翻译人员，日程及住宿安排。</span>
                      </van-col>
                    </van-row>
                  </div>
                </div>
              </van-swipe-item>

            </van-swipe>
          </van-col>
        </van-row>
      </div>
      <van-row  class="margin-top-50">
        <van-col offset="2" span="20"><van-divider><span style="font-size: 22px;">我们的思考方式</span></van-divider></van-col>
      </van-row>
      <van-row  class="margin-top-5">
        <van-col offset="2" span="20">
          <hr class="geu-home-thinking-hr">
        </van-col>
      </van-row>
      <van-row  class="margin-top-20">
        <van-col offset="3" span="18">
          <span style="font-size: 14px; line-height: 35px;">我们坚持站在客户的角度思考问题，用领先的互动策略思考模式打破常规。我们坚信每一个成功项目都是良好合作的成果，我们共同思考和创新，帮助客户寻找接近目标受众最佳互动解决方案。</span>
        </van-col>
      </van-row>

      <van-row  class="margin-top-50">

        <van-col align="center" offset="1" span="11">
          <img style="width: 50px; height: 50px" src="../../assets/img/contentth1.png"/>
        </van-col>
        <van-col align="center" span="11">
          <img style="width: 50px; height: 50px" src="../../assets/img/contentth2.png"/>
        </van-col>

      </van-row>
      <van-row  class="margin-top-20">
        <van-col align="center" offset="1" span="11">
          策略
        </van-col>
        <van-col align="center" span="11">
          创意
        </van-col>
      </van-row>
      <van-row  class="margin-top-40">

        <van-col align="center" offset="1" span="11">
          <img style="width: 50px; height: 50px" src="../../assets/img/contentth3.png"/>
        </van-col>
        <van-col align="center" span="11">
          <img style="width: 50px; height: 50px" src="../../assets/img/contentth4.png"/>
        </van-col>

      </van-row>
      <van-row  class="margin-top-20">
        <van-col align="center" offset="1" span="11">
          营销
        </van-col>
        <van-col align="center" span="11">
          价值
        </van-col>
      </van-row>



      <van-row  style="background-color: rgb(248, 248, 248);line-height: 30px" class="margin-top-80">
        <div style="height: 460px;">
          <van-row>
            <van-col class="margin-top-40" offset="1"  span="22" style=" font-size: 24px;">
               关于我们
            </van-col>
          </van-row>
          <van-row>
            <van-col class="margin-top-15"  offset="1" span="22">
              锦艾国际贸易（大连）有限公司，创立于2018年，公司业务涉及国内一般贸易、货物进出口、技术进出口等多个领域，主要经营各类电子产品,汽车零配件，百货，建筑材料，布料，办公与家居用品，服装以及设备。现拥有合作密切的专业产品供应商，提供优质产品，客商分布韩国、日本等国家。目前公司拥有良好的信誉、稳固丰富的货源、稳定的海外客户和广阔的市场网络，在“有诚信、服务好、效率高”的企业宗旨指引下，定能更加快速的成长，同时，也期待与更多国内外朋友合作，共商大业，共创辉煌
            </van-col>
          </van-row>
        </div>
      </van-row>
    </div>
</template>

<script>
    export default {
      name: "Contents",
      methods : {
        onChange(index) {
          this.current = index;
        }
      },
      data (){
        return {
          current: 0,
        }
      }
    }
</script>

<style scoped>
.wap-home-inner1 {
  background:url("../../assets/img/waphome1.jpg");
  background-size:100%;
}
.wap-home-inner2 {
   background:url("../../assets/img/waphome2.jpg");
   background-size:100%;
 }

.wap-home-inner3 {
  background:url("../../assets/img/waphome3.jpg");
  background-size:100%;
}
.inner {
  height: 459px;
  background: rgba(0,0,0,.5);
}
.geu-home-thinking-hr{
  width:60%;
  margin:0 auto;
  border: 0;
  height: 4px;
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(75, 200, 255, 0.75), rgba(0, 0, 0, 0));
}

</style>
