<template>
	<div class="header-container">
		<div class="header" :style="{backgroundColor: isTransparent ? 'transparent' : $store.state.backgroundColor, position: positionValue}" ref="head">
			<h1 class="title">中北大学软件设计实验室</h1>
			<ul class="nav">
				<li v-for="(item,key) in menu" class="nav-item" :key="key">
					<router-link :to="item.url">{{item.name}}</router-link>
				</li>
				<li class="nav-item">
					<a href="javascript:void(0)"  @click="dialogVisible = true">
						<i class="iconfont icon-yonghu"></i>
					</a>
				</li>
			</ul>
		</div>
		<el-dialog :visible.sync="dialogVisible" width="75vw">
			<span slot="title"></span>
			<div class="login-body">
				<h2 class="title">请登录</h2>
				<div class="login-form">
					<div class="form-group">
						<i class="iconfont icon-yonghu form-label"></i>
						<input type="text" class="form-control" name="password">
					</div>
					<div class="form-group">
						<i class="iconfont icon-password form-label"></i>
						<input type="password" class="form-control" id="password">
					</div>
					<div class="form-group">
						<el-button type="primary" round>登录</el-button>
					</div>
				</div>
				<div class="login-footer">
					<span class="login-footer-text"><router-link to="forgetPassword">忘记密码</router-link></span>
					<span class="login-footer-text right"><router-link to="register">注册</router-link></span>
				</div>
			</div>
		</el-dialog>
	</div>
</template>

<script>
export default {
  name: 'header',
  props: {
  	positionValue: {
  		type: String,
		  default: 'fixed'
	  },
	  isTransparent: {
  		type: Boolean,
		  default: false
	  }
  },
  data () {
  	return {
  		menu: [
        {
          name: '首页',
          url: '/index'
        },
        {
          name: '实验室制度',
          url: '/rules'
        },
        {
          name: '实验室社区',
          url: '/community'
        },
        {
          name: '相关下载',
          url: '/download'
        },
        {
          name: '关于我们',
          url: '/about'
        }
      ],
		  dialogVisible: false,
		  form: {
			  username: '',
			  password: ''
		  },
		  formLabelWidth: '120px'
    }
  },
  methods: {
    submit () {
    	// TODO: submit login form
    }
  }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
	$height: 60px;
	$fontColor: #ffffff;
	.header-container {
		width: 100%;
		height: $height;
		.header {
			position: fixed;
			z-index: 999;
			top: 0;
			left: 0;
			width: 100%;
			height: $height;
			transition: all 0.4s ease-in-out;
			.title {
				margin: 0;
				margin-left: 4vw;
				font-size: 25px;
				line-height: $height;
				color: $fontColor;
				text-align: center;
				float: left;
			}
			.nav {
				margin: 0;
				height: $height;
				position: absolute;
				right: 10px;
				list-style: none;
				.nav-item {
					float: left;
					height: $height;
					a {
						width: 100%;
						font-size: 16px;
						line-height: $height;
						padding: 3px 15px;
						height: 30px;
						color: $fontColor;
						text-decoration: none;
						margin: 0.5vw;
						border-radius: 15px;
						transition: color 0.4s ease-in-out;
					}
					a:hover,a.router-link-active {
						background-color: #ffffff;
						color: #1e9aff;
					}
					.iconfont {
						font-size: 16px;
						padding: 7px;
						height: 30px;
						line-height: $height;
						width: 30px;
						border-radius: 15px;
						cursor: pointer;
					}
				}
			}
		}
		.el-dialog {
			background-color: #eaf2f7;
			.login-body {
				width: 100%;
				.title {
					text-align: center;
					color: #1e9aff;
					font-weight: lighter;
					font-size: 27px;
					letter-spacing: 10px;
				}
				.login-form {
					padding-bottom: 30px;
					border-bottom: 1px solid #ffffff;
					.form-group {
						width: 26.57vw;
						margin: 40px auto;
						position: relative;
						.form-label {
							position: absolute;
							left: 15px;
							top: 0;
							line-height: 30px;
							color: #ffffff;
							font-size: 14px;
						}
						.form-control {
							width: 100%;
							height: 30px;
							line-height: 30px;
							font-size: 14px;
							border-radius: 16px;
							border: 1px solid #c1c9ce;
							background-color: #d6dde2;
							text-indent: 35px;
							color: #495055;
							transition: border 0.4s ease-in-out;
							&:focus {
											border: 1px solid #1e9aff;
							}
						}
					}
				}
				.login-footer {
					width: 100%;
					box-sizing: border-box;
					padding: 30px;
					overflow: hidden;
					.login-footer-text {
						float: left;
						&.right {
							float: right;
						}
					}
				}
			}
		}
	}
</style>
