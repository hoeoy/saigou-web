<template>
  <div class="homepageRuning">
    <div class="runing-top"></div>
    <div class="runing-time">112</div>
    <div class="runing-runway" v-bind:style="[runway]">
      <div class="runing-start"></div>
      <div class="runing-mid"></div>
      <div class="runing-end"></div>
    </div>
    <div class="runing-dogback">
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
export default {
  name: 'homepageRuning',
  components: {
  },
  data () {
    return {
      arr: ['-30px -37px','-30px -95px','-30px -152px','-30px -208px','-30px -267px','-30px -323px','-30px -377px','-30px -440px'],
      runway: {},
      runwayLeft: 0,
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
    this.getDogRuning();
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
      let runwayLeft = this.runwayLeft;
      setInterval(d=>{
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
          let result = response.body.content;
          let D1 = [50, 100, 150, 200, 250, 300, 350, 400, 600, 800, 1000];
          this.dogruning01(D1)
        }else {
          console.log('获取开奖记录失败')
        }
      })
    }
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
    background-image: url("../../static/img/runway.png");
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
    background-image: url("../../static/img/start5.gif");
  }
  .runing-mid {
    position: absolute;
    z-index: 500;
    width: 179px;
    height: 533px;
    left: 1500px;
    background-image: url("../../static/img/middle.png");
  }
  .runing-end {
    position: absolute;
    z-index: 500;
    width: 276px;
    height: 630px;
    left: 3000px;
    background-image: url("../../static/img/runend.png");
  }
  .dog1 {
    position: absolute;
    z-index: 999;
    width: 100px;
    height: 60px;
    top: 436px;
    transition: left 1s;
    background-image: url("../../static/img/dog1.png");
  }
  .dog2 {
    position: absolute;
    z-index: 999;
    width: 100px;
    height: 60px;
    top: 392px;
    transition: left 1s;
    background-image: url("../../static/img/dog2.png");
  }
  .dog3 {
    position: absolute;
    z-index: 999;
    width: 100px;
    height: 60px;
    top: 348px;
    transition: left 1s;
    background-image: url("../../static/img/dog3.png");
  }
  .dog4 {
    position: absolute;
    z-index: 999;
    width: 100px;
    height: 60px;
    top: 304px;
    transition: left 1s;
    background-image: url("../../static/img/dog4.png");
  }
  .dog5 {
    position: absolute;
    z-index: 999;
    width: 100px;
    height: 60px;
    top: 260px;
    transition: left 1s;
    background-image: url("../../static/img/dog5.png");
  }
  .dog6 {
    position: absolute;
    z-index: 999;
    width: 100px;
    height: 60px;
    top: 216px;
    transition: left 1s;
    background-image: url("../../static/img/dog6.png");
  }
  .dog7 {
    position: absolute;
    z-index: 999;
    width: 100px;
    height: 60px;
    top: 172px;
    transition: left 1s;
    background-image: url("../../static/img/dog7.png");
  }
  .dog8 {
    position: absolute;
    z-index: 999;
    width: 100px;
    height: 60px;
    top: 128px;
    transition: left 1s;
    background-image: url("../../static/img/dog8.png");
  }
  .dog9 {
    position: absolute;
    z-index: 999;
    width: 100px;
    height: 60px;
    top: 84px;
    transition: left 1s;
    background-image: url("../../static/img/dog9.png");
  }
  .dog10 {
    position: absolute;
    z-index: 999;
    width: 100px;
    height: 60px;
    top: 40px;
    transition: left 1s;
    background-image: url("../../static/img/dog10.png");
  }
</style>
