<template>
  <div class="bigRecord">
    <div class="recordContent clearfix">
      <div class="record-title clearfix">
        <span class="text">开奖记录</span>
      </div>
      <div class="record-table">
        <table style="width: 100%">
          <tbody>
            <tr class="tr_title">
              <th class="tb_tr_th" style="width: 165px">时间</th>
              <th class="tb_tr_th" style="width:600px;">开奖号码</th>
              <th class="tb_tr_th" style="width: 50px">单双</th>
              <th class="tb_tr_th" style="width: 50px">大小</th>
            </tr>
            <tr v-for="ar in arr">
              <td class="tb_tr_th_content">{{ar.time}}</td>
              <td class="tb_tr_th_content">
                <div class="nums">
                  <span :class="'num'+isshunxu" v-for="isshunxu in ar.isshunxus">{{isshunxu}}</span>
                </div>
              </td>
              <td class="tb_tr_th_content" style="color: #ff3030">{{ar.isdouble}}</td>
              <td class="tb_tr_th_content">{{ar.isbig}}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="pageinfo">
        <pageComponent :totalSize="20" :pageData="{startLine:0,limitLine:15,pageTo: '/bigRecord'}" v-if="true"></pageComponent>
      </div>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'
  import pageComponent from './paging'
  export default {
    name: 'bigRecord',
    components: {
      pageComponent
    },
    data () {
      return {
        arr: [
          {
            time: '2018-02-10 19:20',
            isshunxus: [
              1,2,3,4,5,6,7,8,9,10
            ],
            isdouble: '双',
            isbig: '大'
          },
          {
            time: '2018-02-10 19:20',
            isshunxus: [
              1,2,3,4,5,6,7,8,9,10
            ],
            isdouble: '双',
            isbig: '大'
          },
          {
            time: '2018-02-10 19:20',
            isshunxus: [
              1,2,3,4,5,6,7,8,9,10
            ],
            isdouble: '双',
            isbig: '大'
          },
          {
            time: '2018-02-10 19:20',
            isshunxus: [
              1,2,3,4,5,6,7,8,9,10
            ],
            isdouble: '双',
            isbig: '大'
          }
        ]
      }
    },
    mounted() {
    },
    methods: {

    }
  }
</script>

<style scoped>
  .bigRecord {
    width: 1000px;
    margin: 0 auto;
  }
  .recordContent {
    padding-bottom: 10px;
  }
  .record-title>.text {
    float: left;
    display: block;
    line-height: 36px;
    padding-left: 19px;
    font-size: 18px;
    color: #333333;
  }
  .record-table {

  }
  .tr_title {
    border: 1px solid #e5e5e5;
    border-bottom: 0px;
    width: 100%;
    background: #f6f6f6;
  }
  .tb_tr_th {
    height: 35px;
    line-height: 35px;
    font-size: 14px;
    color: #333;
    font-weight: bold;
    text-align: center;
  }
  .tb_tr_th_content {
    height: 36px;
    line-height: 36px;
    border: 1px solid #e6e6e6;
    font-size: 14px;
    color: #666;
    text-align: center;
  }
  .nums {
    padding-left: 30px;
    height: 38px;
  }
  .nums>span {
    display: inline-block;
    width: 28px;
    height: 28px;
    text-align: center;
    line-height: 30px;
    font-size: 16px;
    font-weight: bold;
    color: #FFFFFF;
    margin: 5px 16px 0;
    border-radius: 50%;
  }
  .num1 {
    background: #FF0000;
  }
  .num2{
    background: #5200FF;
  }
  .num3 {
    background: #008000;
  }
  .num4 {
    background: #2D92C2;
  }
  .num5 {
    background: #763e51;
  }
  .num6 {
    background: #6F8A97;
  }
  .num7 {
    background-color: #A76A2A;
  }
  .num8 {
    background-color: #4C208C;
  }
  .num9 {
    background-color: #975429;
  }
  .num10 {
    background-color: #716676;
  }

</style>
