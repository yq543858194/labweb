<template>
	<div class="intro">
		<p class="intro-description">{{intro.introDescription}}</p>
		<img :src="intro.introImg" alt="introImg" class="intro-img">
	</div>
</template>

<script>
export default {
  name: 'intro',
  data () {
    return {
      intro: {
        introDescription: '中北大学软件实验室，成立于2018年11月7日，致力于软件设计与实现，以项目作为驱动对象。' +
					'现学习方向有前端开发，JAVA后端开发，移动端开发（包括IOS与安卓），服务器运维，C++应用开发，PYTHON应用开发以及' +
					'Unity 3D应用程序开发',
        introImg: require('../../../assets/img/introDescription.png')
      }
    }
  }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
	.intro {
		display: flex;
		justify-content: space-between;
		width: 100%;
		.intro-description {
			flex: 0 1 40vw;
			width: 40vw;
			color: #494949;
			font-size: 14px;
			font-weight: bold;
			padding-left: 3vw;
		}
		.intro-img {
			width: 15vw;
			height: 15vw;
			padding-right: 3vw;
		}
	}
</style>
