<template>
	<div class="scene">
		<ul class="scene-list">
			<li class="scene-item" v-for="(scene,key) in scene.imgs" :key="key">
				<img class="scene-img" :src="scene" :alt="'scene' + key">
			</li>
		</ul>
	</div>
</template>

<script>
export default {
  name: 'scene',
  data () {
    return {
      scene: {
        imgs: [
          require('../../../assets/img/scene1.png'),
          require('../../../assets/img/scene2.png'),
          require('../../../assets/img/scene3.png'),
          require('../../../assets/img/scene4.png'),
          require('../../../assets/img/scene5.png'),
          require('../../../assets/img/scene6.png'),
          require('../../../assets/img/scene7.png'),
          require('../../../assets/img/scene8.png')
        ]
      }
    }
  }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
	.scene {
		width: 100%;
		.scene-list {
			width: 100%;
			display: flex;
			list-style: none;
			flex-wrap: wrap;
			padding-left: 0;
			.scene-item {
				flex: 0 1 17.81vw;
				width: 17.81vw;
				margin: 4px;
				img {
					width: 100%;
				}
			}
		}
	}
</style>
