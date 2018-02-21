<template>
  <div class="homepageRuning">
    <div class="runing-head">
      <div class="runing-head-1"><span>本期期数：</span><span>{{rest_time.period_code}}</span></div>
      <div class="runing-head-1"><span>下期期数：</span><span>{{rest_time.period_code}}</span></div>
      <div class="runing-head-1"><span>开奖时间：</span><span>{{rest_time.period_stop_time}}</span></div>
    </div>
    <div class="runing-time">{{restRunTime}}</div>
    <div class="runing-runway" v-bind:style="[runway]">
      <div class="runing-start"></div>
      <div class="runing-mid"></div>
      <div class="runing-end"></div>
    </div>
    <div class="runing-dogback">
      <!--<div id="dog1" v-bind:style="{ backgroundPositionX: x1 + 'px', backgroundPositionY: y1 + 'px' }"></div>-->
      <div class="dog dog1" v-bind:style="[dogObj,dogObj01]"></div>
      <div class="dog dog2" v-bind:style="[dogObj,dogObj02]"></div>
      <div class="dog dog3" v-bind:style="[dogObj,dogObj03]"></div>
      <div class="dog dog4" v-bind:style="[dogObj,dogObj04]"></div>
      <div class="dog dog5" v-bind:style="[dogObj,dogObj05]"></div>
      <div class="dog dog6" v-bind:style="[dogObj,dogObj06]"></div>
      <div class="dog dog7" v-bind:style="[dogObj,dogObj07]"></div>
      <div class="dog dog8" v-bind:style="[dogObj,dogObj08]"></div>
      <div class="dog dog9" v-bind:style="[dogObj,dogObj09]"></div>
      <div class="dog dog10" v-bind:style="[dogObj,dogObj10]"></div>
    </div>
    <div class="guanjunhecai">
      <span class="guanjunhecai-head">为冠军喝彩！</span>
      <span class="guanjunhecai-content">{{resultRon}}号狗</span>
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
  name: 'homepageRuning',
  components: {
  },
  data () {
    return {
      arr: ['-30px -37px','-30px -95px','-30px -152px','-30px -208px','-30px -267px','-30px -323px','-30px -377px','-30px -440px'],
      runway: {},
      runwayLeft: 0,
      interval: null,
      dogRunInterval: null,
      restRunTime: '',
      resultRon: '',
      arr2: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26],
      dogObj: {
        backgroundPosition: '-30px -37px'
      },
      dogObj01: {
        left: '0px',
      },
      dogObj02: {
        left: '0px',
      },
      dogObj03: {
        left: '0px',
      },
      dogObj04: {
        left: '0px',
      },
      dogObj05: {
        left: '0px',
      },
      dogObj06: {
        left: '0px',
      },
      dogObj07: {
        left: '0px',
      },
      dogObj08: {
        left: '0px',
      },
      dogObj09: {
        left: '0px',
      },
      dogObj10: {
        left: '0px',
      },
    }
  },
  computed: {
    ...mapState(['rest_time']),
  },
  watch: {
    rest_time: {
      handler (val, oldVal) {
        this.hideOrShowTime()
      },
      deep: true
    },
  },
  mounted() {
    this.hideOrShowTime();
//    this.dogDong2()
//    this.dogDong3()
//    this.dogDong4()
//    this.dogDong5()
//    this.dogDong6()
//    this.dogDong7()
//    this.dogDong8()
//    this.dogDong9()
//    this.dogDong10()
    //let dog1 = $('#dog1')
  },
  methods: {
    initDongHua() {
      clearInterval(this.dogRunInterval);
      let runwayLeft = 0;
      let runway = {
        left: runwayLeft + 'px'
      };
      this.runway = runway;
      this.runwayLeft = runwayLeft;
      this.dogObj01 = {left: '0px'};
      this.dogObj02 = {left: '0px'};
      this.dogObj03 = {left: '0px'};
      this.dogObj04 = {left: '0px'};
      this.dogObj05 = {left: '0px'};
      this.dogObj06 = {left: '0px'};
      this.dogObj07 = {left: '0px'};
      this.dogObj08 = {left: '0px'};
      this.dogObj09 = {left: '0px'};
      this.dogObj10 = {left: '0px'};
    },
    hideOrShowTime() {
      this.restRunTime = this.rest_time.rest_second-20;
      if(this.restRunTime>0) {
        $('.runing-time').show();
        $('.guanjunhecai').hide();
        this.initDongHua()
      }else if(this.restRunTime<-10){
        $('.guanjunhecai').show();
        $('.runing-time').hide();
      }else if(this.restRunTime>=-10&&this.restRunTime<=0){
        $('.runing-time').hide();
        $('.guanjunhecai').hide();
        this.dogRun();
        this.getDogRuning();
        clearInterval(this.interval)
      }
      this.setIntervalRestTime();
    },
    dogRun() {
      let arr = this.arr;
      let a = 0;
      let runwayLeft = this.runwayLeft;
      this.dogRunInterval = setInterval(d=>{
       let backgroundPosition = arr[a];
       let dogObj = {
         backgroundPosition: backgroundPosition
       }
       this.dogObj = dogObj;
        a++;
        a>7 ? a=1 : true

        if(runwayLeft>-2300){
          runwayLeft -= 25
        }
        let runway = {
          left: runwayLeft + 'px'
        };
        this.runway = runway;
        this.runwayLeft = runwayLeft
      },100);
    },
    dogruning01(arr) {
      let a = 0;
      let left;
      setInterval(d=>{
        left= arr[a];
        let dogObj01 = {
          left: left + 'px',
        }
        this.dogObj01 = dogObj01;
        a++;
        if(a>9){
          $('.guanjunhecai').show();
        }
      },1000);
//      let a = 0;
//      let b = 1;
//      let left;
//      setInterval(d=>{
//        a>1?left= arr[a]+(arr[a]-arr[a-1])/b:left= arr[a]/b;
//        let dogObj01 = {
//          left: left + 'px',
//        }
//        this.dogObj01 = dogObj01;
//        console.log(dogObj01)
//        b--
//        if(b==0) {
//          a++;
//          b=1
//        }
//      },500);
    },
    dogruning02(arr) {
      let a = 0;
      let left;
      setInterval(d=>{
        left= arr[a];
        let dogObj02 = {
          left: left + 'px',
        }
        this.dogObj02 = dogObj02;
        a++;
      },1000);
//      let a = 0;
//      let b = 1;
//      let left;
//      setInterval(d=>{
//        a>1?left= arr[a]+(arr[a]-arr[a-1])/b:left= arr[a]/b;
//        let dogObj01 = {
//          left: left + 'px',
//        }
//        this.dogObj01 = dogObj01;
//        console.log(dogObj01)
//        b--
//        if(b==0) {
//          a++;
//          b=1
//        }
//      },500);
    },
    dogruning03(arr) {
      let a = 0;
      let left;
      setInterval(d=>{
        left= arr[a];
        let dogObj03 = {
          left: left + 'px',
        }
        this.dogObj03 = dogObj03;
        a++;
      },1000);
//      let a = 0;
//      let b = 1;
//      let left;
//      setInterval(d=>{
//        a>1?left= arr[a]+(arr[a]-arr[a-1])/b:left= arr[a]/b;
//        let dogObj01 = {
//          left: left + 'px',
//        }
//        this.dogObj01 = dogObj01;
//        console.log(dogObj01)
//        b--
//        if(b==0) {
//          a++;
//          b=1
//        }
//      },500);
    },
    dogruning04(arr) {
      let a = 0;
      let left;
      setInterval(d=>{
        left= arr[a];
        let dogObj04 = {
          left: left + 'px',
        }
        this.dogObj04 = dogObj04;
        a++;
      },1000);
//      let a = 0;
//      let b = 1;
//      let left;
//      setInterval(d=>{
//        a>1?left= arr[a]+(arr[a]-arr[a-1])/b:left= arr[a]/b;
//        let dogObj01 = {
//          left: left + 'px',
//        }
//        this.dogObj01 = dogObj01;
//        console.log(dogObj01)
//        b--
//        if(b==0) {
//          a++;
//          b=1
//        }
//      },500);
    },
    dogruning05(arr) {
      let a = 0;
      let left;
      setInterval(d=>{
        left= arr[a];
        let dogObj05 = {
          left: left + 'px',
        }
        this.dogObj05 = dogObj05;
        a++;
      },1000);
//      let a = 0;
//      let b = 1;
//      let left;
//      setInterval(d=>{
//        a>1?left= arr[a]+(arr[a]-arr[a-1])/b:left= arr[a]/b;
//        let dogObj01 = {
//          left: left + 'px',
//        }
//        this.dogObj01 = dogObj01;
//        console.log(dogObj01)
//        b--
//        if(b==0) {
//          a++;
//          b=1
//        }
//      },500);
    },
    dogruning06(arr) {
      let a = 0;
      let left;
      setInterval(d=>{
        left= arr[a];
        let dogObj06 = {
          left: left + 'px',
        }
        this.dogObj06 = dogObj06;
        a++;
      },1000);
//      let a = 0;
//      let b = 1;
//      let left;
//      setInterval(d=>{
//        a>1?left= arr[a]+(arr[a]-arr[a-1])/b:left= arr[a]/b;
//        let dogObj01 = {
//          left: left + 'px',
//        }
//        this.dogObj01 = dogObj01;
//        console.log(dogObj01)
//        b--
//        if(b==0) {
//          a++;
//          b=1
//        }
//      },500);
    },
    dogruning07(arr) {
      let a = 0;
      let left;
      setInterval(d=>{
        left= arr[a];
        let dogObj07 = {
          left: left + 'px',
        }
        this.dogObj07 = dogObj07;
        a++;
      },1000);
//      let a = 0;
//      let b = 1;
//      let left;
//      setInterval(d=>{
//        a>1?left= arr[a]+(arr[a]-arr[a-1])/b:left= arr[a]/b;
//        let dogObj01 = {
//          left: left + 'px',
//        }
//        this.dogObj01 = dogObj01;
//        console.log(dogObj01)
//        b--
//        if(b==0) {
//          a++;
//          b=1
//        }
//      },500);
    },
    dogruning08(arr) {
      let a = 0;
      let left;
      setInterval(d=>{
        left= arr[a];
        let dogObj08 = {
          left: left + 'px',
        }
        this.dogObj08 = dogObj08;
        a++;
      },1000);
//      let a = 0;
//      let b = 1;
//      let left;
//      setInterval(d=>{
//        a>1?left= arr[a]+(arr[a]-arr[a-1])/b:left= arr[a]/b;
//        let dogObj01 = {
//          left: left + 'px',
//        }
//        this.dogObj01 = dogObj01;
//        console.log(dogObj01)
//        b--
//        if(b==0) {
//          a++;
//          b=1
//        }
//      },500);
    },
    dogruning09(arr) {
      let a = 0;
      let left;
      setInterval(d=>{
        left= arr[a];
        let dogObj09 = {
          left: left + 'px',
        }
        this.dogObj09 = dogObj09;
        a++;
      },1000);
//      let a = 0;
//      let b = 1;
//      let left;
//      setInterval(d=>{
//        a>1?left= arr[a]+(arr[a]-arr[a-1])/b:left= arr[a]/b;
//        let dogObj01 = {
//          left: left + 'px',
//        }
//        this.dogObj01 = dogObj01;
//        console.log(dogObj01)
//        b--
//        if(b==0) {
//          a++;
//          b=1
//        }
//      },500);
    },
    dogruning10(arr) {
      let a = 0;
      let left;
      setInterval(d=>{
        left= arr[a];
        let dogObj10 = {
          left: left + 'px',
        }
        this.dogObj10 = dogObj10;
        a++;
      },1000);
//      let a = 0;
//      let b = 1;
//      let left;
//      setInterval(d=>{
//        a>1?left= arr[a]+(arr[a]-arr[a-1])/b:left= arr[a]/b;
//        let dogObj01 = {
//          left: left + 'px',
//        }
//        this.dogObj01 = dogObj01;
//        console.log(dogObj01)
//        b--
//        if(b==0) {
//          a++;
//          b=1
//        }
//      },500);
    },
    getDogRuning() {
      let url = live + '/retrieve';
      this.$http.get(url).then((response) => {
        if(response.body.code == '0') {
          let result = response.body.content.animation;
          this.resultRon = response.body.content.f1;
          result = JSON.parse(result);
          this.dogruning01(result.m1);
          this.dogruning02(result.m2);
          this.dogruning03(result.m3);
          this.dogruning04(result.m4);
          this.dogruning05(result.m5);
          this.dogruning06(result.m6);
          this.dogruning07(result.m7);
          this.dogruning08(result.m8);
          this.dogruning09(result.m9);
          this.dogruning10(result.m10);
        }else {
          console.log('获取开奖记录失败')
        }
      })
    },
    setIntervalRestTime() {
      clearInterval(this.interval)
      this.interval = setInterval(d=>{
        this.restRunTime = this.restRunTime - 1;
        if(this.restRunTime == 0) {
          $('.runing-time').hide();
          $('.dog').show();
          this.dogRun();
          this.getDogRuning();
          this.restRunTime = 0;
          clearInterval(this.interval)
        }
      },1000);
    },
  }

}
</script>

