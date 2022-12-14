import { 
  createRouter, 
  createWebHistory 
} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DataBinding from '../views/DataBinding.vue'
//import AboutView from '../views/AboutView.vue'
import DataBindingHtml from '../views/DataBindingHtml.vue'
import DataBindingInputText from '../views/DataBindingInputText.vue'
import DataBindingInputNumber from '../views/DataBindingInputNumber.vue'
import DataBindingTextarea from '../views/DataBindingTextarea.vue'
import DataBindingSelect from '../views/DataBindingSelect.vue'
import DataBindingCheckBox from '../views/DataBindingCheckBox.vue'
import DataBindingCheckBox2 from '../views/DataBindingCheckBox2.vue'
import DatabindingRadio from '../views/DatabindingRadio.vue'
import DataBindingAttribute from '../views/DataBindingAttribute.vue'
import DataBindingButton from '../views/DataBindingButton.vue'
import DataBindingClass from '../views/DataBindingClass.vue'
import DataBindingStyle from '../views/DataBindingStyle.vue'
import DataBindingStyle2 from '../views/DataBindingStyle2.vue'
import DataBindingList from '../views/DataBindingList.vue'
import RenderingVif from '../views/RenderingVIf.vue'
import RenderingVShow from '../views/RenderingVShow.vue'
import EventClick from '../views/EventClick.vue'
import EventChange from '../views/EventChange.vue'
import EventKey from '../views/EventKey.vue'
import ComputedClass from '../views/ComputedClass.vue'
import WatchClass from '../views/WatchClass.vue'
import WatchClass2 from '../views/WatchClass2.vue'
import DataBindingList2 from '../views/DataBindingList2.vue'
import NestedComponent from '../views/NestedComponent.vue'
import ParentComponent from '../views/ParentComponent.vue'
import ParentComponent2 from '../views/ParentComponent2.vue'
import ParentComponent3 from '../views/ParentComponent3.vue'
import ParentComponent4 from '../views/ParentComponent4.vue'
import ParentComponent5 from '../views/ParentComponent5.vue'
import SlotUseModalLayout from '../views/SlotUseModalLayout.vue'
import ProvideInject from '../views/ProvideInject.vue'
import Calculator from '../views/Calculator.vue'
import CompositionAPI from '../views/CompositionAPI.vue'
import CompositionAPI2 from '../views/CompositionAPI2.vue'
import CompositionAPI3 from '../views/CompositionAPI3.vue'
import CompositionAPI4 from '../views/CompositionAPI4.vue'
import CompositionAPIProvide from '../views/CompositionAPIProvide.vue'
import MixinsAPI from '../views/MixinsAPI.vue'
import CustomDirective from '../views/CustomDirective.vue'
import PluginsTest from '../views/PluginsTest.vue' 
import StoreAccess from '../views/StoreAccess.vue' 
import KakaoLogin from '../views/KakaoLogin.vue' 
import LoginTest from '../views/LoginTest.vue' 
import NaverLogin from '../views/NaverLogin.vue' 
import GoogleLogin from '../views/GoogleLogin.vue' 

