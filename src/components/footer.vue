<template>
  <div class="footer clearfix">
    <div class="footer-center clearfix">
      <div class="phone-content clearfix">
        <a class="phone-name">测试反馈：</a>
        <span class="phone-qq" v-for="msg in msgs">{{msg}}</span>
      </div>
      <div class="footer-logo-content clearfix">
        <a href="javascript:;" class="footer-logo"></a>
        <span class="footer-text">本网站只限娱乐游戏，禁止各种赌博</span>
      </div>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'
export default {
  name: 'footer',
  data () {
    return {
      msgs : [
        '333333333(客服1)',
        '333333333(客服1)',
        '333333333(客服1)',
        '333333333(客服1)',
        '333333333(客服1)',
        '333333333(客服1)',
      ]
    }
  },
  mounted() {

  }

}
</script>

<style scoped>
  .footer {
    width: 100%;
    background-color: #333333;
  }
  .footer-center {
    margin: 25px auto 0;
    padding-top: 25px;
    width: 1000px;
  }
  .phone-content {
    color: #999;
    line-height: 18px;
    padding-bottom: 25px;
    border-bottom: 1px solid #444444;
  }
  .phone-name {
    float: left;
    display: inline-block;
  }
  .phone-qq {
    margin-right: 20px;
    font-size: 14px;
    float: left;
  }

  .footer-logo-content {
    padding: 6px 0px;
  }
  .footer-logo  {
    float: left;
    display: inline-block;
    width: 341px;
    height: 80px;
    background-image: url("../../static/img/logo-top2.png");
  }
  .footer-text {
    width: 300px;
    background:none;
    line-height:24px;
    font-size: 12px;
    margin-top: 20px;
    color: #999999;;
    float:left;
  }
</style>
