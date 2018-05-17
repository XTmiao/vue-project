<template>
  <div class="app">
    <keep-alive>
        <router-view></router-view>
    </keep-alive>
    <Footer></Footer>
  </div>
</template>

<script>
import 'assets/js/jquery-1.10.1.min'
import Footer from 'components/footer/footer'
export default {
  name: 'App',
  components: {
    Footer
  }
}
</script>

<style lang="stylus">
  @import 'assets/css/bootstrap.min.css'
  *
    margin: 0
    padding: 0
  html,body
    height: 100%
    overflow: hidden
</style>