<style scoped>
  .homepageRuning {
    position: relative;
    width: 1000px;
    margin: 0 auto;
    background-color: #CEB282;
    height: 610px;
    overflow: hidden;
  }
  .guanjunhecai {
    position: absolute;
    left: 0px;
    top: 77px;
    width: 1000px;
    height: 533px;
    background-image: linear-gradient(to right,rgba(0,0,0,.5),rgba(0,0,0,.6),rgba(0,0,0,.8),rgba(0,0,0,.5));
    z-index: 1000;
  }
  .guanjunhecai-head{
    display: block;
    height: 200px;
    line-height: 200px;
    color: #ff7379;
    font-size: 30px;
  }
  .guanjunhecai-content{
    display: block;
    height: 200px;
    color: #ff7379;
    font-size: 30px;
  }
  .runing-head {
    width: 981px;
    height: 77px;
    margin: 0 auto;
    background-color: #CEB282;
  }
  .runing-head-1{
    display: inline-block;
    height: 77px;
    line-height: 77px;
    width: 310px;
    text-align: left;
  }
  .runing-head-1>span{
    font-size: 20px;
    font-weight: bold;
    color: #000;
  }
  .runing-time {
    position: absolute;
    width: 200px;
    height: 100px;
    left: 400px;
    top: 280px;
    color: #fff;
    font-size: 50px;
    line-height: 100px;
    background-image: linear-gradient(to right,rgba(0,0,0,.3),rgba(0,0,0,.6),rgba(0,0,0,.6),rgba(0,0,0,.3));
    text-align: center;
    z-index: 700;
  }
  .runing-runway{
    position: absolute;
    left: 0px;
    top: 77px;
    width: 5500px;
    height: 533px;
    background-image: url("/static/img/runway.png");
    z-index: 10;
  }
  .runing-dogback{
    position: absolute;
    left: 0;
    top: 77px;
    width: 1000px;
    height: 533px;
    z-index: 20;
  }
  .runing-start {
    position: absolute;
    z-index: 500;
    width: 86px;
    height: 533px;
    background-image: url("/static/img/start5.gif");
  }
  .runing-mid {
    position: absolute;
    z-index: 500;
    width: 179px;
    height: 533px;
    left: 1500px;
    background-image: url("/static/img/middle.png");
  }
  .runing-end {
    position: absolute;
    z-index: 500;
    width: 276px;
    height: 630px;
    left: 3000px;
    background-image: url("/static/img/runend.png");
  }
  .dog {
    position: absolute;
    display: none;
    z-index: 999;
    width: 100px;
    height: 60px;
    transition: left 1s;
  }
  .dog1 {
    top: 436px;
    background-image: url("/static/img/dog1.png");
  }
  .dog2 {
    top: 392px;
    background-image: url("/static/img/dog2.png");
  }
  .dog3 {
    top: 348px;
    background-image: url("/static/img/dog3.png");
  }
  .dog4 {
    top: 304px;
    background-image: url("/static/img/dog4.png");
  }
  .dog5 {
    top: 260px;
    background-image: url("/static/img/dog5.png");
  }
  .dog6 {
    top: 216px;
    background-image: url("/static/img/dog6.png");
  }
  .dog7 {
    top: 172px;
    background-image: url("/static/img/dog7.png");
  }
  .dog8 {
    top: 128px;
    background-image: url("/static/img/dog8.png");
  }
  .dog9 {
    top: 84px;
    background-image: url("/static/img/dog9.png");
  }
  .dog10 {
    top: 40px;
    background-image: url("/static/img/dog10.png");
  }
</style>
