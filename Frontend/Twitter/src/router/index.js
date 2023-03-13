import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/main/Home.vue'
import PostView from '../views/main/Post.vue'
import CategoryView from '../views/main/CategoryView.vue'
import TagView from '../views/main/Tag.vue'
import AllCategoriesView from '../views/main/AllCategories.vue'
import AllTagsView from '../views/main/AllTags.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/post',
      name: 'Post',
      component: PostView
    },
    {
      path: '/category/:category',
      name: 'Category',
      component: CategoryView
    },
    {
      path: '/tag',
      name: 'Tag',
      component: TagView
    },
    {
      path: '/categories',
      name: 'Categories',
      component: AllCategoriesView
    },
    {
      path: '/tags',
      name: 'tags',
      component: AllTagsView
    },
  ]
})

export default router
