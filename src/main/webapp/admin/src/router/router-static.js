import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import huanbaoshetuan from '@/views/modules/huanbaoshetuan/list'
    import news from '@/views/modules/news/list'
    import duihuanshangcheng from '@/views/modules/duihuanshangcheng/list'
    import huanbaobiruzhang from '@/views/modules/huanbaobiruzhang/list'
    import huanbaohuodong from '@/views/modules/huanbaohuodong/list'
    import jiaruhuanbaoshetuan from '@/views/modules/jiaruhuanbaoshetuan/list'
    import storeup from '@/views/modules/storeup/list'
    import shangpinduihuan from '@/views/modules/shangpinduihuan/list'
    import zhongchouzhichi from '@/views/modules/zhongchouzhichi/list'
    import huanbaozhongchou from '@/views/modules/huanbaozhongchou/list'
    import yonghu from '@/views/modules/yonghu/list'
    import huanbaobikoujian from '@/views/modules/huanbaobikoujian/list'
    import shangpinfenlei from '@/views/modules/shangpinfenlei/list'
    import huodongbaoming from '@/views/modules/huodongbaoming/list'
    import discusshuanbaohuodong from '@/views/modules/discusshuanbaohuodong/list'
    import discusshuanbaozhongchou from '@/views/modules/discusshuanbaozhongchou/list'
    import messages from '@/views/modules/messages/list'
    import discussduihuanshangcheng from '@/views/modules/discussduihuanshangcheng/list'
    import yonghuhuanbaobi from '@/views/modules/yonghuhuanbaobi/list'
    import huanbaofenlei from '@/views/modules/huanbaofenlei/list'
    import config from '@/views/modules/config/list'
    import discusshuanbaoshetuan from '@/views/modules/discusshuanbaoshetuan/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
          ,{
	path: '/huanbaoshetuan',
        name: '环保社团',
        component: huanbaoshetuan
      }
          ,{
	path: '/news',
        name: '科普资讯',
        component: news
      }
          ,{
	path: '/duihuanshangcheng',
        name: '兑换商城',
        component: duihuanshangcheng
      }
          ,{
	path: '/huanbaobiruzhang',
        name: '环保币入账',
        component: huanbaobiruzhang
      }
          ,{
	path: '/huanbaohuodong',
        name: '环保活动',
        component: huanbaohuodong
      }
          ,{
	path: '/jiaruhuanbaoshetuan',
        name: '加入环保社团',
        component: jiaruhuanbaoshetuan
      }
          ,{
	path: '/storeup',
        name: '我的收藏管理',
        component: storeup
      }
          ,{
	path: '/shangpinduihuan',
        name: '商品兑换',
        component: shangpinduihuan
      }
          ,{
	path: '/zhongchouzhichi',
        name: '众筹支持',
        component: zhongchouzhichi
      }
          ,{
	path: '/huanbaozhongchou',
        name: '环保众筹',
        component: huanbaozhongchou
      }
          ,{
	path: '/yonghu',
        name: '用户',
        component: yonghu
      }
          ,{
	path: '/huanbaobikoujian',
        name: '环保币扣减',
        component: huanbaobikoujian
      }
          ,{
	path: '/shangpinfenlei',
        name: '商品分类',
        component: shangpinfenlei
      }
          ,{
	path: '/huodongbaoming',
        name: '活动报名',
        component: huodongbaoming
      }
          ,{
	path: '/discusshuanbaohuodong',
        name: '环保活动评论',
        component: discusshuanbaohuodong
      }
          ,{
	path: '/discusshuanbaozhongchou',
        name: '环保众筹评论',
        component: discusshuanbaozhongchou
      }
          ,{
	path: '/messages',
        name: '留言板管理',
        component: messages
      }
          ,{
	path: '/discussduihuanshangcheng',
        name: '兑换商城评论',
        component: discussduihuanshangcheng
      }
          ,{
	path: '/yonghuhuanbaobi',
        name: '用户环保币',
        component: yonghuhuanbaobi
      }
          ,{
	path: '/huanbaofenlei',
        name: '环保分类',
        component: huanbaofenlei
      }
          ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
          ,{
	path: '/discusshuanbaoshetuan',
        name: '环保社团评论',
        component: discusshuanbaoshetuan
      }
        ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
