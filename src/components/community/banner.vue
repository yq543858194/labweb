<template>
	<div class="community-banner">
		<el-carousel :height="bannerHeight+'px'">
			<el-carousel-item v-for="(item,index) in imgs" :key="index">
				<a :href="item.url"><img :src="item.img" :alt="'banner'+index"></a>
			</el-carousel-item>
		</el-carousel>
	</div>
</template>

<script>
export default {
  name: 'banner',
  data () {
  	return {
  		imgs: [
			  {
			  	img: require('../../assets/img/communityBanner.png'),
				  url: '#'
			  }
		  ]
	  }
  },
  computed: {
  	bannerHeight () {
		  return 334 / 1642 * window.innerWidth * 0.86
	  }
  }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
	.community-banner {
		width: 100%;
		.el-carousel {
			width: 100%;
			img {
				width: 100%;
			}
		}
	}
</style>
