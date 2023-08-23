<template>
  <div class="dcOnemap">
    
    <div class="layerChange">
        <el-dropdown split-button type="primary" @command="selectLayer">{{checkedLayers}}
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item v-for="(layer,index) in layers" :key="index" @command="layer.title">
                    {{layer.title}}
                </el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>

    <div class="popup">
      <div class="popupTitle">宅基地信息</div>
      <div class="popupContent">
        <div class="navis">
          <div class="navi" @click="panel=1">宅基地信息</div>
          <div class="navi" @click="panel=2">房屋信息</div>
          <div class="navi" @click="panel=3">所有人权信息</div>
        </div>
        <div class="panel" v-show="panel==1">宅基地信息</div>
        <div class="panel" v-show="panel==2">房屋信息</div>
        <div class="panel" v-show="panel==3">所有人权信息</div>
        <!-- <el-tabs tab-position="left" >
            <el-tab-pane label="宅基地信息">宅 基 地 信 息</el-tab-pane>
            <el-tab-pane label="房屋信息">房 屋 信 息</el-tab-pane>
            <el-tab-pane label="所有人权信息">所有人权信息</el-tab-pane>
        </el-tabs> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'dcOnemap',
  data() {
    return {
        checkedLayers:"图层切换",
        layers:[{
            title:"土地利用现状"
        },
        {
            title:"规划数据"
        }],
        panel:1,
    }
  },
  components:{
    // LayersChange,Popup
  },
  computed:{
  },
  mounted(){
    this.$bus.$emit('fromDcOneMap',{over:false})
  },
  watch:{
  },
  
  beforeDestroy(){
    
    this.$bus.$emit('fromDcOneMap',{over:true})
  },
  methods: {
    selectLayer(aa){
        console.log(aa);
    }
  },
};
</script>

<style scoped>
    .dcOnemap{
      width: 352px;
      .layerChange{
        display: flex;
        flex-direction: row-reverse;
      }
      .popup{
        color: white;
        margin-top: 30px;
        .popupTitle{
          font-size: 20px;
          margin-bottom: 5px;
          padding: 10px;
          background-color: rgba(0,0,0,0.5);
        }
        .popupContent{
          padding: 10px;
          background-color: rgba(0,0,0,0.5);
          /* height: 300px; */
          display: flex;
          .navis{
            width: 8%;
            flex-direction: column;
            .navi{
              background-color: #233B64;
              text-align: center;
              margin-bottom: 10px;
              &:hover{
                cursor: pointer;
              }
            }
          }
          .panel{
            width: 90%;
          }
        }

      }
    }
   
</style>
