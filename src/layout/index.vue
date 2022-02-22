<template>
  <div id="app">
    <canvas id="myCanvas" width="800px" height="600px"></canvas>
    <Header></Header>
    <div class="bottom">
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
import {bubbleCursor} from "../assets/bubbleCursor"
import {emojiCursor} from "../assets/emojiCursor"

import {fairyDustCursor} from "../assets/fairyDustCursor"

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Right
  },
  data() {
    return {
      state: false
    }
  },
  mounted() {
    // bubbleCursor({ element: document.querySelector("#app") })
    // emojiCursor({ element: document.querySelector("#app") })

    fairyDustCursor({ element: document.querySelector("#app") })

    let canvas = document.getElementById("myCanvas");
    let context = canvas.getContext("2d");
    let iWidth = canvas.width
    let iHeight = canvas.height
    let length = 20
    let speed = -1

    context.fillStyle = 'red';
    context.beginPath();
    context.fillRect(0, 0, length, length);//绘制矩形
    context.arc(length, (iHeight / 2), length, 0, 2 * Math.PI, true);//圆
    context.closePath();
    context.fill();
    let startPoint = iHeight - length;
    let self = this
    setInterval(function () {
      startPoint += speed;
      if (startPoint <= (-1 * length)) {
        startPoint = iHeight - length
      }
      self.run(context, iWidth, iHeight, length, startPoint);
    }, 30);
  },
  methods: {
    run(cxt, width, height, length, point) {
      cxt.clearRect(0, 0, width, height);
      cxt.beginPath();
      cxt.fillRect(0, point, length, length);
      cxt.arc(length, (point / 2), length, 0, 2 * Math.PI, true);
      cxt.closePath();
      cxt.fill();
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

.bottom {
  width: 100%;
  height: 700px;
  position: fixed;
  top: 60px;
}

.center {
  width: 90%;
  height: 100%;
  margin: 0 auto;
}

#myCanvas {
  width: 100%;
  height: 100%;
}
</style>
