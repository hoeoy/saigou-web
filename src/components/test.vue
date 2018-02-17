<template>
  <div class="test">
    这里是test
    <div v-bind:style="styleObject">test</div>
  </div>
</template>

<script>
  import $ from 'jquery'
export default {
  name: 'test',
  data () {
    return {
      styleObject: {
        color: 'red',
        fontSize: '13px'
      }
    }
  },
  mounted() {

  }

}
</script>

<style scoped>


</style>
