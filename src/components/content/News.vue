<template>
    <div>
      <div style="">
        <img style="width:100%;height: auto;" src="../../assets/img/news_banner.jpg"/>
        <div style="height: 46px;border-bottom: 1px solid #dddddd;">
          <div class="geu-common-auto-width">
              <div style="line-height: 46px;">
                <div @click="onReturnHome()"  class="geu-cursor" style="width: 63px; color: #4CAF50; font-size: 16px;">
                  <span class="glyphicon glyphicon-home"></span>
                  <span style="color: #787878; margin-left: 10px;">首页</span>
                </div>
              </div>
          </div>
        </div>
        <div>
          <div v-for="(item, key) in newsData.news"  style="height: 172px" class="geu-common-auto-width margin-top-60">
            <div class="col-xs-12 donghua">
              <div @click="onClickNews(item.num)" style="width: 260px; height: 130px" class="col-xs-3 news-img geu-cursor">
                <img style="width:100%;height: auto;overflow: hidden;" :src="item.imgurl" />
              </div>
              <div  class="col-xs-8 margin-top-10 ">
                <div style="height: 30px; line-height: 30px" class="geu-cursor" @click="onClickNews(item.num)">
                  <span class="geu-news-title">
                      {{item.title}}
                  </span>
                </div>
                <div class="" style="padding: 10px 10px 0 0;font-size: 13px;color: #999; line-height: 26px;">
                  <div style="width: 98%;font-size: 16px;word-break:break-all;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden;" class="geu-news-content">
                    <span>{{item.content}}</span>
                  </div>
                </div>
              </div>
              <div style="font-size: 13px;color: #999; float: right; padding-left: 0; padding-right: 0" class="col-xs-1">
                <div  class="margin-top-25 geu-news-time">
                  <span>{{item.time}}</span>
                </div>
                <div @click="onClickNews(item.num)" style="width: 67px;height: 25px;line-height: 25px;" class="margin-top-25 geu-cursor ">
                  <span style="float: right;"  class="geu-news-more">更多 <i class="el-icon-arrow-right"></i></span>
                </div>
              </div>
            </div>
            <div v-if="key !== newsData.news.length-1" class="col-xs-12 margin-top-20">
              <div class="col-xs-12">
                <hr/>
              </div>
            </div>
          </div>
        </div>
<!--        分页-->
<!--        <div class="col-xs-12 text-center margin-top-30">-->
<!--          <el-pagination-->
<!--            :page-size="6"-->
<!--            :pager-count="6"-->
<!--            layout="prev, pager, next"-->
<!--            :total="1000">-->
<!--          </el-pagination>-->
<!--        </div>-->
      </div>
    </div>
</template>

<script>
    export default {
      name: "News",
      data(){
          return{
            newsData:{
              total: 4,
              news:[
                {
                  title:'中国交通采集技术发展历史与现状',
                  content:'2014年12月28日，中铁上海设计院集团有限公司总体设计的连淮扬镇铁路开工建设。连镇铁路地处我国东部沿海地带，是江苏省“三纵四横”快速铁路网的中轴线，是长三角城市群区...是长三角城市群区是长三角城市群区是长三角城市群区是长三角城市群区是长三角城市群区是长三角城市群区是长三角城市群区是长三角城市群区是长三角城市群区是长三角城市群区是长三角城市群区是长三角城市群区是长三角城市群区是长三角城市群区是长三角城市群区是长三角城市群区是长三角城市群区是长三角城市群区是长三角城市群区是长三角城市群区是长三角城市群区是长三角城市群区是长三角城市群区是长三角城市群区是长三角城市群区是长三角城市群区是长三角城市群区是长三角城市群区是长三角城市群区是长三角城市群区是长三角城市群区是长三角城市群区是长三角城市群区是长三角城市群区是长三角城市群区是长三角城市群区是长三角城市群区是长三角城市群区是长三角城市群区是长三角城市群区是长三角城市群区',
                  time:'2018-08-25',
                  imgurl:require('@/assets/img/news_p1.jpg'),
                  num: '1',
                },
                {
                  title:'一分钟科普“数据湖”',
                  content:'数据湖（Data Lake）概念最早由CITO Research Web的CTO Dan Woods 于2011年提出。数据湖简单的说就是一个可以存储大量数据的并行信息系统，可以在不需要另外移动数据的情况下进行数据运算、分析。',
                  time:'2019-07-12',
                  imgurl:require('@/assets/img/news_p2.jpg'),
                  num: '2',
                },
                {
                  title:'电销必读：这样打电话，效率更高',
                  content:'2015年1月27日，河南设计院承担的上海庙～山东 800千伏特高压工程(包11)野外地质勘探工作顺利完成，该院岩土专业技术人员顶风冒雪，坚守工地一个多月，为该工程的顺利推进...',
                  time:'2019-07-12',
                  imgurl:require('@/assets/img/news_p3.jpg'),
                  num: '3',
                },
                {
                  title:'电子定量：传统行业的华丽转身',
                  content:'作为我国现代建筑产业最具实力的综合性科技研发企业，中国建筑标准设计研究院（以下简称：标准院）十分关注建筑业对于环境所产生的影响。当前，建筑业在国民经济中起着举足...',
                  time:'2018-09-25',
                  imgurl:require('@/assets/img/news_p5.jpg'),
                  num: '4',
                },
              ]
            },

          }
      },
      methods: {
        onClickNews(newsNum) {
          this.$router.push({
            name: 'newsdetail',
            query: {
              newsNum:newsNum,
            },
          });
        },
        onReturnHome() {
          this.$router.push({
            name: '/index',
          });
        },
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
