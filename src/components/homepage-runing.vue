<template>
  <div class="homepageRuning">
    <div class="runing-top"></div>
    <div class="runing-runway">
      <div class="runing-start"></div>
      <div class="runing-mid"></div>
      <div class="runing-end"></div>
      <!--<div id="dog1" v-bind:style="{ backgroundPositionX: x1 + 'px', backgroundPositionY: y1 + 'px' }"></div>-->
      <div class="dog1" v-bind:style="[dogObj,dogObj01]"></div>
      <div class="dog2" v-bind:style="[dogObj,dogObj02]"></div>
      <div class="dog3" v-bind:style="[dogObj,dogObj03]"></div>
      <div class="dog4" v-bind:style="[dogObj,dogObj04]"></div>
      <div class="dog5" v-bind:style="[dogObj,dogObj05]"></div>
      <div class="dog6" v-bind:style="[dogObj,dogObj06]"></div>
      <div class="dog7" v-bind:style="[dogObj,dogObj07]"></div>
      <div class="dog8" v-bind:style="[dogObj,dogObj08]"></div>
      <div class="dog9" v-bind:style="[dogObj,dogObj09]"></div>
      <div class="dog10" v-bind:style="[dogObj,dogObj10]"></div>
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
  name: 'homepageRuning',
  components: {
  },
  data () {
    return {
      arr: ['-30px -37px','-30px -95px','-30px -152px','-30px -208px','-30px -267px','-30px -323px','-30px -377px','-30px -440px'],
      arr2: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26],
      dogObj: {
        backgroundPosition: '-30px -37px'
      },
      dogObj01: {
        left: '50px',
      },
      dogObj02: {
        left: '100px',
      },
      dogObj03: {
        left: '400px',
      },
      dogObj04: {
        left: '200px',
      },
      dogObj05: {
        left: '300px',
      },
      dogObj06: {
        left: '800px',
      },
      dogObj07: {
        left: '200px',
      },
      dogObj08: {
        left: '200px',
      },
      dogObj09: {
        left: '600px',
      },
      dogObj10: {
        left: '900px',
      },
    }
  },
  mounted() {
    this.dogRun()
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
    dogRun() {
      let arr = this.arr;
      let a = 0;
      setInterval(d=>{
       let backgroundPosition = arr[a];
       let dogObj = {
         backgroundPosition: backgroundPosition
       }
       this.dogObj = dogObj;
        a++;
        a>7 ? a=1 : true
      },125);
    },
    dogruning() {
      let arr2 = [];
      for(let i=1;i<81;i++) {
        arr2.push(i)
      }
      console.log(arr2,'arr2')
      let a = 0;
      setInterval(d=>{
        let backgroundPosition = arr[a];
        let left = arr2[a];
        let dogObj01 = {
          left: left*10 + 'px',
          backgroundPosition: backgroundPosition
        }
        this.dogObj01 = dogObj01;
        a++
        a>7 ? a=1 : true
      },125);
    },
  }

}
</script>

<style scoped>
  .homepageRuning {
    position: relative;
    width: 1000px;
    margin: 0 auto;
    background-color: green;
    height: 610px;
    overflow: hidden;
  }

  .runing-top {
    width: 981px;
    height: 77px;
    margin: 0 auto;
    background-image: url("../../static/img/head.jpg");
  }
  .runing-runway{
    position: absolute;
    width: 5500px;
    height: 533px;
    background-image: url("../../static/img/runway.png");
    z-index: 10;
  }
  .runing-start {
    position: absolute;
    z-index: 500;
    width: 86px;
    height: 533px;
    background-image: url("../../static/img/start5.gif");
  }
  .runing-mid {
    position: absolute;
    z-index: 500;
    width: 179px;
    height: 533px;
    left: 400px;
    background-image: url("../../static/img/middle.png");
  }
  .runing-end {
    position: absolute;
    z-index: 500;
    width: 276px;
    height: 630px;
    left: 800px;
    background-image: url("../../static/img/runend.png");
  }
  .dog1 {
    position: absolute;
    z-index: 999;
    width: 100px;
    height: 60px;
    top: 436px;
    background-image: url("../../static/img/dog1.png");
  }
  .dog2 {
    position: absolute;
    z-index: 999;
    width: 100px;
    height: 60px;
    top: 392px;
    background-image: url("../../static/img/dog2.png");
  }
  .dog3 {
    position: absolute;
    z-index: 999;
    width: 100px;
    height: 60px;
    top: 348px;
    background-image: url("../../static/img/dog3.png");
  }
  .dog4 {
    position: absolute;
    z-index: 999;
    width: 100px;
    height: 60px;
    top: 304px;
    background-image: url("../../static/img/dog4.png");
  }
  .dog5 {
    position: absolute;
    z-index: 999;
    width: 100px;
    height: 60px;
    top: 260px;
    background-image: url("../../static/img/dog5.png");
  }
  .dog6 {
    position: absolute;
    z-index: 999;
    width: 100px;
    height: 60px;
    top: 216px;
    background-image: url("../../static/img/dog6.png");
  }
  .dog7 {
    position: absolute;
    z-index: 999;
    width: 100px;
    height: 60px;
    top: 172px;
    background-image: url("../../static/img/dog7.png");
  }
  .dog8 {
    position: absolute;
    z-index: 999;
    width: 100px;
    height: 60px;
    top: 128px;
    background-image: url("../../static/img/dog8.png");
  }
  .dog9 {
    position: absolute;
    z-index: 999;
    width: 100px;
    height: 60px;
    top: 84px;
    background-image: url("../../static/img/dog9.png");
  }
  .dog10 {
    position: absolute;
    z-index: 999;
    width: 100px;
    height: 60px;
    top: 40px;
    background-image: url("../../static/img/dog10.png");
  }
</style>
