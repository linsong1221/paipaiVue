<template>
  <div>
    <header style="background-color:rgba(0,0,0,0.5); position: absolute; z-index: 2;" class="nav">
      <div style="height: 70px; margin:0 auto">
        <div style="margin-left: 20px;" class="col-xs-2">
          <img src="../../assets/img/logo.png"/>
        </div>
        <div class="col-xs-1"></div>
        <div>
          <ul class="nav-ul">
            <router-link tag="li" to="/">
              <a href="javascript:;">HOME</a>
            </router-link>
            <li to="/news"  role="presentation" class="dropdown">
              <a class="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                회사소개<span class="caret"></span>
              </a>
              <ul class="dropdown-menu">
                <li><a href="services.html">CEO인사말</a></li>
                <li><a href="services.html">회사연혁</a></li>
                <li><a href="services.html">찾아오시는길</a></li>
              </ul>
            </li>
            <router-link tag="li" to="/news">
              <a href="javascript:;">메뉴</a>
            </router-link>
            <router-link tag="li" to="/news">
              <a href="javascript:;">창업안내</a>
            </router-link>
            <li to="/news"  role="presentation" class="dropdown">
              <a class="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                고객센터<span class="caret"></span>
              </a>
              <ul class="dropdown-menu">
                <li><a href="services.html">공지사항</a></li>
                <li><a href="services.html">뉴스</a></li>
                <li><a href="services.html">상담/문의</a></li>
                <li><a href="services.html">이벤트</a></li>
              </ul>
            </li>
            <router-link tag="li" to="/test">
              <a href="javascript:;">Test</a>
            </router-link>
          </ul>
        </div>
      </div>
    </header>

    <div class="line"></div>

  </div>

</template>
<script>
  export default {
    data() {
      return {
      }
    },
    methods: {
    }
  }
</script>
<style>
  ul{
    list-style-type:none;
    margin:0 !important;
    padding:0;
    font-size:15px;
    text-align: center;
  }
  li{
    display:inline;
    float:left;
  }
  a{
    display:block;
    width:100px;
    color: #ffffff !important;
    font-weight:600;
  }
  .nav{
    background-color: black;
    height:85px;
    line-height:85px;
    width:100%;
  }
  a:focus, a:hover{
    color: blue;
  }
  .nav .open>a, .nav .open>a:focus, .nav .open>a:hover{
    background-color: transparent;
  }
  .dropdown-menu{
    min-width: 130px;
    padding: 10px 0;
    margin: 0;
    background-color: #EC6E2D;
  }
  .dropdown-menu > li > a{
    display: block !important;
    padding: 8px 21px;

    width: 128px;
  }
  .nav > ul{
    text-align: center;
  }
  .nav-ul li{
    padding:0 10px 0 10px;
  }
</style>
