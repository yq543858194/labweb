<template>
	<div class="button" :style="{backgroundColor: bgColor}">
		<router-link :to="url" :style="{color: fontColor}">{{content}}</router-link>
	</div>
</template>

<script>
export default {
  name: 'button',
  props: {
  	content: {
  		type: String
	  },
	  bgColor: {
  		type: String
	  },
    fontColor: {
  		type: String
    },
	  url: {
  		type: String
	  }
  }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
	.button {
		width: 100%;
		height: 40px;
		margin-top: 20px;
		text-align: center;
		a {
			display: block;
			width: 100%;
			font-size: 16px;
			line-height: 40px;
			text-decoration: none;
		}
	}
</style>
