<template>
  <div class="content">
   <div v-for="(item,index) in list" :key="index">
     <h2 class="year_text">{{item.year}}</h2>
     <ul>
       <li v-for="item1 in item.list" :key="item1._id" class="article_list">
         <router-link :to="'/content/'+item1._id">
           <p class="title">{{item1.title}}</p>
           <p class="blog_content">{{item1.create_time.split(".")[0]}}</p>
         </router-link>
       </li>
     </ul>
   </div>

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
          currentPage: this.currentPage,
          article:1
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