const routes = [
{
  path: '/',
  name: 'Home',
  component: HomeView
},
{
  path: '/about',
  name: 'About',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackPrefetch : true, webpackChunkName: "about" */ '../views/AboutView.vue')
                  
  //component : AboutView
},
{
  path: '/databinding',
  name: 'DataBinding',
  //component: () => import('../views/DataBinding.vue')
  component: DataBinding
},
{
  path: '/databindinghtml',
  name: 'DataBindingHtml',
  component: DataBindingHtml
},
{
  path: '/databindinginputtext',
  name: DataBindingInputText,
  component: DataBindingInputText
},
{
  path: '/databindinginputnumber',
  name: DataBindingInputNumber,
  component: DataBindingInputNumber
},
{
  path: '/databindingtextarea',
  name: DataBindingTextarea,
  component: DataBindingTextarea
},
{
  path: '/databindingselect',
  name: DataBindingSelect,
  component: DataBindingSelect
},
{
  path: '/databindingscheckbox',
  name: DataBindingCheckBox,
  component: DataBindingCheckBox
},
{
  path: '/databindingscheckbox2',
  name: DataBindingCheckBox2,
  component: DataBindingCheckBox2
},
{
  path: '/databindingradio',
  name: DatabindingRadio,
  component: DatabindingRadio
},
{
  path: '/databindinattribute',
  name: DataBindingAttribute,
  component: DataBindingAttribute
},
{
  path: '/databindingbutton',
  name: DataBindingButton,
  component: DataBindingButton
},
{
  path: '/databindingclass',
  name: DataBindingClass,
  component: DataBindingClass
},
{
  path: '/databindingstyle',
  name: DataBindingStyle,
  component: DataBindingStyle
},
{
  path: '/databindingstyle2',
  name: DataBindingStyle2,
  component: DataBindingStyle2
},
{
  path: '/databindinglist',
  name: DataBindingList,
  component: DataBindingList
},
{
  path: '/renderingvif',
  name: RenderingVif,
  component: RenderingVif
},
{
  path: '/renderingvshow',
  name: RenderingVShow,
  component: RenderingVShow
},
{
  path: '/eventclick',
  name: EventClick,
  component: EventClick
},
{
  path: '/eventchange',
  name: EventChange,
  component: EventChange
},
{
  path: '/eventkey',
  name: EventKey,
  component: EventKey
},
{
  path : '/computedclass',
  name : ComputedClass,
  component : ComputedClass
},
{
  path : '/watchclass',
  name : WatchClass,
  component : WatchClass
},
{
  path : '/watchclass2',
  name : WatchClass2,
  component : WatchClass2
}
,
{
  path : '/databindinglist2',
  name : DataBindingList2,
  component : DataBindingList2
},
{
  path : '/nestedcomponent',
  name : NestedComponent,
  component : NestedComponent
},
{
  path : '/parentcomponent',
  name : ParentComponent,
  component : ParentComponent
},
{
  path : '/parentcomponent2',
  name : ParentComponent2,
  component : ParentComponent2
},
{
  path : '/parentcomponent3',
  name : ParentComponent3,
  component : ParentComponent3
},
{
  path : '/parentcomponent4',
  name : ParentComponent4,
  component : ParentComponent4
},
{
  path : '/parentcomponent5',
  name : ParentComponent5,
  component : ParentComponent5
},
{
  path : '/slotusemodallayout',
  name : SlotUseModalLayout,
  component : SlotUseModalLayout
},
{
  path : '/provideinject',
  name : ProvideInject,
  component : ProvideInject
},
{
  path : '/calculator',
  name : Calculator,
  component : Calculator
},
{
  path : '/compositionAPI',
  name : CompositionAPI,
  component : CompositionAPI
},
{
  path : '/compositionAPI2',
  name : CompositionAPI2,
  component : CompositionAPI2
},
{
  path : '/compositionAPI3',
  name : CompositionAPI3,
  component : CompositionAPI3
},
{
  path : '/compositionAPI4',
  name : CompositionAPI4,
  component : CompositionAPI4
},
{
  path : '/compositionAPIProvide',
  name : CompositionAPIProvide,
  component : CompositionAPIProvide
},
{
  path : '/mixinsapi',
  name : MixinsAPI,
  component : MixinsAPI
},
{
  path : '/customdirective',
  name : CustomDirective,
  component : CustomDirective
},
{
  path : '/pluginstest',
  name : PluginsTest,
  component : PluginsTest
},
{
  path : '/storeaccess',
  name : StoreAccess,
  component : StoreAccess
},
{
  path : '/kakaologin',
  name : KakaoLogin,
  // component : () => import (/*webpackChunkName : "KakaoLogin" */ '../views/KakaoLogin.vue')
  component : KakaoLogin
},
{
  path : '/login',
  name : LoginTest,
  // component : () => import (/*webpackChunkName : "KakaoLogin" */ '../views/KakaoLogin.vue')
  component : LoginTest
}
,
{
  path : '/naverlogin',
  name : NaverLogin,
  //omponent : () => import (/*webpackChunkName : "parent" */ '../views/NaverLogin.vue')
  component : NaverLogin
},
{
  path : '/googlelogin',
  name : GoogleLogin,
  //omponent : () => import (/*webpackChunkName : "parent" */ '../views/GoogleLogin.vue')
  component : GoogleLogin
}




]

const router = createRouter({
history: createWebHistory(process.env.BASE_URL),
routes
})

export default router
