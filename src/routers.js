
import  Home from "./components/Home"
import  Meun from  "./components/Meun"
import  Admin from "./components/Admin"
import  Login from "./components/Login.vue"
import  Register from "./components/Register"
import  About from "./components/about/About"


// 二级路由
import Contact from "./components/about/Contact"
import History from "./components/about/History"
import OrderingGuide from "./components/about/OrderingGuide"
import Delivery from "./components/about/Delivery"

// 三级路由
import  Persion from "./components/about/contact/Persion"
import  Phone from "./components/about/contact/Phone"
const routers = [
  {
    path: '/',
    name: 'homeLink',
    component: Home
  },{
    path: '/admin',
    name:'adminLink',
    component:Admin
  },{
    path: '/login',
    name:'loginLink',
    component:Login
  },{
    path: '/register',
    name:'registerLink',
    component:Register
  },{
    path: '/about',
    name:'aboutLink',
    component:About,redirect:"/about/contact",children:[
      {path:'/about/contact',name:'contactLink',redirect:'/about/contact/persion', component:Contact,children:[
          {path:"/about/contact/persion",name:'persionLink',component:Persion},
          {path:"/about/contact/phone",name:'phoneLink',component:Phone}
        ]}
      ,{path:'/about/history',name:'historyLink',component:History}
      ,{path:'/about/orderingGuide',name:'orderingGuideLink',component:OrderingGuide}
      ,{path:'/about/delivery',name:'deliveryLink',component:Delivery}
    ]
  },{
    path:'/meun',
    name: 'meunLink',
    component:Meun
  },{
    path:'*',
    redirect:'/'
  }
]
export default routers
