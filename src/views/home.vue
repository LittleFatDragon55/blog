<template>
  <div class="content">
    <ul>

      <li v-for="item in list" :key="item._id" class="article_list">
        <router-link :to="'/content/'+item._id">
          <p class="title">{{item.title}}</p>
          <p class="blog_content">{{item.desc}}</p>
          <div class="mate">
            <span>查看{{item.meta.views}}</span>
            <span>评论{{item.meta.comments}}</span>
            <span>赞{{item.meta.likes}}</span>
            <span>{{item.create_time.split(".")[0]}}</span>
          </div>
        </router-link>
      </li>


    </ul>
    <!--    <div class="page">-->
    <!--      <el-pagination-->
    <!--          @size-change="handleSizeChange"-->
    <!--          @current-change="handleCurrentChange"-->
    <!--          :current-page="1"-->
    <!--          :page-sizes="[5,10, 20, 30, 40]"-->
    <!--          :page-size="currentPage"-->
    <!--          layout="total, sizes, prev, pager, next, jumper"-->
    <!--          :total="total"-->
    <!--      style="float: right;">-->
    <!--      </el-pagination>-->
    <!--    </div>-->
  </div>
</template>

<script>
export default {
  data(){
    return {
      pageSize:0,
      currentPage:1000,
      list:[],
      total:0,
    }
  },
  mounted() {
    this.listData()
  },
  methods:{
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    listData(){
      this.axios.get("/api/article/article_list", {
        params: {
          pageSize: this.pageSize,
          currentPage: this.currentPage
        }
      }).then(res => {
        console.log(res.data.data)
        this.list = res.data.data.list
        this.total = res.data.data.total
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style scoped>

</style>