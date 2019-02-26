<template>
	<div class="responsible">
		<img class="responsible-img" :src="responsible.responsibleImg" alt="avatar"/>
		<div class="responsible-intro">
			<span class="responsible-name">教师姓名：{{responsible.responsibleName}}</span>
			<span class="responsible-description">教师简介：{{responsible.responsibleDescription}}</span>
		</div>
	</div>
</template>

<script>
export default {
  name: 'responsible',
  data () {
    return {
      responsible: {
        responsibleImg: require('../../../assets/img/avatar.png'),
        responsibleName: '教师姓名',
        responsibleDescription: '教师介绍'
      }
    }
  }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
	.responsible {
		width: 100%;
		display: flex;
		justify-content: space-between;
		.responsible-img {
			flex: 0 1 10vw;
			width: 10vw;
			height: 10vw;
			margin-left: 4vw;
		}
		.responsible-intro {
			flex: 0 1 45vw;
			margin-right: 4vw;
			width: 45vw;
			.responsible-name,.responsible-description {
				display: block;
				margin: 15px 0;
				color: #333333;
				font-size: 18px;
			}
		}
	}
</style>
