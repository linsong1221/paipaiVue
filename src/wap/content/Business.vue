<template>
  <div style="padding-bottom: 50px">
    <van-row>
      <img style="width: 100%; height: 180px;" src="../../assets/img/businessback1.jpg"/>
    </van-row>
    <van-row  class="margin-top-25">
      <van-col offset="2" span="20"><van-divider><span style="font-size: 22px;color: #000000;font-family: Microsoft YaHei;">关于我们</span>
        <span style="font-size: 20px">About Us</span></van-divider></van-col>
    </van-row>
    <div style="line-height: 35px">
      <van-row  class="margin-top-10">
        <van-col offset="3" span="18"><span style="font-size: 14px">我司是一家专注用户体验便利，为客户提供完善的商业研究、产品提供、产品设计、OEM定制， 以及使用快捷运输方案提供优质服务的公司。</span></van-col>
      </van-row>
    </div>
    <div>
      <van-row>
        <van-col class="margin-top-20" offset="1" span="22">
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
  </div>
</template>

<script>
    export default {
      name: "Business",
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
