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
            <td class="tb_tr_th_content">{{ar.period_stop_time}}</td>
            <template>
              <td class="tb_tr_th_content" v-if="ar.arrResult[0]!==null">
                <div class="nums">
                  <span :class="'num'+Result" v-for="Result in ar.arrResult">{{Result}}</span>
                </div>
              </td>
              <td class="tb_tr_th_content" v-else>未开奖</td>
            </template>
            <template>
              <td class="tb_tr_th_content" v-if="ar.odd_even == '1'" style="color: #ff3030">单</td>
              <td class="tb_tr_th_content" v-else-if="ar.odd_even == '2'" style="color: #ff3030">双</td>
            </template>
            <template>
              <td class="tb_tr_th_content" v-if="ar.little_big == '1'">小</td>
              <td class="tb_tr_th_content" v-else-if="ar.little_big == '2'">大</td>
            </template>

          </tr>
          </tbody>
        </table>
      </div>
      <div class="pageinfo">
        <pageComponent :totalSize= totalSize :pageData="{startLine:startLine,limitLine:limitLine,pageTo: '/bigRecord'}" v-if="totalSize>0"></pageComponent>
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
        startLine: '0',
        limitLine: '15',
        totalSize: '',
        arr: [
          {
            period_stop_time: '2018-02-10 19:20',
            arrResult: [
              1,2,3,4,5,6,7,8,9,10
            ],
            isdouble: '双',
            little_big: '大'
          }
        ]
      }
    },
    watch: {
      '$route': 'getRecord'
    },
    mounted() {
      this.getRecord();
    },
    methods: {
      getRecord() {
        let startLine = this.$route.params.startLine;
        let limitLine = this.$route.params.limitLine;
        this.startLine = startLine;
        this.limitLine = limitLine;
        let url = period + '/retrieve';
        let json = {};
        json.length = this.limitLine;
        json.orderColumnName = 'ts';
        json.orderDir = 'desc';
        json.start = this.startLine;
        json = JSON.stringify(json)
        this.$http.post(url,json).then((response) => {
          if(response.body.msg == '查询成功') {
            let resultData = response.body.resultData
            this.totalSize = response.body.total
            this.getRecordArr(resultData)
          }else {
            console.log('获取开奖记录失败')
          }
        })
      },
      getRecordArr(result) {
        let arr = [];
        result.forEach(d=>{
          let obj = {},arrResult = [];
          obj.period_stop_time = d.period_stop_time;
          obj.period_desc = d.period_desc;
          obj.little_big = d.little_big;
          obj.odd_even = d.odd_even;
          arrResult.push(d.f1);
          arrResult.push(d.f2);
          arrResult.push(d.f3);
          arrResult.push(d.f4);
          arrResult.push(d.f5);
          arrResult.push(d.f6);
          arrResult.push(d.f7);
          arrResult.push(d.f8);
          arrResult.push(d.f9);
          arrResult.push(d.f10);
          obj.arrResult = arrResult;
          arr.push(obj)
        })
        this.arr = arr
      },
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
