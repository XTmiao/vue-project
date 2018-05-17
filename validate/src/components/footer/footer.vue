<template>
    <div class="footer">
        <router-link to='/index' tag="div" class="item" active-class="active"><span class="glyphicon glyphicon-home"></span>首页</router-link>
        <router-link to='/sort' tag="div" class="item" active-class="active"><span class="glyphicon glyphicon-th-large"></span>分类</router-link>
        <router-link to='/cart' tag="div" class="item" active-class="active"><span class="glyphicon glyphicon-shopping-cart"></span>购物车</router-link>
        <router-link to='/my' tag="div" class="item" active-class="active"><span class="glyphicon glyphicon-user"></span>我的</router-link>
        
    </div>
</template>
<script></script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.footer
    position: fixed
    bottom: 10px
    left: 0
    right: 0
    display: flex
    height: 50px
    text-align: center
    font-size: 13px
    z-index: 10
    .item
        flex: 1
        .glyphicon
            display: block
            margin: 5px auto
            font-size: 23px
.active
    color: blue
</style>