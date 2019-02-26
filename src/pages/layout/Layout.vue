<template>
    <div class="layout">
      <theader/>
      <main-container/>
      <nav-footer/>
    </div>
</template>

<script>
import theader from '../../components/common/header'
import mainContainer from '../../components/layout/main'
import navFooter from '../../components/common/footer'

export default {
  name: 'layout',
  components: {
    mainContainer,
    navFooter,
    theader
  }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  .fade-enter-active,
  .fade-leave-active {
      transition: opacity .1s
  }

  .fade-enter,
  .fade-leave
  {
     opacity: 0
  }

  .layout {
    position: relative;
  }
</style>
