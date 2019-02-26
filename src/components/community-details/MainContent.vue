<template>
	<div class="main-content">
		<h2 class="main-title">{{passage.title}}</h2>
		<p class="main-description">
			<span class="item-info"><span>{{passage.author}}</span>发布于<span>{{passage.date}}</span></span>
			<span class="main-count">
					<span class="main-view">
						<i class="fa fa-eye"></i>&nbsp;&nbsp;{{passage.viewCount}}
					</span>&nbsp;&nbsp;
					<span class="main-comment">
						<i class="fa fa-comment-o"></i>&nbsp;&nbsp;{{passage.commentCount}}
					</span>
				</span>
		</p>
		<div class="content" v-html="passage.content"></div>
		<div class="button-group">
			<div class="favorite-button">
				<img :src="require('../../assets/img/favoriteButton.png')" alt="">
			</div>
			<div class="zan-button">
				<img :src="require('../../assets/img/zanButton.png')" alt="">
			</div>
		</div>
	</div>
</template>

<script>
export default {
  props: {
    passage: {
      type: Object
    }
  },
  name: 'MainContent'
}
</script>

<style scoped	lang="scss" rel="stylesheet/scss">
	$img-width: 62vw;
	.main-content {
		width: 100%;
		border-bottom: 1px solid #dddddd;
		background-color: #ffffff;
		padding-top: 1px;
		margin-top: 15px;
		.main-title {
			width: $img-width;
			display: block;
			margin: 25px auto;
			text-decoration: none;
			color: #393939;
			position: relative;
		}
		.main-description {
			width: $img-width;
			display: block;
			margin: 0 auto;
			padding-bottom: 35px;
			white-space: nowrap;
			text-overflow: ellipsis;
			overflow: hidden;
			position: relative;
			.item-info {
				position: absolute;
				left: 0;
				bottom: 10px;
				display: block;
				font-size: 14px;
				color: #c5c5c5;
			}
			.main-count {
				position: absolute;
				right: 0;
				bottom: 10px;
				color: #c5c5c5;
				font-size: 14px;
			}
		}
		.content {
			width: 100%;
		}
		.button-group {
			width: 8vw;
			margin: 30px auto;
			display: flex;
			justify-content: space-between;
			.favorite-button,.zan-button {
				flex: 0 1 2.76vw;
				width: 2.76vw;
				height: 2.76vw;
				border-radius: 50%;
				cursor: pointer;
				img {
					width: 100%;
				}
			}
		}
	}
</style>
