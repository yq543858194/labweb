<template>
	<div class="button-group">
		<about-button content="关于我们" url="/about" bg-color="#1e9aff" font-color="#ffffff"/>
		<about-button content="加入我们" url="/joinus" bg-color="#1e9aff" font-color="#ffffff"/>
		<about-button content="问题反馈" url="/feedBack" bg-color="#1e9aff" font-color="#ffffff"/>
	</div>
</template>

<script>
import aboutButton from './button'
export default {
  name: 'AboutButtonGroup',
  components: {
    aboutButton
  }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">

</style>
