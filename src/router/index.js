import Vue from 'vue'
import Router from 'vue-router'
import Article from '@/components/article'
import Home from '@/views/home'
import Content from "@/components/content"
import Archive from "@/components/archive"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Article/:tag_id',
      name: 'Article',
      component: Article
    },
    {
      path: '/Content/:id',
      name: 'Content',
      component: Content
    },
    {
      path: '/Archive',
      name: 'Archive',
      component: Archive
    }
  ]
})
