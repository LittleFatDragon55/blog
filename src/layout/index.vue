<template>
  <div id="app">
    <canvas id="myCanvas" width="800px" height="600px"></canvas>
    <Header></Header>
    <div class="bottom" :style="'height:'+height ">
      <div class="center">
        <el-row :gutter="10">
          <el-col :md="18">
            <router-view/>
          </el-col>
          <el-col :md="6">
            <Right></Right>
          </el-col>
        </el-row>
      </div>

    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./header";
import Footer from "./footer";
import Right from "./right";
// import {bubbleCursor} from "../assets/bubbleCursor"
// import {emojiCursor} from "../assets/emojiCursor"
import {fairyDustCursor} from "../assets/fairyDustCursor"
import {init} from "../assets/balloon"

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Right
  },
  data() {
    return {
      state: false,
      height: "600px",
      clientHeight: "",
    }
  },
  watch: {
    clientHeight() {
      this.height = this.clientHeight - 160 + "px"
    }
  },
  mounted() {
    // bubbleCursor({ element: document.querySelector("#app") })
    // emojiCursor({ element: document.querySelector("#app") })
    this.clientHeight = `${document.documentElement.clientHeight}`;//获取浏览器可视区域高度
    console.log(this.clientHeight)
    fairyDustCursor({element: document.querySelector("#app")})
    // init()

  },
  methods: {}
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

.bottom {
  width: 100%;
  height: 700px;
  position: fixed;
  top: 60px;
  overflow: auto;
}

.center {
  width: 90%;
  height: 100%;
  margin: 0 auto;
}

#myCanvas {
  width: 100%;
  //height: 100%;
}
</style>
