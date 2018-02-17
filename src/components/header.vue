<template>
  <div class="header clearfix">
    <div class="header-center clearfix">
      <a href="javascript:;" class="header-logo"></a>
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
    background-image: url("../../static/img/logo-top2.png");
    /*background-color: pink;*/
  }
</style>
