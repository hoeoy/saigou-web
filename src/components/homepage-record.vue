<template>
  <div class="homepageRecord">
    <div class="recordContent clearfix">
      <div class="record-title clearfix">
        <span class="text">开奖记录</span>
        <a href="javascript:;" class="record_title_a" @click="goToBigRecord()">更多></a>
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
              <td class="tb_tr_th_content">
                <div class="nums">
                  <span :class="'num'+Result" v-for="Result in ar.arrResult">{{Result}}</span>
                </div>
              </td>
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
      <div class="trendAndNews">
        <div class="echarLeft">
          <div class="title">
            冠军走势图
          </div>
          <div class="echarContent" id="echarContentId">
          </div>
        </div>

        <!--<div class="moreList">-->
        <!--<div class="more clearfix">-->
        <!--<a :href="moreAddress" class="more_a">更多>></a>-->
        <!--</div>-->
        <!--<div class="List">-->
        <!--<ul>-->
        <!--<li v-for="moreList in moreListArr" class="clearfix">-->
        <!--<span class="circle_li"></span>-->
        <!--<a :href="moreList.address" class="List_li_a nowrap" :title="moreList.name">{{moreList.name}}</a></li>-->
        <!--</ul>-->
        <!--</div>-->
        <!--</div>-->
      </div>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'
  // 引入基本模板
  let echarts = require('echarts/lib/echarts')
  // 引入柱状图组件
  require('echarts/lib/chart/bar')
  require('echarts/lib/chart/line')
  // 引入提示框和title组件
  require('echarts/lib/component/tooltip')
  //  require('echarts/lib/component/title')
  export default {
    name: 'homepageRecord',
    components: {
    },
    data () {
      return {
        moreListArr: [
          {
            name: '马会俱乐部北京上线奖励活动',
            address: 'www.baidu.com'
          },
          {
            name: '马会俱乐部群23423423',
            address: 'www.baidu.com'
          },
          {
            name: '马会俱乐部微信wwwwwwwwwwwwwwwwww',
            address: 'www.baidu.com'
          }
        ],
        arr: [
          {
            period_stop_time: '2018-02-10 19:20',
            arrResult: [
              1,2,3,4,5,6,7,8,9,10
            ],
            isdouble: '双',
            little_big: '大'
          }
        ],
        xAxis: ['1', '2', '3', '4', '5', '6', '7'],
        yAxis: [2, 4, 8, 1, 5, 7, 3],
      }
    },
    mounted() {
      this.getRecord();
      this.showEcharts();
    },
    methods: {
      getRecord() {
        let url = period + '/retrieve';
        let json = {
          "length": 21,
          "orderColumnName": "ts",
          "orderDir": "desc",
          "start": 0
        };
        json = JSON.stringify(json)
        this.$http.post(url,json).then((response) => {
          if(response.body.msg == '查询成功') {
            let resultData = response.body.resultData
            this.getRecordArr(resultData)
            this.getEchartsArr(resultData)
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
        arr = arr.slice(1,11)
        this.arr = arr
      },
      getEchartsArr(result) {
        let xAxis = [];
        let yAxis = [];
        result.forEach(d=>{
          xAxis.push(d.pkvalue);
          yAxis.push(d.f1);
        })
        this.xAxis = xAxis.slice(1,20).reverse();
        this.yAxis = yAxis.slice(1,20).reverse();
        this.showEcharts();
      },
      goToBigRecord() {
        this.$router.push({
          name: 'bigRecord',
          params: {
            startLine: 0,
            limitLine: 15
          }
        })
      },
      showEcharts() {
        let myChart = echarts.init(document.getElementById('echarContentId'))

        let option = {
          xAxis: {
            type: 'category',
            data: this.xAxis,
          },
          yAxis: {
            type: 'value',
            max: 12,
          },
          series: [{
            data: this.yAxis,
            type: 'line',
            smooth: true,
            itemStyle : {
              normal: {
                label : {
                  show: true,
                  position: 'top',
                  textStyle: {
                    color: 'black'
                  }
                }
              }},
          }],
          grid: {
            x:50,
            y:15,
            x2:50,
            y2:25
          },
        };
        myChart.setOption(option)
      },
    },
  }
</script>

<style scoped>
  .homepageRecord {
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
  .record_title_a {
    float: right;
    display: block;
    margin-top: 6px;
    line-height: 30px;
    font-size: 14px;
    color: #333333;
    text-decoration: none;
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



  .trendAndNews {
    padding-top: 10px;
    border-top: 1px solid #ddd;
  }
  .echarLeft {
    float: left;
    width: 1000px;
    margin-top: 11px;
    border: 1px solid #dddddd;
  }
  .echarLeft>.title {
    line-height: 34px;
    font-size: 16px;
    /*padding-left: 20px;*/
    text-align: center;
    font-weight: bold;
    background-color: #f7f7f7;
  }
  .echarLeft>.echarContent {
    overflow: hidden;
    height: 180px;
    /*padding: 0px;*/
    /*text-align: center;*/
    /*background-color: pink;*/
  }
</style>
