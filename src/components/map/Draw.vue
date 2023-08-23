<template>
  <div class="draw">
      <div v-for="(item,index) in tools" :key="index" @click="item.cb" :class="item.class" class="tool">
        {{item.title}}
      </div>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      tools:[
        {
          title:"画点",
          cb:this.drawPoint(),
          class:"iconfont icon-dian"
        },
        {
          title:"画线",
          cb:this.drawPoint(),
          class:"iconfont icon-dianbuzhuoduandian"
        },
        {
          title:"画面",
          cb:this.drawPoint(),
          class:"iconfont icon-mianjiceliang"
        },
      ]
    };
  },
  computed:{
  },
  watch:{
  },
  methods: {
    drawPoint(){

    }
  },
};
</script>

<style scoped>
  @import url("http://at.alicdn.com/t/c/font_4220088_rb2pmaqvf7.css");
  .tool{
    display: inline-block;
  }
</style>
