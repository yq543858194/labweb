<template>
	<div class="other">
		<h1 class="title">其他资料与文档下载</h1>
		<ul class="other-list">
			<li class="other-list-item" v-for="(item, index) in otherList" :key="index">
				<a :href="item.url">{{item.name}}</a>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
  name: 'other',
  data () {
    return {
      otherList: [
        {
          url: '#',
          name: '实验室规章制度.pdf'
        },
	      {
		      url: '#',
		      name: '最新实验室名单表.pdf'
	      },
	      {
		      url: '#',
		      name: '作业提交情况.xlsx'
	      },
	      {
		      url: '#',
		      name: '往期考核内容下载'
	      },
	      {
		      url: '#',
		      name: '实验室讲课列表通知.pdf'
	      },
	      {
		      url: '#',
		      name: '实验室值日名单表.xlsx'
	      },
	      {
		      url: '#',
		      name: '关于蓝桥杯比赛的报名通知.docx'
	      }
      ]
    }
  }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
	.other {
		width: 100%;
		.title {
			color: #383d42;
			margin: 0 auto;
		}
		.other-list {
			list-style: none;
			width: 100%;
			overflow: hidden;
			.other-list-item {
				width: 50%;
				float: left;
				margin: 12px 0;
				a {
					display: block;
					margin-left: 30px;
					text-decoration: none;
					color: #1e9aff;
				}
			}
		}
	}
</style>
