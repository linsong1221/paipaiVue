<template>
  <div>

    <van-popup v-model="showPicker" position="bottom">
      <van-picker
        show-toolbar
        :columns="columns"
        @cancel="showPicker = false"
        @confirm="onConfirm"
      />
    </van-popup>


    <van-row>
      <van-col span="24">
        <div style="background-color: #f5f5f5;height: 25px;">
          <van-col span="18">
          </van-col>
          <van-col span="4">
<!--            <div class="text-center" style="line-height: 30px; font-size: 12px;     color: #999595;-->
<!--    border-left: 1px solid #bebebe;-->
<!--    border-right: 1px solid #bebebe;" @click="showPicker = true">中文  <van-icon name="arrow-down" /></div>-->
          </van-col>
        </div>
      </van-col>
    </van-row>



  </div>
</template>

<script>
  import { Picker } from 'vant';
  import { Popup } from 'vant';

    export default {
      name: "MeuHeader",
      components: {
        Picker,
        Popup,
      },
      data() {
        return {
          value: '',
          showPicker: false,
          columns: ['杭州aa', '宁波', '温州', '嘉兴', '湖州']
        }
      },
      methods: {
        onConfirm(value) {
          this.value = value;
          this.showPicker = false;
        }
      }
    }
</script>

<style scoped>

</style>
