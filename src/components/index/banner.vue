<template>
	<div class="banner">
		<el-carousel :height="elHeight" arrow="never">
			<el-carousel-item v-for="(img,key) in imgs" :key="key">
				<img :src="img.url" :alt="'img' + key">
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
			  	url: require('../../assets/img/banner1.png')
			  }
		  ]
	  }
  },
  computed: {
  	elHeight () {
  		return parseInt(591 / 1920 * window.innerWidth) + 'px'
	  }
  }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
	.banner {
		width: 100%;
		.el-carousel {
			width: 100%;
			img {
				width: 100%;
			}
		}
	}
</style>
