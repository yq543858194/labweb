<template>
	<div class="download-banner">
		<div class="banner-item left">
			<img :src="content[0].img" alt="考核素材" class="banner-img">
			<h3 class="banner-title">{{content[0].title}}</h3>
			<span class="banner-description">{{content[0].description}}</span>
			<div class="button-container">
				<download-button :content="content[0].buttonContent" bg-color="#1e9aff" font-color="#ffffff" :url="content[0].url"></download-button>
			</div>
		</div>
		<div class="banner-item right">
			<img :src="content[1].img" alt="考核素材" class="banner-img">
			<h3 class="banner-title">{{content[1].title}}</h3>
			<span class="banner-description">{{content[1].description}}</span>
			<div class="button-container">
				<download-button :content="content[1].buttonContent" bg-color="#1e9aff" font-color="#ffffff" :url="content[1].url"></download-button>
			</div>
		</div>
	</div>
</template>

<script>
import downloadButton from '../common/button'
export default {
  name: 'download-banner',
  data () {
    return {
    	content: [
		    {
		    	img: require('../../assets/img/kaouhe.png'),
			    title: '考核素材下载',
			    description: '将下载您所需完成的最近一次考核',
			    buttonContent: '立即下载',
			    url: '#'
		    },
		    {
		    	img: require('../../assets/img/kaohe.png'),
			    title: '学习资料共享',
			    description: '学习资料将会实时更新',
			    buttonContent: '立即查看',
			    url: '#'
		    }
	    ]
    }
  },
  components: {
  	downloadButton
  }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
	.download-banner {
		width: 100%;
		overflow: hidden;
		background-color: #ffffff;
		.banner-item {
			width: 50%;
			float: left;
			margin: 30px 0;
			margin-right: -1px;
			&.left {
				border-right: 1px solid #ebebec;
			}
			.banner-img {
				width: 6vw;
				display: block;
				margin: 0 auto 30px;
			}
			.banner-title {
				color: #383d42;
				margin: 20px auto;
				text-align: center;
			}
			.banner-description {
				font-size: 14px;
				color: #545c63;
				display: block;
				text-align: center;
			}
			.button-container {
				width: 8vw;
				margin: 30px auto 0;
			}
		}
	}
</style>
