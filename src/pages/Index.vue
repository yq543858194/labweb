<template>
  <div class="index" :style="{minHeight: window.innerHeight - 261 + 'px'}">
    <div class="banner-container">
      <tbanner/>
    </div>
    <div class="direction-container">
      <direction/>
    </div>
    <div class="introduction-container">
      <introduction/>
    </div>
    <div class="friendsLink-container">
      <friendslink/>
    </div>
  </div>
</template>

<script>
import tbanner from '../components/index/banner'
import direction from '../components/index/direction'
import introduction from '../components/index/introduction'
import friendslink from '../components/index/friendsLink'

export default {
  name: 'index',
  components: {
    tbanner,
    direction,
    introduction,
    friendslink
  },
  data () {
  	return {
      background: 'transparent'
    }
  },
  created () {
	  this.$store.dispatch('setBackgroundColor', 'transparent')
    document.onscroll = (e) => {
      let scrollTop = document.documentElement.scrollTop || document.body.scrollLeft
      if (scrollTop > 0) {
        this.$store.dispatch('setBackgroundColor', '#1e9aff')
      } else if (scrollTop === 0) {
	      this.$store.dispatch('setBackgroundColor', 'transparent')
      }
    }
    this.window = window
  }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  .index {
    width: 100%;
    .banner-container {
      margin-top: -60px;
    }
  }
</style>
