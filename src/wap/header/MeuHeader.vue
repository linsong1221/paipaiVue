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
          <van-col span="14">
          </van-col>
          <van-col span="9">
            <van-button size="mini" icon="https://img.yzcdn.cn/vant/user-active.png" type="info">
              切换语言
            </van-button>
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
