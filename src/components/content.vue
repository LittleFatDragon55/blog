<template>
  <div class="content" style="overflow: auto">
    <h1 class="title">{{ data.title }}</h1>
    <p class="desc">{{ data.desc }}</p>
    <div class="mate">
      <span v-if="data.meta">查看{{ data.meta.views }}</span>
      <span v-if="data.meta">评论{{ data.meta.comments }}</span>
      <span v-if="data.meta">赞{{ data.meta.likes }}</span>
      <span v-if="data.create_time">{{ data.create_time.split(".")[0] }}</span>
    </div>
    <div class="ql-editor" v-html="data.content"></div>
    <el-button type="danger" @click="addLikes">点赞</el-button>
    <div>
      <p class="pl_text">评论区</p>
      <div>
        <el-form>
          <el-form-item>
            <el-input type="textarea" :rows="5" v-model="content" placeholder="文明社会，理性评论"></el-input>
          </el-form-item>
          <el-form-item style="text-align: left">
            <el-button type="primary" @click="add_comment">发送</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="comments">
        <ul>
          <li v-for="item in data.comments">
            <div>
              <img src="../assets/头像.jpeg" style="width:40px;border-radius: 50%;display: inline-block;">
              <p style="display: inline-block;font-size: 12px">
                <span style="display: block;">{{ item.user.username }}</span>
                <span style="display: block;">{{ get_time(item.create_time) }}</span>
              </p>
            </div>
            <div class="comment_content">
              <p>{{ item.content }}</p>
              <span style="color: #3f9eff;font-size: 10px;cursor: pointer;" @click="reply(item,{})">回复</span>
            </div>
            <div v-if="item.other_comments.length>0">
              <ul class="replycomment">
                <li v-for="item1 in item.other_comments">
                  <div>
                    <img src="../assets/头像.jpeg" style="width:40px;border-radius: 50%;display: inline-block;">
                    <p style="display: inline-block;font-size: 12px">
                      <span style="display: block;">{{ item1.user.username }}</span>
                      <span style="display: block;">{{ get_time(item1.create_time) }}</span>
                    </p>
                  </div>
                  <div class="comment_content">
                    <p><span class="toUser">{{ "@" + item1.to_user.username + ":" }}</span>{{ item1.content }}<span>🤍</span></p>
                    <span style="color: #3f9eff;font-size: 10px;cursor: pointer;" @click="reply(item,item1)">回复</span>
                  </div>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <el-dialog title="回复" center :visible.sync="show" :modal-append-to-body="false">
      <el-form>
        <el-form-item>
          <el-input v-model="reply_content" type="textarea" placeholder="文明社会，理性评论" :rows="5"></el-input>
        </el-form-item>
        <el-form-item style="text-align: center">
          <el-button type="primary" @click="reply_data">发送</el-button>
          <el-button @click="show=false">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import {getTime} from "../utils/utils"

export default {
  name: "detail",
  data() {
    return {
      data: {},
      content: "",
      user: JSON.parse(sessionStorage.getItem("userInfo")),
      show: false,
      reply_content: "",
      comment_data: {},
      other_comment:{}
    };
  },
  mounted() {
    console.log(this.$route.params.id);
    this.detail();
  },
  methods: {
    get_time(time) {
      return getTime(time)
    },
    detail() {
      this.axios
          .get("/api/article/article_detail", {
            params: {
              id: this.$route.params.id,
            },
          })
          .then((res) => {
            this.data = res.data.data;
            console.log(res.data, getTime(this.data.comments[0].create_time));

          });
    },
    addLikes() {
      this.axios
          .post("/api/article/getLikes", {
            id: this.$route.params.id,
          })
          .then((res) => {
            console.log(res.data);
            this.$message({
              type: "success",
              message: "点赞成功",
            });
            this.data.meta.likes = this.data.meta.likes + 1;
            // this.detail();
          });
    },
    add_comment() {
      if (this.content) {
        this.axios
            .post("/api/comment/add_comment", {
              article_id: this.data._id,
              user_id: this.user._id,
              content: this.content
            })
            .then((res) => {
              console.log(res.data);
              this.$message({
                type: "success",
                message: "评论成功",
              });
              // this.data.meta.likes = this.data.meta.likes + 1;
              // this.detail();
            });
      } else {
        this.$message({
          type: "warning",
          message: "请输入评论内容！",
        })
      }

    },
    reply(comment,other_comment) {
      this.comment_data = comment;
      this.other_comment = other_comment
      this.show = true
    },
    reply_data() {
      console.log(this.other_comment.user,this.comment_data.user)
      let to_user;
      if(this.other_comment.user){
        to_user = JSON.stringify(this.other_comment.user)
      }else{
        to_user = JSON.stringify(this.comment_data.user)
      }
      console.log(this.comment_data, this.reply_content,to_user)
      if (this.reply_content) {
        this.axios
            .post("/api/comment/reply_comment", {
              article_id: this.data._id,
              user_id: this.user._id,
              content: this.reply_content,
              comment_id: this.comment_data._id,
              to_user: to_user
            })
            .then((res) => {
              console.log(res.data);
              this.$message({
                type: "success",
                message: "回复成功",
              });
              this.comment_data = {};
              this.other_comment = {}
            });
      } else {
        this.$message({
          type: "warning",
          message: "请输入评论内容！",
        })
      }
    }
  },
};
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

.ql-editor p {
  line-height: 30px;
}

.pl_text {
  text-align: left;
  color: #878484;
  border-bottom: 1px solid #dbd7d7;
  display: block;
  margin: 10px 0;
}

.comments {
  width: 100%;
  text-align: left;
}

.comments ul li {
  margin: 20px 10px;

}
.replycomment li{
  border-left: 1px solid #e1e0e0;
  padding-left: 10px;
}
.comment_content {
  padding-left: 10px;
}
.toUser{
  display: inline-block;
  padding-right: 10px;
  font-size: 12px;
  color: #3f9eff;
}
</style>