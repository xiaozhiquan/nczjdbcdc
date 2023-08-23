<template>
  <div class="mainpage">
    <el-container>
        <el-header>
          <div class="title">农村宅基地信息采集系统</div>
          <div class="means">
            <el-menu
                default-active="0"
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelect"
                background-color="#3E4ADC"
                text-color="#fff"
                active-text-color="#26E050">
                <el-menu-item v-for="(item,index) in routers" :key="index" :index="index.toString()">
                    <i class="el-icon-s-data"></i>{{item.children[0].meta.title}}
                </el-menu-item>
                
            </el-menu>
          </div>
        </el-header>
        <el-main style="height: 0;flex-grow=1">
            <MapView v-if="showMapRouterView"></MapView>
            <router-view name="withMap" :class="showMapRouterView?'mapRouterView':''"/>
            <router-view />
        </el-main>
    </el-container>
  </div>
</template>

<script>
import MapView from '@/components/map/MapView'
import appRouter from  '@/router/app.js'
export default {
  name: 'mainpage',
  data() {
    return {
        routers:null,
        showMapRouterView:true
    };
  },
  components:{
    MapView
  },
  computed:{
  },
  mounted(){
    this.routers = appRouter

    this.handleSelect(0)
  },
  watch:{
    
  },
  methods: {
    handleSelect(key, keyPath) {
        var path = this.routers[key].children[0].path

        console.log(this.$router);
        this.$router.push("/"+path);
      } 
  },
};
</script>

<style scoped lang="scss">
  .mainpage{
    width: 100%;
    height: 100%;
  }
  .el-container.is-vertical{
    width: 100%;
    height: 100%;
  }
    /deep/ .el-header{
        padding: 0px;
        position: relative;
    }
    .title{
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      z-index: 100;
      font-size: large;
      color: #20FF13;
      left: 20px;
      font-weight: bold;
    }
    /deep/.el-main{
      height: 100%;
      display: flex;
    }
    /deep/.el-menu-demo.el-menu--horizontal.el-menu{
        display: flex;
        justify-content: end;
    }

    /deep/.el-menu-item i{
        color: white;
    }
    /deep/.el-card__body, .el-main{
      padding: 0px;
    }
    .mapRouterView{
      position: absolute;
      right: 20px;
      top: 100px;
    }
</style>
