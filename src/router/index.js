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
}

]

const router = createRouter({
history: createWebHistory(process.env.BASE_URL),
routes
})

export default router
