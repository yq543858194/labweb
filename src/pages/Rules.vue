<template>
	<div class="rules" :style="{minHeight: window.innerHeight - 261 + 'px'}">
		<h1>实验室制度</h1>
	</div>
</template>

<script>
export default {
  name: 'rules',
  created () {
    this.$store.dispatch('setBackgroundColor', '#1e9aff')
    document.onscroll = null
	  this.window = window
  }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">

</style>
