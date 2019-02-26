<template>
	<div class="footer" :style="{backgroundImage: `url(${image})`}" ref="footer">
		<div class="nav-container">
			<footer-nav position-value="relative" :is-transparent="true"/>
		</div>
		<div class="copyright">
			<span class="copyright-content">中北大学软件设计实验室&nbsp;&nbsp;版权所有</span>
		</div>
	</div>
</template>

<script>
import footerNav from './header'

export default {
  name: 'footer',
  data () {
  	return {
  		image: require('../../assets/img/footer.png')
	  }
  },
  components: {
  	footerNav
  }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
	.footer {
		width: 100%;
		height: 140px;
		background-repeat: no-repeat;
		background-position: center center;
		background-size: cover;
		position: relative;
		.nav-container {
			width: 100%;
			margin-top: 40px;
			display: inline-block;
		}
		.copyright {
			position: absolute;
			left: 0;
			bottom: 10px;
			text-align: center;
			width: 100%;
			font-size: 16px;
			color: #ffffff;
		}
	}
</style>
