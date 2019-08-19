<template>
    <div style="height: 1600px;">
      <img style="width:100%;height: auto;" src="../../assets/img/news_banner.jpg"/>
      <van-button type="default">默认按钮</van-button>
      <van-button type="primary">主要按钮</van-button>
      <van-button type="info">信息按钮</van-button>
      <van-button type="warning">警告按钮</van-button>
      <van-button type="danger">危险按钮</van-button>
      <div class="geu-common-auto-width" style="height: 1000px;">
        <div class="col-xs-12 margin-top-50">
          <div class="col-xs-6">
            <div class="nub_cot0">
              <div style="font-size: 18px" class="nub_sub0">
                联系我们
              </div>
            </div>
          </div>
          <div  class="col-xs-6">
            <div class="nub_cot0">
              <div  style="font-size: 18px" class="nub_sub0">
                在线表单
              </div>
            </div>
          </div>
        </div>
        <div class="col-xs-12">
        <div style="color: #797979;" class="col-xs-6 margin-top-40">
          <el-form style="margin-right:30px;" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="姓名" prop="name">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="邮箱" prop="mail">
              <el-input type="mail" v-model="ruleForm.mail"></el-input>
            </el-form-item>
            <el-form-item label="电话号码" prop="phone">
              <el-input v-model="ruleForm.phone"></el-input>
            </el-form-item>
            <el-form-item label="相关事宜" prop="text">
              <el-input :rows="3" type="textarea" v-model="ruleForm.text"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
              <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
          </el-form>
        </div>
        <div style="color: #797979; font-size: 17px;" class="col-xs-6 margin-top-40">
          <div>
            公司电话:  +86-0411-6666-0683
          </div>
          <div  class="margin-top-15">
            手机号码: +86-157-3413-1263
          </div>
          <div style="font-size: 18px;"  class=" margin-top-30">

          </div>
          <div  class=" margin-top-15">
            辽宁省大连市甘井子区恩泽东园56号1层
          </div>
          <div  class=" margin-top-15">
            邮编: 132500
          </div>
          <div  class=" margin-top-15">
            <img style="width: 150px; height: 150px;" src="../../assets/img/wechatpic.jpg"/>
          </div>

        </div>
        </div>
        <div class="col-xs-12">
          <div class="col-xs-12">
            <div style="height:400px; border: 1px solid #a2a2a2;" class=" col-xs-12 text-center margin-top-70" id="geumap">

            </div>
          </div>
        </div>


      </div>


    </div>
</template>

<script>
    export default {
      name: "ContactUs",
      data() {
        return {
          ruleForm: {
            name: '',
            mail: '',
            phone: '',
            text: '',
          },
          rules: {
            name: [
              { required: true, message: '请输入姓名', trigger: 'blur' },
              { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
            ],
            mail: [
              { required: true, message: '请输入邮箱地址', trigger: 'blur' },
              { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
            ],
            phone: [
              { required: true, message: '请输入电话号码', trigger: 'blur' },
              { min: 1, max: 11, message: '长度在 1 到 11 个字符', trigger: 'blur' }
            ],
          }
        };
      },
      methods: {
        submitForm(formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
              alert('submit!');
            } else {
              console.log('error submit!!');
              return false;
            }
          });
        },
        resetForm(formName) {
          this.$refs[formName].resetFields();
        }
      },
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
