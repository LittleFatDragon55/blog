<template>
  <div class="header">
    <el-row :gutter="2">
      <el-col :xs="6" :sm="6" :md="6">
        <div>
          <img src="../assets/头像.jpeg" style="width: 60px;border-radius: 50%;">
        </div>
      </el-col>
      <el-col :xs="2" :sm="2" :md="1">
        <router-link to="/Article/0"><span :class="route_path=='Article'?'textcolor':''">首页</span></router-link>
      </el-col>
<!--      <el-col :xs="2" :sm="2" :md="1">-->
<!--        <router-link to="/Article/0"><span>文章</span></router-link>-->
<!--      </el-col>-->
      <el-col :xs="2" :sm="2" :md="1">
        <router-link to="/Archive" :class="route_path=='Archive'?'textcolor':''"><span>归档</span></router-link>
      </el-col>
      <el-col :xs="2" :sm="2" :md="1">
        <router-link to="/tags" :class="route_path=='tags'?'textcolor':''"><span>项目</span></router-link>
      </el-col>
      <el-col :xs="2" :sm="2" :md="1">
        <router-link to="/tags" :class="route_path=='tags'?'textcolor':''"><span>历程</span></router-link>
      </el-col>
      <el-col :xs="2" :sm="2" :md="1">
        <router-link to="/tags" :class="route_path=='tags'?'textcolor':''"><span>留言</span></router-link>
      </el-col>
      <el-col :xs="2" :sm="2" :md="1">
        <router-link to="/tags" :class="route_path=='tags'?'textcolor':''"><span>关于</span></router-link>
      </el-col>
      <el-col :md="11" class="hidden-sm-and-down">
        <el-button class="buttonstyle" type="primary">登陆</el-button>
        <el-button class="buttonstyle" type="danger">注册</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapState } from "vuex"

export default {
  name: "headerNav",
  data(){
    return{
      iscolor:false,
      route_path:"Article"
    }
  },
  computed: {
    ...mapState({
      state_page: state => state.state_page
    })
  },
  watch:{
    $route(){
      let path = window.location.hash.split("/")
      this.route_path = path[1]

    }
  },
  mounted() {
    console.log(window.location.hash)
    console.log(this.state_page)
  }
}
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: 60px;
  border-bottom: 1px solid #eee;
  background-color: #fff;
  line-height: 60px;
  background: #fff;
  opacity: 0.9;
}

.buttonstyle {
  color: #fff;
}

.buttonstyle:hover {
  color: black;

}
.textcolor{
  color: #3f9eff;
}
</style>