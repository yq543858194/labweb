<template>
	<div class="about" :style="{minHeight: window.innerHeight - 261 + 'px'}">
		<div class="container">
			<div class="left-container">
				<button-group/>
			</div>
			<div class="right-container">
				<h2 class="title">关于我们</h2>
				<ul class="question-list">
					<li class="question-list-item" v-for="(item, index) in questionList" :key="index">
						<span class="question">Q:{{item.question}}</span>
						<span class="answer">A:{{item.answer}}</span>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
import buttonGroup from '../components/common/aboutButtonGroup'
export default {
  name: 'About',
  data () {
  	return {
  		questionList: [
			  {
			  	question: '为什么要加入实验室？',
				  answer: '加入实验室可以锻炼自己的专业能力，提升自己的知识水平，在真实的项目中学习，以便更好地融入到工作中。同时可以结交爱好技术的伙伴，共同提升自己的开发经验与实战能力。'
			  },
			  {
			  	question: '实验室在做什么？',
				  answer: '软件设计实验室主要的学习方向为项目开发，以项目作为学习的主要推动力。'
			  },
			  {
			  	question: '怎样才能加入实验室？',
				  answer: '您可以参加实验室的纳新活动，除此之外您还可以点击加入我们并填写相应信息，我们会及时与您取得联系。但这需要一定的技术能力与开发经验。'
			  },
			  {
			  	question: '实验室有移动端吗？',
				  answer: '有的，请扫描下方的二维码下载移动端。'
			  },
			  {
			  	question: '如何与我们取得联系？',
				  answer: '请点击下方按钮。'
			  }
		  ]
	  }
  },
  created () {
    this.$store.dispatch('setBackgroundColor', '#1e9aff')
	  document.onscroll = null
	  this.window = window
  },
  components: {
  	buttonGroup
  }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
	.about {
		width: 100%;
		background-color: #f3f3f3;
		padding: 30px 0;
		.container {
			width: 85.21vw;
			margin: 0 auto;
			display: flex;
			justify-content: space-between;
			.left-container {
				flex: 0 1 15.83vw;
				width: 15.83vw;
				margin-top: -20px;
			}
			.right-container {
				width: 66vw;
				background-color: #ffffff;
				.title {
					padding: 20px 30px;
					margin: 0;
					border-bottom: 1px solid #dedede;
				}
				.question-list {
					list-style: none;
					padding-left: 30px;
					padding-right: 30px;
					padding-bottom: 20px;
					&-item {
						margin: 20px 0;
						.question {
							color: #494949;
							font-size: 18px;
							margin: 20px 0;
							font-weight: bold;
							display: block;
						}
						.answer {
							color: #60686b;
							margin: 20px 0;
							font-size: 16px;
							line-height: 18px;
							display: block;
						}
					}
				}
			}
		}
	}
</style>
