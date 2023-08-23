<template>
  <div class="mapCom">
      <div id="cesiumContainer"></div>

      <div v-if="isShowSearch" class="search">
        <el-input placeholder="请输入您要查询乡镇或宅基地编号" v-model="searchInfo" class="input-with-select">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
     </div>

  </div>
</template>

<script>
import *as cesium from 'cesium'
import 'cesium/Build/Cesium/Widgets/widgets.css'
import {getTdtImgLayer} from '../../utils/cesiumLayer'
export default {
  name: 'MapView',
  data() {
    return {
      searchInfo:"",
      isShowSearch:true,
      isShowLegend:true

    };
  },
  mounted(){
    this.intiViewer();

    this.handleEvent()
  },
  computed:{
  },
  watch:{
  },
  components:{
  },
  methods: {
    //处理和地图交互事件
    handleEvent(){
      this.$bus.$on('fromDcOneMap', (data) => {
        if(!data.over){
          this.isShowSearch=true;
          this.isShowLegend=true


        }else{
          this.isShowSearch=false;
          this.isShowLegend=false
        }
        
      });
    },
    

    intiViewer(){
      // 初始化viewer部件
      var viewer = new cesium.Viewer('cesiumContainer', {
        shouldAnimate: true,
        animation: false, // 是否创建动画小器件，左下角仪表
        baseLayerPicker: false, // 是否显示图层选择器
        fullscreenButton: false, // 是否显示全屏按钮
        geocoder: false, // 是否显示geocoder小器件，右上角查询按钮
        homeButton: false, // 是否显示Home按钮
        infoBox: false, // 是否显示信息框
        sceneModePicker: false, // 是否显示3D/2D选择器
        selectionIndicator: false, // 是否显示选取指示器组件
        timeline: false, // 是否显示时间轴
        navigationHelpButton: false, // 是否显示右上角的帮助按钮
        scene3DOnly: false, // 如果设置为true，则所有几何图形以3D模式绘制以节约GPU资源
        baseLayer: getTdtImgLayer()
      });
      viewer.scene.globe.depthTestAgainstTerrain = true;

      // 开启抗锯齿
      if (cesium.FeatureDetection.supportsImageRenderingPixelated()) {
        viewer.resolutionScale = window.devicePixelRatio
      }
      viewer.scene.postProcessStages.fxaa.enabled = true
      // 三维默认位置
      viewer.camera.flyTo({
        destination: new cesium.Cartesian3.fromDegrees(
          config.camera.destination.x,
          config.camera.destination.y,
          config.camera.destination.z
        )
      });
      viewer._cesiumWidget._creditContainer.style.display = 'none';

      // var compassDom = document.getElementsByClassName('compassImg')[0]
      // var compassEvent = viewer.clock.onTick.addEventListener((clock) => {
      //   var northAngel = -Math.toDegrees(viewer.camera.heading) + 'deg';
      //   compassDom.style.transform = 'rotateZ(' + northAngel + ')';
      // })

    }
  },
};
</script>

<style scoped>
  .mapCom{
    width: 100%;
      height: 100%;
  }
  #cesiumContainer{
    width: 100%;
    height: 100%;
  }
  .search{
    position: absolute;
    left: 20px;
    top: 100px;
    z-index: 100;
  }
</style>
