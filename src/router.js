import Home from './components/content/Contents.vue'
import News from './components/content/News.vue'
import Test from './components/Test.vue'
import Company from './components/content/Company.vue'
import Business from './components/content/Business.vue'
import ContactUs from './components/content/ContactUs.vue'
import UiStyle from './components/individual/UiStyle.vue'
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
  },
  {
    path:'/business',
    name:'business',
    component:Business
  },
  {
    path:'/contactus',
    name:'contactus',
    component:ContactUs
  },
  {
    path:'/uistyle',
    name:'uistyle',
    component:UiStyle
  }
]
