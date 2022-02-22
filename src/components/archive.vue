<template>
  <div class="content">
   <div v-for="(item,index) in list" :key="index">
     <h2 class="yeartext">{{item.year}}</h2>
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


.article_list{
  line-height: 20px;
  position: relative;
  padding: 15px 0px;
  padding-right: 150px;
  border-bottom: 1px solid #f0f0f0;
  word-wrap: break-word;
  cursor: pointer;
  text-align: left;
}

.title {
  color: #333;
  margin: 7px 0 4px;
  display: inherit;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.5;
}
.title:hover{
  color: #3f9eff;
}
.blog_content{
  min-height: 30px;
  margin: 0 0 8px;
  font-size: 13px;
  line-height: 24px;
  color: #555;
}

.page{
  width: 100%;
  margin-top: 20px;
}
.yeartext{
  text-align: left;
  font-size: 30px;
  font-weight: bold;
}
</style>