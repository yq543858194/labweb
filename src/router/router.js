import VueRouter from 'vue-router'
import Layout from '../pages/layout/Layout'
import Index from '../pages/Index'
import Download from '../pages/Download'
import Community from '../pages/Community'
import CommunityDetail from '../pages/CommunityDetail'
import About from '../pages/About'
import JoinUs from '../pages/JoinUs'
import Rules from '../pages/Rules'
import CallBack from '../pages/Feedback'

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Layout,
      redirect: '/index',
      children: [
        {
          path: '/index',
          name: '主页',
          component: Index
        },
        {
          path: '/rules',
          name: '规章制度',
          component: Rules
        },
        {
          path: '/download',
          name: '相关下载',
          component: Download
        },
        {
          path: '/community',
          name: '社区',
          component: Community
        },
	      {
		      path: '/community/detail/:id',
		      name: '详情页面',
		      component: CommunityDetail
	      },
        {
          path: '/about',
          name: '关于我们',
          component: About
        },
        {
          path: '/joinus',
          name: '加入我们',
          component: JoinUs
        },
        {
          path: '/feedback',
          name: '问题反馈',
          component: CallBack
        }
      ]
    }
  ]
})

export default router
