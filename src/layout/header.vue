<template>
  <div class="header">
    <el-row :gutter="2">
      <el-col :xs="6" :sm="6" :md="6">
        <div>
          <img src="../assets/头像.jpeg" style="width: 60px;border-radius: 50%;" alt="">
        </div>
      </el-col>
      <el-col :xs="2" :sm="2" :md="1">
        <router-link to="/Article/0"><span :class="route_path==='Article'?'text_color':''">首页</span></router-link>
      </el-col>
      <!--      <el-col :xs="2" :sm="2" :md="1">-->
      <!--        <router-link to="/Article/0"><span>文章</span></router-link>-->
      <!--      </el-col>-->
      <el-col :xs="2" :sm="2" :md="1">
        <router-link to="/Archive" :class="route_path==='Archive'?'text_color':''"><span>归档</span></router-link>
      </el-col>
      <el-col :xs="2" :sm="2" :md="1">
        <router-link to="/tags" :class="route_path==='tags'?'text_color':''"><span>项目</span></router-link>
      </el-col>
      <el-col :xs="2" :sm="2" :md="1">
        <router-link to="/tags" :class="route_path==='tags'?'text_color':''"><span>历程</span></router-link>
      </el-col>
      <el-col :xs="2" :sm="2" :md="1">
        <router-link to="/tags" :class="route_path==='tags'?'text_color':''"><span>留言</span></router-link>
      </el-col>
      <el-col :xs="2" :sm="2" :md="1">
        <router-link to="/tags" :class="route_path==='tags'?'text_color':''"><span>关于</span></router-link>
      </el-col>
      <el-col :md="11" class="hidden-sm-and-down">
        <el-button class="button_style" type="primary" @click="show=true">登陆</el-button>
        <el-button class="button_style" type="danger">注册</el-button>
      </el-col>
    </el-row>
    <el-dialog :visible.sync="show" center title="登录" :modal-append-to-body="false">
      <el-form label-width="100px">
        <el-form-item label="用户名">
          <el-input v-model="name"/>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="password"/>
        </el-form-item>
        <el-form-item style="text-align: center">
          <el-button class="button_style" type="primary" @click="submit">登陆</el-button>
          <el-button class="button_style" type="primary" @click="show=false">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import {mapState} from "vuex"

export default {
  name: "headerNav",
  data() {
    return {
      iscolor: false,
      route_path: window.location.hash.split("/")[1],
      show: false,
      name: "",
      password: ""
    }
  },
  computed: {
    ...mapState({
      state_page: state => state.state_page
    }),

  },
  watch: {
    $route() {
      let path = window.location.hash.split("/")
      this.route_path = path[1]
      console.log(this.route_path)
    }
  },
  mounted() {
    console.log(window.location.hash)
    console.log(this.state_page)

  },
  methods: {
    submit() {
      if (this.name == "") {
        this.$message("请填写用户名!")
        return false
      }
      if (this.password == "") {
        this.$message("请填写密码!")
        return false
      }
      console.log(this.name, this.password)
      this.axios.post("/api/users/login", {username: this.name, password: this.password}).then(res => {
        sessionStorage.setItem("userInfo", JSON.stringify(res.data.data.userInfo))
        location.reload()
        this.show = false
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style scoped lang="scss">
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
  /*background: #fff;*/
  opacity: 0.9;

  .button_style {
    color: #fff;
  }

  .button_style:hover {
    color: black;

  }

  .text_color {
    color: #3f9eff;
  }
}


</style>