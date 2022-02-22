<template>
  <div class="content" style="overflow: auto;" >
    <h1 class="title">{{ data.title }} </h1>
    <p class="desc">{{ data.desc }}</p>
    <div class="mate">
      <span v-if="data.meta">查看{{data.meta.views}}</span>
      <span v-if="data.meta">评论{{data.meta.comments}}</span>
      <span v-if="data.meta">赞{{data.meta.likes}}</span>
      <span v-if="data.create_time">{{data.create_time.split(".")[0]}}</span>
    </div>
    <div class="ql-editor " v-html=" data.content">
    </div>
    <el-button type="danger" @click="addLikes">点赞</el-button>
  </div>
</template>

<script>
export default {
  name: "detail",
  data() {
    return {
      data: {}
    }
  },
  mounted() {
    console.log(this.$route.params.id)
    this.detail()
  },
  methods: {
    detail() {
      this.axios.get("/api/article/article_detail", {
        params: {
          id: this.$route.params.id
        }
      }).then(res => {
        this.data = res.data.data
        console.log(res.data)
      })
    },
    addLikes() {
      this.axios.post("/api/article/getLikes", {
        id: this.$route.params.id
      }).then(res => {
        console.log(res.data)
        this.$message({
          type: "success",
          message: "点赞成功"
        })
        this.detail()
      })
    }
  }
}
</script>

<style scoped>
.title {
  font-weight: bold;
  font-size: 30px;
  text-align: center;
}

.desc {
  font-size: 12px;
  margin: 10px;
  text-align: center;
}
</style>