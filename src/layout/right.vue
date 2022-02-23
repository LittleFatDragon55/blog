<template>
  <div class="user_msg">
    <div class="introduce">
      <img src="../assets/头像.jpeg" class="logo" alt="">
      <p style="font-size: 18px;font-weight: bold;">哈哈哈哈</p>
    </div>
    <div class="tag_div" style="height: 270px">
<!--      <p class="tit">标签云</p>-->
      <Tag_cloud></Tag_cloud>
<!--      <span v-for="item in tagList" :key="item.id"><router-link :to="'/Article/'+item._id">{{item.name}}</router-link></span>-->
    </div>
    <div class="introduce">
      <p class="tit">技术</p>
      <img src="../assets/js.png" style="width: 100%" alt="">

    </div>
<!--    <div class="introduce">-->
<!--      <p class="tit">开源项目</p>-->
<!--      <img src="../assets/FrontEndGitHub.png" style="width: 100%">-->

<!--    </div>-->
  </div>
</template>

<script>
import Tag_cloud from '../components/tagcloud'
export default {
  name: "right",
  components: {
    Tag_cloud
  },
  data() {
    return {
      tagList: [],
      myColors: ['#1f77b4', '#629fc9', '#94bedb', '#c9e0ef'],
    }
  },
  mounted() {
    this.tags()
  },
  methods: {
    tags() {
      this.axios.get("/api/tag/list_tag").then(res => {
        this.tagList = res.data.data
        console.log(this.tagList)
      }).catch(err=>{
        console.log(err)
      })


    },
    wordClickHandler(name, value, vm) {
      console.log('wordClickHandler', name, value, vm);
    }
  }
}
</script>

<style scoped>
.user_msg {
  height: 700px;
  padding: 10px;
  /*border: 1px solid red;*/
  margin: 10px 0;
}

.introduce {
  width: 100%;
  text-align: center;
  padding-bottom: 15px;
  border-bottom: 1px solid #e1e0e0;
}

.logo {
  width: 130px;
  border-radius: 50%;
  animation: logo 3s;
  -moz-animation: logo 3s;
  -webkit-animation: logo 3s;
  -o-animation: logo 3s;
  animation-iteration-count: infinite;
}

.tag_div {
  width: 100%;
  /*height: 200px;*/
  padding: 15px 0;
  border-bottom: 1px solid #e1e0e0;
}

.tit {
  font-size: 14px;
  color: #969696;
  font-weight: bold;
}

.tag_div span {
  display: inline-block;
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 5px;
  background-color: #eee;
  color: #333;
  margin: 10px 10px 0 0;
  text-decoration: none;
  font-size: 10px;
}

.tag_div span:hover {
  color: #3f9eff
}

@keyframes logo {
  0% {
    transform: rotate(0deg) scale(0.8, 0.8);
    opacity: 1;
  }
  25% {
    transform: rotate(0deg) scale(1, 1);
    opacity: 0.8;
  }
  100% {
    transform: rotate(0deg) scale(0.8, 0.8);
    opacity: 1;
  }
}

@-moz-keyframes logo {
  0% {
    transform: rotate(0deg) scale(0.8, 0.8);
    opacity: 1;
  }
  25% {
    transform: rotate(0deg) scale(1, 1);
    opacity: 0.8;
  }
  100% {
    transform: rotate(0deg) scale(0.8, 0.8);
    opacity: 1;
  }
}

@-webkit-keyframes logo {
  0% {
    transform: rotate(0deg) scale(0.8, 0.8);
    opacity: 1;
  }
  25% {
    transform: rotate(0deg) scale(1, 1);
    opacity: 0.8;
  }
  100% {
    transform: rotate(0deg) scale(0.8, 0.8);
    opacity: 1;
  }
}

@-o-keyframes logo {
  0% {
    transform: rotate(0deg) scale(0.8, 0.8);
    opacity: 1;
  }
  25% {
    transform: rotate(0deg) scale(1, 1);
    opacity: 0.8;
  }
  100% {
    transform: rotate(0deg) scale(0.8, 0.8);
    opacity: 1;
  }
}
</style>