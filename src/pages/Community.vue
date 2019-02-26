<template>
	<div class="community" :style="{minHeight: window.innerHeight - 261 + 'px'}">
		<div class="banner-container">
			<banner/>
		</div>
		<div class="community-container">
			<div class="content-container">
				<community-content/>
			</div>
			<div class="menu-container">
				<community-menu/>
				<community-button bg-color="#1e9aff" font-color="#ffffff" url="#" content="我要考核"/>
			</div>
		</div>
	</div>
</template>

<script>
import banner from '../components/community/banner'
import communityContent from '../components/community/content'
import communityMenu from '../components/community/navbar'
import communityButton from '../components/common/button'

export default {
  name: 'community',
  created () {
    this.$store.dispatch('setBackgroundColor', '#1e9aff')
	  document.onscroll = null
	  this.window = window
  },
  components: {
  	banner,
	  communityContent,
	  communityMenu,
	  communityButton
  }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
	.community {
		width: 100%;
		background-color: #f3f3f3;
		padding-bottom: 25px;
		.banner-container {
			width: 86vw;
			margin: 20px auto;
		}
		.community-container {
			width: 86vw;
			margin: 20px auto;
			display: flex;
			justify-content: space-between;
			.content-container {
				flex: 0 1 66.15vw;
				width: 66.15vw;
			}
			.menu-container {
				flex: 0 1 16vw;
				width: 16vw;
			}
		}
	}
</style>
