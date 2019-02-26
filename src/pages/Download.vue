<template>
    <div class="download" :style="{minHeight: window.innerHeight - 261 + 'px'}">
        <div class="banner-container">
            <download-banner/>
        </div>
        <div class="other-container">
            <other/>
        </div>
    </div>
</template>

<script>
import downloadBanner from '../components/download/downloadBanner'
import other from '../components/download/other'
export default {
  name: 'download',
  created () {
    this.$store.dispatch('setBackgroundColor', '#1e9aff')
	  document.onscroll = null
	  this.window = window
  },
  components: {
  	downloadBanner,
    other
  }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
    .download {
        width: 100%;
        background-color: #f3f3f3;
        padding: 30px 0;
        .banner-container {
            width: 85.21vw;
            margin: 0 auto;
        }
        .other-container {
            width: 85.21vw;
            margin: 30px auto 0;
        }
    }
</style>
