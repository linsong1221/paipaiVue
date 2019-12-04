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


      <table border="0" cellpadding="0" cellspacing="0" class="customTable">
        <thead>
        <tr>
          <th>序号</th>
          <th>部门</th>
          <th>责任人</th>
          <th>项目名称/第三方检测费名称</th>
          <th>预算总额</th>
          <th>累计已计提金额</th>
          <th>累计已报账金额</th>
          <th>完成率(%)</th>
          <th>说明备注(采购项目经理)</th>
          <th>说明备注(部门)</th>
          <th>说明备注(中心)</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>1</td>
          <td>总部\采购共享中心\采购三部</td>
          <td>219693.40</td>
        </tr>
        </tbody>
      </table>

    </div>
</template>

<script>
    export default {
        name: "UiStyle"
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
