<template>
    <div>
      <div class="geu-common-auto-width" style="height: 500px;">
        <div class="col-xs-12 margin-top-40">
          <div class="nub_cot0">
            <div class="nub_sub0">
              联系我们
            </div>
          </div>
        </div>
        <div class="col-xs-12">
          <hr class="geu-home-leone-service-hr">
        </div>
        <hr class="geu-home-thinking-hr">
      </div>

      <div style="height: 500px;">
        <el-row style="margin-top: 50px;">
          <el-form>
            <el-form-item>
              <el-row style="height: 45px;" v-for="(item, index) in listObj.data" :key="index" v-model="item.value" :gutter="5">
                <el-col v-if="index === 0" :span="2">
                  <el-checkbox-group>
                    <el-checkbox>充值返余额：
                    </el-checkbox>
                  </el-checkbox-group>
                </el-col>
                <el-col v-if="index === 0" :span="3" :gutter="20">
                  {{index + 1}}，单次充值金额大于等于
                </el-col>
                <el-col v-if="index !== 0" :offset="2" :span="3">
                  {{index + 1}}，单次充值金额大于等于
                </el-col>
                <el-col :span="2">
                  <el-input v-model="item.czname1"></el-input>
                </el-col>
                <el-col :span="3">
                  元，奖励充值金额的
                </el-col>
                <el-col :span="2">
                  <el-input  v-model="item.czname2"></el-input>
                </el-col>
                <el-col :span="1">
                  %，分
                </el-col>
                <el-col :span="2">
                  <el-input  v-model="item.czname3"></el-input>
                </el-col>
                <el-col :span="2">
                  期完成返利，
                </el-col>
                <el-col :span="2">
                  <el-input  v-model="item.czname4"></el-input>
                </el-col>
                <el-col :span="2">
                  个自然日为一周期
                </el-col>
                <el-col :span="1">
                  <i @click="delList(index)" style="color: #b6b6b6;cursor:pointer; " class="el-icon-error"></i>
                </el-col>
              </el-row>
            </el-form-item>
          </el-form>
        </el-row>
        <el-button @click="addList()">添加</el-button>
        <el-button @click="onClickSubmit">提交数据</el-button>
      </div>

      <hr />
      <el-form ref="form" :model="form">
        <el-table  ref="table" :data="form.tableData" empty-text='暂无数据'>
          <el-table-column label="姓名">
            <template slot-scope="scope">
              <el-form-item :prop=" 'tableData.' + scope.$index + '.name' "
                            :rules="{ required: true, message: '名字不能为空', trigger: 'blur' }">
                <el-input v-model="scope.row.name"></el-input>
              </el-form-item>
            </template>
          </el-table-column>
          <el-table-column label="年龄">
            <template slot-scope="scope">
              <el-form-item >
                <el-input v-model.number="scope.row.age" type="number"></el-input>
              </el-form-item>
            </template>
          </el-table-column>
          <el-table-column  label="操作">
            <template slot-scope="scope">
              <el-button type="danger" size="mini" @click="del(scope.$index)" icon='el-icon-delete'></el-button>
              <el-button type="primary" size="mini" @click="add" icon='el-icon-plus'></el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-form>

      <hr />


      <table border="0" cellpadding="0" cellspacing="0" class="customTable">
        <thead>
        <tr>
          <th>序号</th>
          <th>部门</th>
          <th>责任人</th>
          <th>项目名称</th>
          <th>预算总额</th>
          <th>计提金额</th>
          <th>报账金额</th>
          <th>完成率(%)</th>
          <th>说明备注</th>
          <th>说明备注</th>
          <th>说明备注(中心)</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>1</td>
          <td>11111111</td>
          <td>219693.40</td>
          <td>219693.40</td>
          <td>219693.40</td>
        </tr>
        <tr>
          <td>1</td>
          <td>11111111</td>
          <td>219693.40</td>
        </tr>
        <tr>
          <td>1</td>
          <td>111111</td>
          <td>219693.40</td>
        </tr>
        </tbody>
      </table>

    </div>
</template>

<script>
    export default {
      name: "UiStyle",
      data() {
        return {
          listObj: {
            data:[
              // {czname1:'', czname2:'', czname3:'', czname4:''}
            ]
          },
          form: {
            tableData: [
              {
                name: 'aaa',
                age: 11
              },
              {
                name: '',
                age: ''
              }
            ]
          }
        };
      },
      methods: {
        addList() {
          this.listObj.data.push({czname1:'', czname2:'', czname3:'', czname4:''})
        },
        delList(index) {
          alert(index)
          this.listObj.data.splice(index, 1);
        },
        onClickSubmit() {
          alert(JSON.stringify(this.listObj))
        },
        add () {
          this.form.tableData.push({
            name: '',
            age: ''
          })
        },
        del (index) {
          this.form.tableData.splice(index, 1);
        }
      }
    }
</script>

<style lang="scss" scoped>
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
  .geu-home-leone-service-hr {
    border: 0;
    height: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  }
  .geu-home-thinking-hr{
    width:60%;
    margin:0 auto;
    border: 0;
    height: 4px;
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(75, 200, 255, 0.75), rgba(0, 0, 0, 0));
  }


  /* table 样式 */
  table.customTable {
    width:100%;
    /*border:1px solid #E9EFF2;*/
    border-right:1px solid #E9EFF2;
    border-bottom:1px solid #E9EFF2;
  th {
    background-color:#94B9CD;
    padding:10px 0;
    font-weight:initial;
    color:#ffffff;
    /*border-left:1px solid #B0CBDA;*/
    border-right:1px solid #B0CBDA;
    border-top:1px solid #B0CBDA;
  &:first-child{
     border-left: 0;
   }
  }
  .titlebkc{
    background-color:#F5FCFF;
  }
  tbody {
  tr{
  td{
    /*border-bottom:1px solid #E9EFF2;*/
    /*border:1px solid #F00;*/
    border-left:1px solid #E9EFF2;
    border-top:1px solid #E9EFF2;
  &.product-name {
     border-right:1px solid #E9EFF2;
   }
  &:last-child {
     border-right: 0;
   }
  }
  &:last-child {
  td {
    border-bottom: 0;
  }
  }
  }
  }
  td {
    padding: 5px;
    border: none;
  }
  }
</style>
