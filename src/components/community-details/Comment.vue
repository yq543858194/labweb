<template>
	<div class="comment">
		<div class="comment-item" v-for="commentItem in commentItems" :key="commentItem.id">
			<div class="comment-item-user">
				<img class="comment-item-user-avatar" :src="commentItem.commentUser.avatar" alt="用户头像">
				<span class="comment-item-user-name">{{commentItem.commentUser.name}}</span>
				<span class="comment-item-user-description">{{commentItem.commentUser.description}}</span>
			</div>
			<p class="comment-item-content">{{commentItem.commentContent}}</p>
			<span class="comment-item-date">{{commentItem.commentDate}}</span>
			<span class="comment-item-id">#{{commentItem.id}}</span>
		</div>
		<div class="comment-pagination">
			<el-pagination layout="prev, pager, next" :total="commentItems.length"></el-pagination>
		</div>
		<div class="comment-new">
			<div id="editor"></div>
		</div>
		<div class="comment-submit">
			<el-button type="primary">提交</el-button>
		</div>
	</div>
</template>

<script>
import Editor from 'wangeditor'
import 'wangeditor/release/wangEditor.min.css'
export default {
  name: 'Comment',
  props: {
  	commentItems: {
  		type: Array
	  }
  },
  data () {
  	return {
  		editor: ''
	  }
  },
  mounted () {
    this.editor = new Editor('#editor')
	  this.editor.create()
  }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
	.comment {
		width: 100%;
		&-item {
			margin: 10px 0;
			padding: 10px 0;
			background: #ffffff;
			overflow: hidden;
			position: relative;
			&-user {
				width: 5.5vw;
				text-align: center;
				margin: 20px;
				float: left;
				&-avatar {
					width: 100%;
					border-radius: 50%;
				}
				&-name {
					display: block;
					font-size: 18px;
					color: #434a54;
					font-weight: bold;
				}
				&-description {
					display: block;
					color: #b5b5b5;
					font-size: 14px;
				}
			}
			&-content {
				float: left;
				font-size: 14px;
				line-height: 16px;
				color: #434a54;
				margin: 0;
				padding: 25px;
			}
			&-date {
				display: block;
				position: absolute;
				right: 20px;
				bottom: 20px;
				color: #b5b5b5;
				font-size: 13px;
			}
			&-id {
				display: block;
				position: absolute;
				right: 20px;
				top: 20px;
				color: #b5b5b5;
				font-size: 13px;
			}
		}
		&-pagination {
			width: 100%;
			background-color: #ffffff;
		}
		&-new {
			width: 100%;
			background-color: #ffffff;
			margin-top: 10px;
		}
		&-submit {
			width: 100%;
			margin-top: 10px;
		}
	}
</style>
