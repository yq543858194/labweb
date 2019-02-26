<template>
	<div class="content">
		<div class="button-group">
			<div class="button">公告</div>
			<div class="button">置顶</div>
			<div class="button">资源下载</div>
			<div class="button">讨论区</div>
			<div class="button right">发表新帖</div>
		</div>
		<ul class="main">
			<li class="main-item" v-for="(item, index) in communityList" :key="index">
				<h1 class="main-title"><a :href="item.url">{{item.title}}</a>
					<span class="item-info"><span>{{item.creater}}</span>发布于<span>{{item.createDate}}</span></span>
				</h1>
				<img :src="item.img" alt="img" class="main-img">
				<p class="main-description">{{item.description}}
					<span class="main-count">
					<span class="main-view">
						<i class="fa fa-eye"></i>&nbsp;&nbsp;{{item.viewCount}}
					</span>&nbsp;&nbsp;
					<span class="main-comment">
						<i class="fa fa-comment-o"></i>&nbsp;&nbsp;{{item.commentCount}}
					</span>
				</span>
				</p>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
  name: 'content',
  data () {
    return {
      communityList: [
        {
          type: 'announce',
          title: '第一期考核公告',
          url: '#',
          img: require('../../assets/img/kaohe1.png'),
          description: '这是第一期考核内容，请各位同学及时完成',
          creater: '管理员',
          createDate: '2018-12-9 12:26',
          viewCount: 10,
          commentCount: 5
        },
	      {
		      type: 'announce',
		      title: '第一期考核公告',
		      url: '#',
		      img: require('../../assets/img/kaohe1.png'),
		      description: '这是第一期考核内容，请各位同学及时完成',
		      creater: '管理员',
		      createDate: '2018-12-9 12:26',
		      viewCount: 10,
		      commentCount: 5
	      },
	      {
		      type: 'announce',
		      title: '第一期考核公告',
		      url: '#',
		      img: require('../../assets/img/kaohe1.png'),
		      description: '这是第一期考核内容，请各位同学及时完成',
		      creater: '管理员',
		      createDate: '2018-12-9 12:26',
		      viewCount: 10,
		      commentCount: 5
	      }
      ]
    }
  }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
	$img-width: 60.21vw;
	.content {
		width: 100%;
		background-color: #ffffff;
		.button-group {
			width: 100%;
			height: 35px;
			border: 1px solid #dddddd;
			.button {
				float: left;
				padding: 10px 30px;
				font-size: 15px;
				line-height: 15px;
				color: #434a54;
				font-weight: bold;
				border-right: 1px solid #dddddd;
				background-color: #ffffff;
				transition: background-color,color 0.5s ease-in-out;
				cursor: pointer;
				&:hover,&.active {
					background-color: #1e9aff;
					color: #efefef;
				}
				&.right {
					float: right;
					border-right: none;
					border-left: 1px solid #dddddd;
				}
			}
		}
		.main {
			width: 100%;
			list-style: none;
			padding-left: 0;
			position: relative;
			.main-item {
				width: 100%;
				border-bottom: 1px solid #dddddd;
				.main-title {
					width: $img-width;
					display: block;
					margin: 20px auto;
					text-decoration: none;
					color: #393939;
					position: relative;
					transition: color 0.3s ease-in-out;
					&:hover {
						color: #1e9aff;
					}
					a {
						text-decoration: none;
						color: inherit;
					}
					.item-info {
						position: absolute;
						display: block;
						font-size: 14px;
						color: #c9c9c9;
						bottom: 0;
						right: 0;
					}
				}
				.main-img {
					width: $img-width;
					display: block;
					margin: 0 auto 20px;
				}
				.main-description {
					width: $img-width;
					display: block;
					color: #393939;
					margin: 0 auto;
					padding-bottom: 35px;
					white-space: nowrap;
					text-overflow: ellipsis;
					overflow: hidden;
					position: relative;
					.main-count {
						position: absolute;
						right: 0;
						bottom: 10px;
						color: #c5c5c5;
						font-size: 14px;
					}
				}
			}
		}
	}
</style>
