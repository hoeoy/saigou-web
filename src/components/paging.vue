<template>
  <div class="skin-page-holder page-holder" id="pageComponent" style="padding-bottom:0px;">
    <div class="paginlist">
      <span class="pagesize-info">
        <span v-if="classifier!=null">共{{totalSize}}{{classifier}},</span>
        <span v-else>共{{totalSize}}条，</span>
      <span>{{currentpage}}</span>/<span>{{pageLine}}</span>页
      </span>
      <template>
        <a class="page-first" href="javascript:void(0);" v-if="pageLine>1 && currentpage != 1" v-on:click="pageClick(1)">首页</a>
        <a class="page-first disable" href="javascript:void(0);" v-else>首页</a>
      </template>
      <template>
        <a class="page-left" href="javascript:void(0);" v-if="pageLine>1 && currentpage != 1" v-on:click="pagePrevClick(currentpage)">上一页</a>
        <a class="page-left disable" href="javascript:void(0);" v-else>上一页</a>
      </template>
      <a href="javascript:void(0);" v-on:click="pageClick(1)" v-bind:class="currentClass(1)">1</a>
      <span v-if="showLessTail">...</span>
      <a href="javascript:void(0);" v-for="pn in indexs" v-bind:class="currentClass(pn)" v-on:click="pageClick(pn)">{{pn}}</a>
      <span v-if="showMoreTail">...</span>
      <a href="javascript:void(0);" v-on:click="pageClick(pageLine)" v-if="pageLine!=1" v-bind:class="currentClass(pageLine)">
        {{pageLine}}</a>
      <template>
        <a class="page-right" href="javascript:void(0);" v-if="pageLine>=1 && currentpage != pageLine" v-on:click="pageNextClick(currentpage)">下一页</a>
        <a class="page-right disable" href="javascript:void(0);" v-else>下一页</a>
      </template>
      <template>
        <a class="page-last" href="javascript:void(0);" v-if="pageLine>=1 && currentpage != pageLine " v-on:click="pageClick(pageLine)">尾页</a>
        <a class="page-last disable" href="javascript:void(0);" v-else>尾页</a>
      </template>
      <div class="page-count">
        <span>每页显示15条</span>
      </div>
    </div>
  </div>
</template>
<script>
import Router from 'vue-router'
export default {
  name: 'page',
  props: ['pageData', 'totalSize',"classifier"],
  data() {
    return {
      showTail: true,
      showLessTail: false,
      showMoreTail: false,
      totalPage: null,
      pageLine: null,
      currentpage: null,
      limitLine: '15',
      startLine: null
    }
  },
  computed: {
    indexs: function() {
      //总数
      let totalPage = this.totalSize;
      //起始条数
      let startLine = Number(this.pageData.startLine);
      //每页条数
      let limitLine = Number(this.pageData.limitLine);
      //分页余数
      let pageLine_m = (totalPage % limitLine);
      //总分页
      let pageLine = null;
      if (pageLine_m == 0) {
        pageLine = parseInt(totalPage / limitLine);
      } else {
        pageLine = parseInt(totalPage / limitLine) + 1;
      }
      //当前页
      let currentpage = parseInt(startLine / limitLine) + 1;
      this.pageLine = pageLine;
      this.currentpage = currentpage;
      this.limitLine = limitLine;
      this.totalSize = totalPage;

      var ar = [];
      if (currentpage > 4) {
        ar.push(currentpage - 2);
        ar.push(currentpage - 1);
        this.showLessTail = true;
      } else {
        for (var i = 2; i < currentpage; i++) {
          ar.push(i);
        }
        this.showLessTail = false;
      }
      if (currentpage != pageLine) {
        if (currentpage != 1) {
          ar.push(currentpage);
        }
      }
      if (currentpage < (pageLine - 3)) {
        ar.push(currentpage + 1);
        ar.push(currentpage + 2);
        this.showMoreTail = true;
      } else {
        for (var i = (currentpage + 1); i < pageLine; i++) {
          ar.push(i);
        }
        this.showMoreTail = false
      }
      return ar;
    }
  },
  methods: {
    currentClass: function(pn) {
      var currentPage = this.currentpage;
      return (currentPage == pn) ? 'current' : '';
    },
    pageClick: function(page) {
      let startLine = this.limitLine * (page - 1);
      this.startLine = startLine;
      this.$router.push({
        path: this.pageData.pageTo + '/' + startLine + '/' + this.limitLine
      })
    },
    pagePrevClick: function(page) {
      page = page - 1;
      let startLine = this.limitLine * (page - 1);
      this.startLine = startLine;
      this.$router.push({
        path: this.pageData.pageTo + '/' + startLine + '/' + this.limitLine
      })
    },
    pageNextClick: function(page) {
      page = page + 1;
      let startLine = this.limitLine * (page - 1);
      this.startLine = startLine;
      this.$router.push({
        path: this.pageData.pageTo + '/' + startLine + '/' + this.limitLine
      })
    }
  }
}
</script>
<style scoped>
.page-holder {
  margin-top: 5px;
  padding-bottom: 20px;
}

.page-holder .paginlist {
  line-height: 26px;
  text-align: right;
}

.page-holder a {
  min-width: 26px;
  height: 26px;
  line-height: 26px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  vertical-align: middle;
  margin-right: 6px;
}

.page-holder .pagesize-info {
  margin-right: 20px;
}

.page-holder>.page-left,
.page-holder>.page-right,
.page-holder>.page-first,
.page-holder>.page-last {
    width: auto;
    padding: 0 10px;
  }

  .page-first.disable,
  .page-left.disable,
  .page-right.disable,
  .page-last.disable {
    cursor: not-allowed;
  }

.page-holder .page-count {
  float: right;
  margin-left: 34px;
  height: 26px;
  line-height: 26px;
  margin-right: 20px;

}

.page-holder>select {
  width: 50px;
  height: 26px;
}
.skin-page-holder a {
  border: 1px solid #b3b3b3;
  color: #333;
  background-color: #fff;
}
.current:hover, .page-holder .current {
  background-color: #29b3a5;
  color: #fffefe;
  border-color: #666;
}
</style>
