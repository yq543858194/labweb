<template>
	<div class="direction">
		<h1 class="title">开发方向</h1>
		<div class="split-container">
			<split/>
		</div>
		<ul class="boxs">
			<li class="box" v-for="(direction,key) in directions" :key="key">
				<img :src="direction.url" :alt="'img' + key" class="box-img">
				<h3 class="box-title">{{direction.title}}</h3>
				<p class="box-description">{{direction.description}}</p>
			</li>
		</ul>
	</div>
</template>

<script>
import split from '../common/split'
export default {
  name: 'direction',
  data () {
  	return {
  		directions: [
			  {
			  	url: require('../../assets/img/code.png'),
				  title: '前端开发',
				  description: '致力于网页设计与网页功能实现，包括传统WEB页面制作，移动端WEB页面制作，微信小程序开发，NODE.JS后台编写'
			  },
			  {
				  url: require('../../assets/img/code.png'),
				  title: '后端开发',
				  description: '致力于网页后台逻辑的实现，包括后端业务处理与存储，使用JAVA WEB，Spring开发'
			  },
			  {
				  url: require('../../assets/img/code.png'),
				  title: '移动端开发',
				  description: '致力于开发安卓APP或IOS APP，实现高效，美观，易用的手机软件'
			  },
			  {
				  url: require('../../assets/img/code.png'),
				  title: '服务器运维',
				  description: '致力于网页后台逻辑的实现，包括后端业务处理与存储，使用JAVA WEB，Spring开发'
			  }
		  ]
	  }
  },
  components: {
  	split
  }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
	.direction {
		width: 100%;
		padding: 35px 0 45px;
		background-color: #f8f8f8;
		.title {
			text-align: center;
			margin: 10px 0 0;
			color: #494949;
		}
		.split-container {
			width: 100%;
			text-align: center;
		}
		.boxs {
			width: 77vw;
			margin: 30px auto 0;
			display: flex;
			flex-wrap: wrap;
			list-style: none;
			justify-content: space-between;
			padding-left: 0;
			.box {
				flex: 0 1 17.08vw;
				width: 17.08vw;
				text-align: center;
				background-color: #ffffff;
				transition: box-shadow 0.4s;
				cursor: pointer;
				&:hover {
					box-shadow: 2px 2px 15px rgba(7,17,27,0.3);
				}
				.box-img {
					width: 4vw;
					margin-top: 30px;
					margin-bottom: 25px;
				}
				.box-title {
					margin: 0;
					font-size: 18px;
					color: #333333;
					font-weight: bold;
				}
				.box-description {
					padding: 30px;
					font-size: 14px;
					line-height: 18px;
					text-indent: 5px;
					color: #666666;
					margin: 0 auto;
				}
			}
		}
	}
</style>
