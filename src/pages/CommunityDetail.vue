<template>
	<div class="communityDetail" :style="{minHeight: window.innerHeight - 261 + 'px'}">
		<div class="page-nav-container">
			<el-breadcrumb separator-class="el-icon-arrow-right">
				<el-breadcrumb-item v-for="(item, index) in pageNav" :to="item.url" :key="index">{{item.name}}</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="container">
			<div class="main-content-container">
				<main-content :passage="passageData.passage"/>
				<comment :comment-items="passageData.comment"/>
			</div>
			<div class="side-content-container">
				<side-content :author="passageData.author"/>
			</div>
		</div>
	</div>
</template>

<script>
import mainContent from '../components/community-details/MainContent'
import comment from '../components/community-details/Comment'
import sideContent from '../components/community-details/SideContent'
export default {
  name: 'CommunityDetail',
  created () {
    this.$store.dispatch('setBackgroundColor', '#1e9aff')
    document.onscroll = null
	  this.window = window
  },
  data () {
  	return {
		  pageNav: [
			  {
				  name: '首页',
				  url: '/'
			  },
			  {
				  name: '实验室社区',
				  url: '/community'
			  },
			  {
				  name: '第一期考核公告【全体方向】'
			  }
		  ],
		  passageData: {
			  author: {
				  name: '管理员',
				  avatar: require('../assets/img/avatar.png'),
				  description: '移动开发/全栈方向'
			  },
			  passage: {
				  title: '【公告】第一期考核公告',
				  author: '管理员',
				  date: '2018-12-9 12:26',
				  viewCount: 10,
				  commentCount: 5,
				  content:
					  `<img src="${require('../assets/img/kaohe1.png')}" style="width: 62vw;margin: 20px auto;display: block;"/>` +
					  `<span style="margin: 20px auto;width: 62vw;display: block;line-height: 20px">这是实验室的第一次考核，考核内容有<br>` +
					  `1.前端方向：HTML基础，包括但不限于标题、段落、表格、表单、图片、多媒体。<br>` +
					  `2.后端方向：大一：JAVA基础，包括面向对象设计思想、JAVA基础类型、JAVA基础语法</br>` +
					  `3.后端方向：大二：JAVA WEB基础，包括Servlet，jsp及java bean<br>` +
					  `4.运维方向：学习基础Linux命令<br>` +
					  `5.C++程序设计方向：学习C++基础语法<br>` +
					  `6.Python程序设计方向：学习Python基础语法<br>` +
					  `有于这是实验室第一次考核，考核内容不交者会及时清理出实验室<br>` +
					  `在周五前，请将考核内容发送至000000@qq.com<br>` +
					  `</span>`
			  },
			  comment: [
				  {
					  id: 2,
					  commentUser: {
						  name: '...',
						  avatar: require('../assets/img/avatar1.jpg'),
						  description: '前端'
					  },
					  commentContent: '这是一个评论，这是一个评论，这是一个评论',
					  commentDate: '2018-12-09 18:32'
				  }
			  ]
		  }
	  }
  },
  components: {
  	mainContent,
	  comment,
	  sideContent
  }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
	.communityDetail {
		width: 100%;
		background-color: #f3f3f3;
		padding: 30px 0;
		.page-nav-container {
			width: 85.21vw;
			margin: 0 auto;
		}
		.container {
			width: 85.21vw;
			margin: 0 auto;
			display: flex;
			justify-content: space-between;
			flex-wrap: nowrap;
			.main-content-container {
				flex: 0 1 66.94vw;
				width: 60.94vw;
			}
			.side-content-container {
				flex: 0 1 16.5vw;
				width: 16.5vw;
			}
		}
	}
</style>
