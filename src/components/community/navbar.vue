<template>
	<div class="navbar">
		<h1 class="title">主题分类</h1>
		<ul class="classifies">
			<li class="classify" v-for="(classify, index) in classifyList" :key="index">
				<a :href="classify.url">{{classify.name}}</a>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
  name: 'navbar',
  data () {
  	return {
  		classifyList: [
			  {
			  	name: '前端开发',
				  url: '#'
			  },
			  {
			  	name: '后端开发',
				  url: '#'
			  },
			  {
			  	name: '移动APP开发',
				  url: '#'
			  },
			  {
			  	name: '运维技术',
				  url: '#'
			  },
			  {
			  	name: 'C++程序设计',
				  url: '#'
			  },
			  {
			  	name: 'Python程序设计',
				  url: '#'
			  }
		  ]
	  }
  }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
	.navbar {
		width: 100%;
		text-align: center;
		background-color: #ffffff;
		.title {
			border-bottom: 1px solid #dddddd;
			padding: 10px auto;
			color: #434a54;
			margin: 0;
			font-size: 25px;
			line-height: 40px;
			height: 40px;
			display: block;
		}
		.classifies {
			list-style: none;
			padding-left: 0;
			margin: 0;
			.classify {
				color: #434a54;
				font-size: 16px;
				width: 100%;
				text-align: center;
				line-height: 35px;
				height: 35px;
				transition: background-color,color 0.5s ease-in-out;
				border-bottom: 1px solid #dddddd;
				&:hover,&.active {
					background-color: #1e9aff;
					color: #efefef;
				}
				a {
					display: block;
					width: 100%;
					text-decoration: none;
					color: inherit;
				}
			}
		}
	}
</style>
