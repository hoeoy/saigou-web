<template>
  <div class="homepage">
    <div class="homepage-top clearfix">
      <div class="top-center">
        <div class="float-left">
          <a href="javascript:;">首页</a>
          >
        </div>
      </div>
    </div>
    <homepagePublic></homepagePublic>
    <homepageRuning></homepageRuning>
    <homepageRecord></homepageRecord>
  </div>
</template>

<script>
  import $ from 'jquery'
  import homepagePublic from './homepage-public.vue'
  import homepageRuning from './homepage-runing.vue'
  import homepageRecord from './homepage-record.vue'
export default {
  name: 'homepage',
  components: {
    homepagePublic, homepageRuning, homepageRecord
  },
  data () {
    return {

    }
  },
  mounted() {

  }

}
</script>

<style scoped>
  .homepage {
    width: 100%;
    margin: 0 auto;
  }
  .homepage-top {
    width: 100%;
    padding-top: 2px;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    color: #666666;
    border-bottom: 1px solid #dddddd;
    margin-bottom: 10px;
  }
  .top-center{
    width: 1000px;
    margin: 0 auto;
  }

</style>
