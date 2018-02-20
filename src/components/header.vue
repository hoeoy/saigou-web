<template>
  <div class="header clearfix">
    <div class="header-center clearfix">
      <a href="javascript:;" class="header-logo"></a>
      <a href="javascript:;" class="header-home" @click="goHome()">去首页</a>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'
export default {
  name: 'header',

  data () {
    return {

    }
  },
  mounted() {

  },
  methods: {
    goHome() {
      this.$router.push({
        name: 'homepage',
      })
    }
  }

}
</script>

<style scoped>
  .header {
    background-color: #0072DF;
    width: 100%;
  }
  .header-center {
    width: 1000px;
    padding: 4px 0;
    margin: 0 auto;
  }
  .header-logo {
    display: inline-block;
    height: 80px;
    width: 341px;
    float: left;
    background-image: url("/static/img/logo-top2.png");
    /*background-color: pink;*/
  }
  .header-home {
    height: 30px;
    line-height: 30px;
    border-radius: 30px;
    margin-top: 20px;
    color: black;
    width: 150px;
    float: right;
  }
  .header-home:hover {
    background-color: #7f807a;
  }
</style>
