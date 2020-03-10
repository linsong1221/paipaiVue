import Home from './components/content/Contents.vue'
import News from './components/content/News.vue'
import Test from './components/Test.vue'
import Company from './components/content/Company.vue'
import Business from './components/content/Business.vue'
import ContactUs from './components/content/ContactUs.vue'
import UiStyle from './components/individual/UiStyle.vue'

import wapHome from './wap/content/Contents.vue'
import wapCompany from './wap/content/Company.vue'
import NewsDetail from "./components/news/NewsDetail";

function IsPC(){
  var userAgentInfo = navigator.userAgent;
  var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");
  var flag = true;
  for (var v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) { flag = false; break; }
  }
  return flag;
}
var routerFlag = IsPC();
sessionStorage.setItem('flag',routerFlag);

var flagRouter = JSON.parse(sessionStorage.getItem('flag'));

let aaa = []
aaa = [
  {
    path:'/',
    name:'/',
    component: Home
  },
  {
    path:'/index',
    name:'/index',
    component: Home
  },
  {
    path:'/news',
    name:'/news',
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
  },
  {
    path:'/uistyle',
    name:'uistyle',
    component:UiStyle
  },
  {
    path:'/newsdetail',
    name:'newsdetail',
    component:NewsDetail
  },
]

// let aaa = []
// if (flagRouter) {
//   aaa = [
//     {
//       path:'/',
//       name:'/',
//       component: Home
//     },
//     {
//       path:'/index',
//       name:'/index',
//       component: Home
//     },
//     {
//       path:'/news',
//       name:'/news',
//       component:News
//     },
//     {
//       path:'/test',
//       component:Test
//     },
//     {
//       path:'/company',
//       name:'company',
//       component:Company
//     },
//     {
//       path:'/business',
//       name:'business',
//       component:Business
//     },
//     {
//       path:'/contactus',
//       name:'contactus',
//       component:ContactUs
//     },
//     {
//       path:'/uistyle',
//       name:'uistyle',
//       component:UiStyle
//     },
//     {
//       path:'/uistyle',
//       name:'uistyle',
//       component:UiStyle
//     },
//     {
//       path:'/newsdetail',
//       name:'newsdetail',
//       component:NewsDetail
//     },
//   ]
// } else {
//   aaa = [
//     {
//       path:'/',
//       name:'/',
//       component: wapHome
//     },
//     {
//       path:'/wap/index',
//       name:'wapHome',
//       component: wapHome
//     },
//     {
//       path:'/wap/company',
//       name:'wapCompany',
//       component:wapCompany
//     }
//   ]
// }

export default aaa;

// if (!flagRouter) {
//   this.$router.push({name:"/index"})
//
// } else{
//   this.$router.push({name:"/index"})
// }
