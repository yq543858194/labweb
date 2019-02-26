<template>
	<div class="friendsLink">
		<h1 class="title">友情链接</h1>
		<div class="split-container">
			<split/>
		</div>
		<ul class="link-list">
			<li class="link-list-item" v-for="(link,index) in linkList" :key="index">
				<a :href="link.url" target="_blank"><img :src="link.img" :alt="'link-' + index"></a>
			</li>
		</ul>
	</div>
</template>

<script>
import split from '../common/split'
export default {
  name: 'friendsLink',
  components: {
    split
  },
  data () {
  	return {
  		linkList: [
			  {
			  	img: require('../../assets/img/github.png'),
				  url: 'https://github.com/'
			  },
			  {
			  	img: require('../../assets/img/w3cschool.png'),
				  url: 'http://www.w3school.com.cn/'
			  },
			  {
			  	img: require('../../assets/img/opensourcechina.png'),
				  url: 'https://www.oschina.net/'
			  },
			  {
			  	img: require('../../assets/img/idea.png'),
				  url: 'https://www.jetbrains.com/'
			  }
		  ]
	  }
  }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
	.friendsLink {
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
		.link-list {
			width: 74vw;
			margin: 20px auto 0;
			padding: 0;
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;
			list-style: none;
			&-item {
				flex: 0 1 17vw;
				width: 17vw;
				img {
					width: 100%;
					transition: box-shadow 0.4s ease-in-out;
					&:hover {
						box-shadow: 2px 2px 15px rgba(7,17,27,0.3);
					}
				}
			}
		}
	}
</style>
