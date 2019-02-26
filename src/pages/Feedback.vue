<template>
	<div class="joinUs" :style="{minHeight: window.innerHeight - 261 + 'px'}">
		<div class="container">
			<div class="left-container">
				<button-group/>
			</div>
			<div class="right-container">
				<h2 class="title">问题反馈</h2>
				<div class="form">
					<el-row :gutter="20">
						<el-col span="24">
							<el-select v-model="feedBackType" placeholder="请选择反馈类型">
								<el-option
									v-for="item in feedBackTypes"
									:key="item.value"
									:label="item.label"
									:value="item.value">
								</el-option>
							</el-select>
						</el-col>
						<el-col span="24">
							<el-input
								type="textarea"
								:rows="5"
								placeholder="请输入反馈信息"
								v-model="feedBackContent">
							</el-input>
						</el-col>
						<el-col span="12">
							<el-input v-model="feedBackPhone" placeholder="请输入您的手机号"/>
						</el-col>
						<el-col span="12">
							<el-input v-model="feedBackQQ" placeholder="请输入您的QQ号"/>
						</el-col>
						<el-col span="12">
							<el-button type="primary">提交</el-button>
						</el-col>
						<el-col span="12">
							<el-button>取消</el-button>
						</el-col>
					</el-row>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import buttonGroup from '../components/common/aboutButtonGroup'
export default {
  name: 'JoinUs',
  created () {
    this.$store.dispatch('setBackgroundColor', '#1e9aff')
    document.onscroll = null
	  this.window = window
  },
  components: {
  	buttonGroup
  },
  data () {
  	return {
		  feedBackType: '',
		  feedBackTypes: [
			  {
			  	label: '问题性反馈',
				  value: '1'
			  },
			  {
				  label: '建议性反馈',
				  value: '2'
			  }
		  ],
		  feedBackContent: '',
		  feedBackPhone: '',
		  feedBackQQ: ''
	  }
  },
  method: {
    handleAvatarSuccess (res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload (file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    }
  }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
	.joinUs {
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
				.title {
					padding: 20px 30px;
					margin: 0;
					border-bottom: 1px solid #dedede;
				}
				.form {
					.el-col-24,.el-col-12 {
						padding-top: 20px;
					}
					.el-select {
						width: 100%;
					}
					.el-button {
						width: 100%;
					}
				}
			}
		}
	}
</style>
