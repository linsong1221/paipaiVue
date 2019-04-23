<template>
  <div>
    <div style="background-color: #f5f5f5;height: 32px;">
      <div @mouseover="languageToggle()" @mouseout="languageToggle()" :class=  "languageOption ? 'geu-header-language-hover' : 'geu-header-language'" class="col-xs-offset-9 col-xs-1 text-center">
        <span v-text="$t('m.changeLan')"></span> <span class="glyphicon glyphicon-menu-down"></span>
      </div>
      <!--@mouseout="outStyle()"-->
    </div>
    <div style="position: relative">

      <transition name="fade">
        <div @mouseout="languageToggle()" @mouseover="languageToggle()"  v-bind:class="{'geu-header-language-li-k': languageOption}" class="col-xs-offset-9 col-xs-1 geu-header-language-ul" style="cursor: pointer;">
          <div style="background-color: rgb(255, 255, 255); height: 64px;z-index: 1;padding-top: 3px; padding-bottom: 3px; border: solid 1px #dbd1d1; width: 170px;">

            <div v-if="this.$i18n.locale != 'CHN'" @mouseover="languageLiHover()" @mouseout="languageLiOut()" :class=  "languagLi ? 'geu-header-language-li-hover' : 'geu-header-language-li'">
              <div type="text" @click="changeLanData = true">中文</div>
            </div>

            <div v-if="this.$i18n.locale != 'KOR'" @mouseover="languageLiHoverCn()" @mouseout="languageLiOutCn()" :class=  "languagLiCn ? 'geu-header-language-li-hover-cn' : 'geu-header-language-li-cn'">
              <div type="text" @click="changeLanData = true">한국어</div>
            </div>
            <div v-if="this.$i18n.locale != 'USA'" @click="open"  @mouseover="languageLiHoverEn('USA')" @mouseout="languageLiOutEn()" :class=  "languagLiEn ? 'geu-header-language-li-hover-en' : 'geu-header-language-li-en'">
              <div type="text" >English</div>
            </div>
          </div>
        </div>
      </transition>
    </div>


    <el-dialog title="" :visible.sync="changeLanData" width="50%">
      <span style="font-size: 18px" v-text="$t('m.languageSwitch')">？</span>
      <span slot="footer" class="dialog-footer">
        <el-button v-text="$t('m.languageCancel')" @click="changeLan(false)"></el-button>
        <el-button v-text="$t('m.sure')" type="primary" @click="changeLan(true)"></el-button>
      </span>
    </el-dialog>


    <!--<el-dialog title="" :visible.sync="changeKor" width="30%">
      <span>1111111111</span>
      <span slot="footer" class="dialog-footer">
        <el-button v-text="$t('m.languageCancel')" @click="changeLan(false)"></el-button>
        <el-button  v-text="$t('m.sure')" type="primary"  @click="changeLan(true)"></el-button>
      </span>
    </el-dialog>-->


    <!--    <div style="height: 500px; width: 1000px;">-->
    <!--      <button @mouseover="show = !show" @mouseout="show = !show">-->
    <!--        Toggle-->
    <!--      </button>-->
    <!--      <transition name="fade">-->
    <!--        <p v-if="show">hello</p>-->
    <!--      </transition>-->
    <!--    </div>-->
  </div>
</template>

<style>

</style>
<script>
  export default {
    data() {
      return {
        languageOption: false,

        languagLi: false,
        languagLiCn: false,
        changeChn: false,
        changeKor:false,
        languagLiEn:false,
        changeLanData: false,
        show:false
      }





    },
    methods: {
      languageToggle(){
        this.languageOption =  !this.languageOption;
      },

      languageLiHover(){
        this.languagLi =  true
      },
      languageLiOut(){
        this.languagLi =  false;
      },
      languageLiHoverEn(){
        this.languagLiEn =  true
      },
      languageLiOutEn(){
        this.languagLiEn =  false;
      },
      languageLiHoverCn(){
        this.languagLiCn =  true
      },
      languageLiOutCn(){
        this.languagLiCn =  false;
      },
      changeLan(iftrue){
        if(iftrue){
          if(this.$i18n.locale == 'CHN'){
            this.changeLanData = false
            this.$i18n.locale = 'KOR'
          } else {
            this.changeLanData = false
            this.$i18n.locale = 'CHN'
          }
        } else {
          this.changeLanData = false
        }


      },
      changeLan2(ofChange,lan){

      },
      open() {
        if(this.$i18n.locale == 'CHN'){
          this.$message('暂不支持此语言.');
          this.use =  false;
        } else {
          this.$message('해당언어를 잠시 지원하지 않습니다.');
          this.use =  false;
        }

      }
    }
  }
</script>
<style lang="scss">
  .geu-header-language{
    padding-left: 0px;
    padding-right: 0px;
    color: #999595;
    /*font-size: 13px;*/
    height: 32px;
    line-height: 32px;
    border-left: 1px solid #bebebe;
    border-right: 1px solid #bebebe;
    font-size: 13px;
  }
  .geu-header-language-hover{
    @extend .geu-header-language;
    background-color: #FFF;
    color: #2788e8;
    cursor:pointer;
  }

  .geu-header-language-ul{
    display: none;
    position: absolute !important;
    z-index: 1;
    padding-left: 0px !important;
    padding-right: 0px !important;
  }
  .geu-header-language-li-hover{
    height: 26px;
    background-color: #e9f3fc;
    line-height: 26px;
    padding-left: 28px;
    color: #2788e8;
  }
  .geu-header-language-li{
    height: 26px;
    line-height: 26px;
    padding-left: 28px;
    color: #999595;
  }
  .geu-header-language-li-hover-en{
    height: 26px;
    background-color: #e9f3fc;
    line-height: 26px;
    padding-left: 28px;
    color: #2788e8;
  }
  .geu-header-language-li-en{
    height: 26px;
    line-height: 26px;
    padding-left: 28px;
    color: #999595;
  }

  .geu-header-language-li-hover-cn{
    height: 26px;
    background-color: #e9f3fc;
    line-height: 26px;
    padding-left: 28px;
    color: #2788e8;
  }
  .geu-header-language-li-cn{
    height: 26px;
    line-height: 26px;
    padding-left: 28px;
    color: #999595;
  }
  .geu-header-language-li-k{
    display: block;
  }


  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }



</style>
