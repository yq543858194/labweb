<template>
	<div class="joinUs" :style="{minHeight: window.innerHeight - 261 + 'px'}">
		<div class="container">
			<div class="left-container">
				<button-group/>
			</div>
			<div class="right-container">
				<h2 class="title">加入我们</h2>
				<div class="form">
					<el-row :gutter="20">
						<el-col span="20">
							<el-col span="12">
								<el-input v-model="name" placeholder="请输入姓名"></el-input>
							</el-col>
							<el-col span="12">
								<el-input v-model="sex" placeholder="请输入姓名"></el-input>
							</el-col>
							<el-col span="12">
								<el-input v-model="schoolNum" placeholder="请输入学号"></el-input>
							</el-col>
							<el-col span="12">
								<el-date-picker
									v-model="birthDate"
									type="date"
									placeholder="请选择出生日期">
								</el-date-picker>
							</el-col>
							<el-col span="12">
								<el-input v-model="school" placeholder="请输入学院"></el-input>
							</el-col>
							<el-col span="12">
								<el-input v-model="politicsStatus" placeholder="请输入政治面貌"></el-input>
							</el-col>
							<el-col span="12">
								<el-input v-model="major" placeholder="请输入专业"></el-input>
							</el-col>
							<el-col span="12">
								<el-input v-model="national" placeholder="请输入民族"></el-input>
							</el-col>
						</el-col>
						<el-col span="4">
							<el-upload class="avatar-uploader" action="#" :show-file-list="false" :onsuccess="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
								<img v-if="imageUrl" :src="imageUrl" class="avatar">
								<i v-else class="el-icon-plus avatar-uploader-icon"></i>
							</el-upload>
						</el-col>
					</el-row>
					<el-row :gutter="20">
						<el-col span="24" class="form-row">
							<el-col span="24">
								<el-input v-model="nativePlace" placeholder="请输入籍贯"></el-input>
							</el-col>
							<el-col span="12">
								<el-input v-model="phone" placeholder="请输入电话"></el-input>
							</el-col>
							<el-col span="12">
								<el-input v-model="qq" placeholder="请输入QQ"></el-input>
							</el-col>
							<el-col span="24">
								<el-select v-model="direction" multiple placeholder="请选择学习方向">
									<el-option
										v-for="item in directions"
										:key="item.value"
										:label="item.label"
										:value="item.value">
									</el-option>
								</el-select>
							</el-col>
							<el-col span="24">
								<el-input
									type="textarea"
								row="4"
									placeholder="请输入个人简介"
									v-model="description">
								</el-input>
							</el-col>
							<el-col span="12">
								<el-button type="primary">提交</el-button>
							</el-col>
							<el-col span="12">
								<el-button>取消</el-button>
							</el-col>
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
  		name: '',
		  sex: '',
		  birthDate: '',
		  schoolNum: '',
		  school: '',
		  politicsStatus: '',
		  major: '',
		  national: '',
		  imageUrl: '',
		  nativePlace: '',
		  address: '',
		  phone: '',
		  qq: '',
		  direction: '',
		  description: '',
		  directions: [
			  {
			  	label: '前端开发',
				  value: '1'
			  },
			  {
				  label: '后端开发',
				  value: '2'
			  },
			  {
				  label: '移动端开发',
				  value: '3'
			  },
			  {
				  label: '运维',
				  value: '4'
			  },
			  {
				  label: 'C++程序设计',
				  value: '5'
			  },
			  {
				  label: 'Python程序设计',
				  value: '6'
			  }
		  ]
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
					.el-col-12,.el-col-4,.el-col-24 {
						padding-top: 20px;
					}
					.form-row {
						padding-top: 0;
						padding-right: 0!important;
					}
					.el-select {
						width: 100%;
					}
					.el-date-editor {
						width: 100%;
					}
					.el-button {
						width: 100%;
					}
					.avatar-uploader{
						border: 1px dashed #d9d9d9;
						border-radius: 6px;
						cursor: pointer;
						position: relative;
						overflow: hidden;
						width: 100%;
						.avatar-uploader:hover {
							border-color: #409EFF;
						}
						.avatar-uploader-icon {
							font-size: 28px;
							color: #8c939d;
							width: 100%;
							height: 217px;
							line-height: 217px;
							text-align: center;
						}
						.avatar {
							width: 100%;
							height: 160px;
							display: block;
						}
					}
				}
			}
		}
	}
</style>
