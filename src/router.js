import Home from './components/content/Contents.vue'
import News from './components/news/News.vue'
import Test from './components/Test.vue'
import Company from './components/content/Company.vue'
export default[
  {
    path:'/',
    name:'/',
    component: Home
  },
  {
    path:'/news',
    component:News
  },
  {
    path:'/test',
    component:Test
  },
  {
    path:'/company',
    name:'company',
    component:Company
  }
]
