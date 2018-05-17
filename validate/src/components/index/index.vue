<template>
    <div class="index">
        <mt-swipe :auto="4000" class="header">
          <mt-swipe-item class="item" v-for="img in carouselImg"><img :src="url+img.imgurl" width="100%"></mt-swipe-item>
        </mt-swipe>
        <div class="content">
            <div class="content-hook">
                <div class="item" @click="show($event, good.id)" v-for="good in goods">
                    <div class="imgBox">
                        <img :src="url+good.main_img" width="150" height="150" />
                        <span class="title">{{good.name}}</span>
                    </div>
                    <div class="price">
                        <span class="new">￥{{good.price}}</span><span class="old">￥{{good.reprice}}</span>
                    </div>
                    <div class="count">销量：<span class="num">{{good.num}}</span></div>
                    <cartControl :notOnlyAdd="false" :food="good" class="cartcontrol"></cartControl>
                </div>
                
                <div class="more" @click="loadMore()"><span>加载更多</span></div>
            </div>
        </div>
        <Food ref="food" ></Food>
    </div>
    
</template>
<script>
    import { Swipe, SwipeItem, Toast } from 'mint-ui';
    import Vue from 'vue'
    import BScroll from 'better-scroll'
    Vue.component(Swipe.name, Swipe);
    Vue.component(SwipeItem.name, SwipeItem);

    import Food from '../food/food'
    import cartControl from '../cartcontrol/cartcontrol'

    export default{
        created() {
            this.$nextTick( () => {
                this._initScroll();  
                this.axios.get( `${this.url}/api/index` ).then((response) => {
                    if ( response.data.status === 1 ) {
                        //console.log(response.data)
                        this.carouselImg = response.data.info.carouselInfo;
                        this.goods = response.data.info.goodsInfo;
                    }
                });
            } )
        },
        data () {
            return {
                url: 'https://www.gengyong.com.cn',
                carouselImg: [],
                goods: [],
                page: 1
            }
        },
        computed: {
        },
        methods: {
            _initScroll () {
                if(!this.scroll) {
                    this.scroll = new BScroll( '.content', {
                        click: true
                    } )
                }else {
                    this.scroll.refresh()
                }
            },
            show(event, id) {
                if( !event._constructed ) {
                    return;
                }
                this.$refs.food.show(id);
            },
            loadMore () {
                this.$nextTick( ()=>{
                    let _this = this;
                    this.axios.get( `${this.url}/api/moreGoods`, {
                        params:{
                            page: _this.page
                        }
                    } ).then( (response) => { 
                        if ( res.data.status === 1 ) {
                            if ( response.data.status ) {
                                this.page ++;
                                this.goods = this.goods.concat(response.data.info); //连接两个数组，不能用push，push只能追加一个数据
                            } else {
                                let instance = Toast({
                                    message: '没有更多数据',
                                    position: 'bottom'
                                });
                                setTimeout(() => {
                                  instance.close();
                                }, 2000);
                            }
                        }
                    } )
                } )
            }
        },
        components: {
            Food,
            cartControl
        }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
    .header
        height: 100px
        width: 100%
        .item
            width: 100%
    .content
        position: absolute
        top: 110px
        left: 0
        right: 0
        bottom: 60px
        overflow: hidden
        z-index: 5
        .item
            position: relative
            display: inline-block
            width: 45%
            margin-left: 15px
            .imgBox
                margin-bottom: 15px
                span
                    display: block
                    margin-left: 20px
                    font-size: 15px
                    &.title
                        margin: 10px 0 -10px 13px
            .price
                margin-left: 10px
                margin-bottom: 10px
                .new
                    font-size: 15px
                    color: red
                    margin-right: 5px
                .old
                    font-size: 11px
                    color: #666
                    text-decoration: line-through
            .count
                margin-left: 15px
                margin-bottom: 10px
                font-size: 14px
        .more
            text-align: center
</style>