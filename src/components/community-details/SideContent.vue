<template>
	<div class="side-content">
		<div class="author">
			<img :src="author.avatar" alt="楼主头像" class="author-avatar">
			<span class="author-name">{{author.name}}</span>
			<span class="author-description">{{author.description}}</span>
		</div>
	</div>
</template>

<script>
export default {
  name: 'SideContent',
  props: {
  	author: {
  		type: Object
	  }
  }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
	.side-content {
		width: 100%;
		background-color: #ffffff;
		margin-top: 15px;
		padding-top: 40px;
		padding-bottom: 40px;
		.author {
			width: 100%;
			text-align: center;
			&-avatar {
				text-align: center;
				width: 6.46vw;
				border-radius: 50%;
			}
			&-name {
				display: block;
				margin: 15px;
				text-align: center;
				font-size: 18px;
				color: #434a54;
				font-weight: bold;
			}
			&-description {
				display: block;
				width: 100%;
				text-align: center;
				font-size: 14px;
				color: #d4d4d4;
			}
		}
	}
</style>
