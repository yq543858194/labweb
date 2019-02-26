<template>
	<div class="introduction">
		<h1 class="title">实验室简介</h1>
		<div class="split-container">
			<split/>
		</div>
		<ul class="menu" @click.stop="menuClick($event)">
			<li class="menu-item" id="isIntro" :class="{'active': isIntro}">介绍</li>
			<li class="menu-item" id="isScene" :class="{'active': isScene}">内景</li>
			<li class="menu-item" id="isResponsible" :class="{'active': isResponsible}">负责人</li>
		</ul>
		<div class="content">
			<div class="intro-wrapper animated fadeInUp" v-if="isIntro">
				<intro/>
			</div>
			<div class="scene-wrapper animated fadeInUp" v-if="isScene">
				<scene/>
			</div>
			<div class="responsible-wrapper animated fadeInUp" v-if="isResponsible">
				<responsible/>
			</div>
		</div>
	</div>
</template>

<script>
import split from '../common/split'
import intro from './introduction/intro'
import scene from './introduction/scene'
import responsible from './introduction/responsible'

export default {
  name: 'introduction',
  components: {
    split,
	  intro,
	  scene,
	  responsible
  },
  data () {
  	return {
  		isIntro: true,
		  isScene: false,
		  isResponsible: false
	  }
  },
  methods: {
	  menuClick (e) {
      switch (e.target.id) {
				  case 'isIntro': this._switch(e.target.id)
					  break
				  case 'isScene': this._switch(e.target.id)
					  break
				  case 'isResponsible': this._switch(e.target.id)
					  break
				  default: console.log('非法操作')
					  break
			  }
	  },
	  _switch (key) {
		  this.isIntro = false
		  this.isScene = false
		  this.isResponsible = false
		  setTimeout(() => {
		  	this[key] = true
		  })
	  }
  }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
	.introduction {
		width: 100%;
		padding: 35px 0 45px;
		background-color: #ffffff;
		.title {
			text-align: center;
			margin: 10px 0 0;
			color: #494949;
		}
		.split-container {
			width: 100%;
			text-align: center;
		}
		.menu {
			padding: 0;
			list-style: none;
			display: flex;
			width: 22.81vw;
			justify-content: space-between;
			margin: 15px auto;
			.menu-item {
				font-size: 16px;
				font-weight: bold;
				color: #494949;
				transition: color 0.2s ease-in-out;
				cursor: pointer;
				&.active,&:hover {
					color: #1fbefb;
				}
			}
		}
		.content {
			width: 100%;
			height: 30vw;
			overflow: hidden;
			.intro-wrapper,.scene-wrapper,.responsible-wrapper {
				width: 74vw;
				margin: 25px auto;
			}
		}

	}
</style>
