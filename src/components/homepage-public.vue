<template>
  <div class="homepagePublic">
    <div class="mainContent_center clearfix">
      <div class="trendAndNews clearfix">
        <div class="newNumber clearfix">
          <div class="newNumber-logo">
          </div>
          <div class="newNumber-info">
            <span>最新开奖：</span><span class="leftNum">{{newNumber.current_num}}</span>
            <span class="rightNum-content">
              每日销售：<span class="rightNum">{{newNumber.total_num}}</span>期，
              今日剩余<span class="rightNum">{{newNumber.rest_num}}</span>期
            </span>
          </div>
        </div>
        <div class="nextNumberBlock">
          <span class="textBlock">
            <span class="currentnum">第{{newNumber.current_num}}期</span>
            <span class="currentnum-bot">开奖时间剩余</span>
          </span>
          <span class="resetTime">
            <span class="time">{{parseInt(restTime/60)}}</span>
            <span class="text">分</span>
            <span class="time">{{restTime%60}}</span>
            <span class="text">秒</span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import $ from 'jquery'
  import {
    mapState,
    mapActions
  } from 'vuex';
export default {
  name: 'homepage-public',
  data () {
    return {
      newNumber: {
        total_num: 200,
        rest_num: 113,
        current_num: 166,
      },
      restTime: '100',
      interval: null,

    }
  },
  computed: {
    ...mapState(['rest_time']),
  },
  mounted() {
    this.getPeriodRetrieveSummery();
  },
  methods: {
    ...mapActions(['set_rest_time']),
    getPeriodRetrieveSummery() {
      let url = period + '/retrieveSummery'
      this.$http.get(url).then((response) => {
        if(response.body.code == 0) {
          this.newNumber = response.body.content;
          this.restTime = response.body.content.rest_second;
          this.set_rest_time(this.newNumber)
          this.setIntervalRestTime()
        }else {
          console.log('获取开奖信息失败')
        }
      })
    },
    setIntervalRestTime() {
      this.interval = setInterval(d=>{
        this.restTime = this.restTime - 1
        if(this.restTime == 0) {
          clearInterval(this.interval)
        }
      },1000);
    },
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

  /*.echarLeft {*/
    /*float: left;*/
    /*width: 700px;*/
    /*margin-top: 11px;*/
    /*border: 1px solid #dddddd;*/
  /*}*/
  /*.echarLeft>.title {*/
    /*line-height: 34px;*/
    /*font-size: 16px;*/
    /*!*padding-left: 20px;*!*/
    /*text-align: center;*/
    /*font-weight: bold;*/
    /*background-color: #f7f7f7;*/
  /*}*/
  /*.echarLeft>.echarContent {*/
    /*overflow: hidden;*/
    /*height: 180px;*/
    /*!*padding: 0px;*!*/
    /*!*text-align: center;*!*/
    /*!*background-color: pink;*!*/
  /*}*/
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
