<template>
  <div class="slide" v-show="isShow">
    <div class="slide-group">
      <div class="div1">1</div>
      <div class="div2">2</div>
      <div class="div3">3</div>
      <div class="div4">4</div>
    </div>
    <div class="dots">
      <!-- <span class="dot" :class="{active: currentPageIndex === index }" v-for="(item, index) in dots"></span> -->
      <span class="dot now">待付款</span>
      <span class="dot">待上菜</span>
      <span class="dot">待评价</span>
      <span class="dot">已完成</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  export default {
    props: {
    },
    data() {
      return {
        dots: [],
        currentPageIndex: 0,
        isShow: true
      }
    },
    methods: {
      _initSlide() {
        if( !this.slide ) {
          this.slide = new BScroll('.slide', {
            scrollX: true,
            scrollY: false,
            momentum: false,
            snap: {
              loop: false,
              threshold: 0.3
            },
            bounce: false,
            stopPropagation: true,
            click: true
          })
        } else {
          this.slide.refresh()
        }
      },
      _initWidth() {
        let totalWidth = $('.slide-group').width();
        let width = parseInt(totalWidth/4);
        let button = $('.dot');
        for( let i=0; i<button.length; i++ ) {
          button[i].index = i;
          button[i].onclick = function () {
            //this.slide.goToPage(i,0)
            let x = this.slide.getCurrentPage().pageX;
            console.log(x)
          }
        }
      }
    },
    mounted() {
      this._initSlide()
      this._initWidth()
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .slide
    position: fixed
    top: 0
    bottom: 0
    left: 0
    width: 100%
    z-index: 40
    background: #fff
    .dots
      position: absolute
      top: 30px
      left: 0
      width: 100%
      display: flex
      .dot 
        flex: 1
        display: block
        text-align: center
        &.now
          border-bottom: 3px solid red
    .slide-group
      position: absolute
      top: 60px
      left: 0
      width: 400%
      height: 200px
      display: flex
      div
        flex: 1
        text-align: center
        font-size: 25px
</style>
