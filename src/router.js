import Home from './components/content/Contents.vue'
import News from './components/news/News.vue'
import Test from './components/Test.vue'
export default[
  {
    path:'/',
    component: Home
  },
  {
    path:'/news',
    component:News
  },
  {
    path:'/test',
    component:Test
  }
]
