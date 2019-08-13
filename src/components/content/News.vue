<template>
    <div>
      <div style="height: 2300px;">
        <img style="width:100%;height: auto;" src="../../assets/img/news_banner.jpg"/>
        <div style="height: 46px;border-bottom: 1px solid #dddddd;">
          <div class="geu-common-auto-width">
            <div class="col-xs-12">
              <div style="line-height: 46px;" class="col-xs-4">
                <span class="glyphicon glyphicon-home"></span>
                <span style="color: #787878; margin-left: 10px;">   首页   >    新闻咨询</span>
              </div>
            </div>
          </div>

        </div>
        <div v-for="item in news"  style="height: 172px" class="geu-common-auto-width margin-top-60">
          <div class="col-xs-12 donghua">
            <div style="width: 260px; height: 130px" class="col-xs-3 news-img geu-cursor">
              <img style="width:100%;height: auto;overflow: hidden;" :src="item.imgurl" />
            </div>
            <div  class="col-xs-8 margin-top-10 ">
              <div style="height: 30px; line-height: 30px" class="geu-cursor">
                <span class="geu-news-title">
                    {{item.title}}
                </span>
              </div>
              <div class="" style="padding: 10px 10px 0 0;font-size: 13px;color: #999; line-height: 26px;">
                <div style="width: 98%;font-size: 16px;" class="geu-news-content">
                  <span>{{item.content}}</span>
                </div>
              </div>
            </div>
            <div style="font-size: 13px;color: #999; float: right; padding-left: 0; padding-right: 0" class="col-xs-1">
              <div  class="margin-top-25 geu-news-time">
                <span>{{item.time}}</span>
              </div>
              <div style="width: 67px;height: 25px;line-height: 25px;" class="margin-top-25 geu-cursor ">
                <span style="float: right;"  class="geu-news-more">更多 <i class="el-icon-arrow-right"></i></span>
              </div>
            </div>
          </div>
          <div class="col-xs-12 margin-top-20">
            <div class="col-xs-12">
              <hr/>
            </div>
          </div>
        </div>
<!--        分页-->
        <div class="col-xs-12 text-center margin-top-30">
          <el-pagination
            :page-size="6"
            :pager-count="6"
            layout="prev, pager, next"
            :total="1000">
          </el-pagination>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      name: "News",
      data(){
          return{
            news:[
              {
                title:'中铁上海设计院集团有限公司总体设计的连淮扬镇铁路开工建设',
                content:'2014年12月28日，中铁上海设计院集团有限公司总体设计的连淮扬镇铁路开工建设。连镇铁路地处我国东部沿海地带，是江苏省“三纵四横”快速铁路网的中轴线，是长三角城市群区...',
                time:'2015-05-28',
                imgurl:require('@/assets/img/news_p1.jpg'),
              },
              {
                title:'成都院设计木里河卡基娃水电站初期蓄水导流洞成功下闸',
                content:'据介绍，在2015年1月8日12点18分，在参建各方的共同努力下，成都院设计的木里河卡基娃水电站初期蓄水导流洞成功下闸，标志着卡基娃水电站建设进入一个新的里程碑，为2月底...',
                time:'2015-05-28',
                imgurl:require('@/assets/img/news_p2.jpg'),
              },
              {
                title:'河南院完成上海庙～山东±800千伏特高压工程野外地质勘探工作',
                content:'2015年1月27日，河南设计院承担的上海庙～山东 800千伏特高压工程(包11)野外地质勘探工作顺利完成，该院岩土专业技术人员顶风冒雪，坚守工地一个多月，为该工程的顺利推进...',
                time:'2015-05-28',
                imgurl:require('@/assets/img/news_p3.jpg'),
              },
              {
                title:'中国建筑标准设计研究院创新推动住宅产业化发展',
                content:'作为我国现代建筑产业最具实力的综合性科技研发企业，中国建筑标准设计研究院（以下简称：标准院）十分关注建筑业对于环境所产生的影响。当前，建筑业在国民经济中起着举足...',
                time:'2015-05-28',
                imgurl:require('@/assets/img/news_p4.jpg'),
              },
              {
                title:'家电企业大幅采购机器人：效率相当于4个工人',
                content:'顺德拟成立4亿元股权投资基金加速发展机器人(55.020, 0.19, 0.35%)公司的消息就像个炸药包，美的、海尔、海信等落户在顺德的家电工厂均纷纷大幅采购机器人，代替人力。南都...',
                time:'2015-05-28',
                imgurl:require('@/assets/img/news_p5.jpg'),
              },
              {
                title:'“一带一路”带来新的增长点',
                content:'第117届广交会一期19日落幕。一期展品以电子电气产品、家用电器、机械及装备等机电产品为主，成交额多年来约占当届总成交额半壁江山。不少参展商告诉记者，当前市场较前两...',
                time:'2015-05-28',
                imgurl:require('@/assets/img/news_p6.jpg'),
              },
              {
                title:'中铁上海设计院集团有限公司总体设计的连淮扬镇铁路开工建设',
                content:'2014年12月28日，中铁上海设计院集团有限公司总体设计的连淮扬镇铁路开工建设。连镇铁路地处我国东部沿海地带，是江苏省“三纵四横”快速铁路网的中轴线，是长三角城市群区...',
                time:'2015-05-28',
                imgurl:require('@/assets/img/news_p1.jpg'),
              },
              {
                title:'家电企业大幅采购机器人：效率相当于4个工人',
                content:'顺德拟成立4亿元股权投资基金加速发展机器人(55.020, 0.19, 0.35%)公司的消息就像个炸药包，美的、海尔、海信等落户在顺德的家电工厂均纷纷大幅采购机器人，代替人力。南都...',
                time:'2015-05-28',
                imgurl:require('@/assets/img/news_p5.jpg'),
              },

            ]
          }
      }
    }
</script>

<style scoped>
  .news-img img{
    transition: all 0.36s ease;
  }

  .donghua:hover .news-img img{
    transform: scale(1.05);
  }
  .geu-news-content,.geu-news-title{
    -moz-transition-property: margin-left;
    transition-duration: 0.5s;
    -webkit-transition-property: margin-left; /* Safari */
    -webkit-transition-duration: 0.5s; /* Safari */
    font-size: 18px;
  }
  .donghua:hover .geu-news-content,.donghua:hover .geu-news-title {
    margin-left: 10px;
  }

  .geu-news-more {
    -moz-transition-property: margin-right;
    transition-duration: 0.5s;
    -webkit-transition-property: margin-right; /* Safari */
    -webkit-transition-duration: 0.5s; /* Safari */
  }
  .donghua:hover .geu-news-more{
    margin-right: 8px ;
  }
</style>
