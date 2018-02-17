<template>
  <div class="homepagePublic">
    <div class="mainContent_center clearfix">
      <div class="trendAndNews clearfix">
        <div class="newNumber clearfix">
          <div class="newNumber-logo">
          </div>
          <div class="newNumber-info">
            <span>最新开奖：</span><span class="leftNum">{{newNumber.nowTimeNum}}</span>
            <span class="rightNum-content">
              每日销售：<span class="rightNum">{{newNumber.total}}</span>期，
              今日剩余<span class="rightNum">{{newNumber.restTimeNum}}</span>期
            </span>
          </div>
        </div>
        <div class="nextNumberBlock">
          <span class="textBlock">
            <span class="currentnum">第{{currentnum}}期</span>
            <span class="currentnum-bot">开奖时间剩余</span>
          </span>
          <span class="resetTime">
            <span class="time">{{minTime}}</span>
            <span class="text">分</span>
            <span class="time">{{secTime}}</span>
            <span class="text">秒</span>
          </span>
        </div>
      </div>
      <div class="trendAndNews">
        <div class="echarLeft">
          <div class="title">
            冠军走势图
          </div>
          <div class="echarContent" id="echarContentId">
          </div>
        </div>
        <div class="moreList">
          <div class="more clearfix">
            <a :href="moreAddress" class="more_a">更多>></a>
          </div>
          <div class="List">
            <ul>
              <li v-for="moreList in moreListArr" class="clearfix">
                <span class="circle_li"></span>
                <a :href="moreList.address" class="List_li_a nowrap" :title="moreList.name">{{moreList.name}}</a></li>
            </ul>
          </div>
        </div>
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
  name: 'homepage-public',
  data () {
    return {
      newNumber: {
        total: 200,
        restTimeNum: 113,
        nowTimeNum: 166,
      },
      currentnum: 377,
      minTime: 3,
      secTime: 33,
      moreAddress: 'www.baidu.com',
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
      ]

    }
  },
  mounted() {
    this.showEcharts();
  },
  methods: {
    showEcharts() {
      let myChart = echarts.init(document.getElementById('echarContentId'))

      let option = {
        xAxis: {
          type: 'category',
          data: ['1', '2', '3', '4', '5', '6', '7']
        },
        yAxis: {
          type: 'value',
          max: 12,
        },
        series: [{
          data: [2, 4, 8, 1, 5, 7, 3],
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
    }
  },
}
</script>

<style scoped >
  .homepagePublic {
    width: 1000px;
    margin: 0 auto;
    padding-bottom: 20px;
  }
  .mainContent_center {
    width: 100%;
  }
  .trendAndNews {
    padding-top: 10px;
    border-top: 1px solid #ddd;
  }
  .newNumber {
    float: left;
  }
  .newNumber-logo {
    float: left;
    display: block;
    width: 129px;
    height: 83px;
    background-image: url("../../static/img/logo-mid.png");
  }

  .newNumber-info {
    float: left;
    margin-top: 10px;
    margin-left: 10px;
    font-size: 16px;
    line-height: 37px;
    text-align: left;
    width: 520px;
    overflow: hidden;
  }
  .rightNum-content {
    color: #8e8e8f;
    padding-left: 50px;
    font-size: 12px;
  }
  .leftNum {
    color: #0072df;
    font-weight: bold;
  }
  .rightNum {
    font-size: 14px;
    color: #0072df;
    font-weight: bold;
  }

  .nextNumberBlock {
    float: right;
    padding: 13px 24px 0 0;
  }
  .textBlock {
    float: left;
    text-align: left;
    padding-right: 15px;
    padding-left: 35px;
    border-left: 1px solid #dddddd;
  }
  .currentnum {
    display: block;
    line-height: 32px;
    font-weight: normal;
    font-size: 14px;
    color: #0072df;
  }
  .currentnum-bot {
    display: block;
    line-height: 30px;
    font-size: 14px;
    color: #868686;
  }
  .resetTime {
    float: left;
    width: 140px;
    height: 40px;
    font-size: 21px;
    margin-top: 10px;
  }
  .resetTime>.time {
    float: left;
    text-align: center;
    line-height: 40px;
    width: 40px;
    height: 40px;
  }
  .resetTime>.text {
    float: left;
    text-align: center;
    line-height: 40px;
    height: 40px;
  }

  .echarLeft {
    float: left;
    width: 700px;
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
  .moreList {
    float: right;
    width: 255px;
  }
  .moreList>.List {
    padding-top: 10px;
  }
  .moreList>.more {
    padding-top: 10px;
  }
  .more_a {
    display: inline-block;
    float: right;
    line-height: 34px;
  }
  .List_li_a {
    float: left;
    margin-left: 20px;
    line-height: 31px;
    width: 210px;
    text-align: left;
    font-size: 14px;
    color: #666666;
    text-decoration: none;
  }
  .circle_li {
    float: left;
    margin-top: 12px;
    margin-left: 12px;
    height: 6px;
    width: 6px;
    border-radius: 50%;
    background-color: #DDDDDD;
  }
</style>
