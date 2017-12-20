<template>
  <div>
    <header class="nav">
      <div style="height: 50px;width: 960px; margin:0 auto">
        <div>
          <ul>
            <router-link tag="li" to="/">
              <a href="javascript:;">Home</a>
            </router-link>
            <router-link tag="li" to="/news">
              <a href="javascript:;">News</a>
            </router-link>
            <!--<li><a href="">Home</a></li>-->
            <!--<li><a href="">News</a></li>-->
          </ul>
        </div>
      </div>
    </header>
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
    margin:0;
    padding:0;
    font-size:15px;
  }
  li{
    display:inline;
    float:left;
  }
  a{
    display:block;
    width:100px;
    color: #8c2830;
    font-weight:600;
  }
  .nav{
    background-color: lavender;
    height:70px;
    line-height:70px;
    width:100%;
  }
</style>
