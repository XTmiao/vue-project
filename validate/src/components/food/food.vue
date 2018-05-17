<template>
	<transition name="detail">
		<div class="detail" v-show="toggle">
			<div class="detail-contain">
				<div class="detail-contain-hook" style="padding-bottom: 40px">
					<img :src="url+good.main_img" width="370">
		            <div class="detail-content">
		                <h4>{{good.name}}</h4>
		                <p class="price">￥：<span>{{good.price}}</span> </p>
		                <p class="count">库存：<span class="num">{{good.num}}</span></p>
		                <p class="brand">品牌：<span>美食</span></p>
		                <p class="pay">支付： <span>微信支付</span></p>
		            </div>
		            <div class="back" @click="hidden($event)">
		            	<span class="glyphicon glyphicon-chevron-left"></span>
		            </div>

					<ScrollTab :comments="good.comments" :name="good.name"></ScrollTab>
				</div>
	        </div>
	        <div class="footer">
	        	<p class="talk"><span class="glyphicon glyphicon-tree-deciduous"></span>客服</p>
	        	<p class="collect"><span class="glyphicon glyphicon-star-empty"></span>收藏</p>
	        	<p class="add" @click="add()">加入购物车</p>
	        	<p class="parchase">立即购买</p>
	        </div>
		</div>
    </transition>
</template>
<script>
	import { TabContainer, TabContainerItem, Toast } from 'mint-ui';
	import Vue from 'vue'
	import BScroll from 'better-scroll'
	import ScrollTab from '../scrollTab/scrollTab'
	Vue.component(TabContainer.name, TabContainer);
	Vue.component(TabContainerItem.name, TabContainerItem);

	export default{
		data() {
			return {
				toggle: false,
				url: 'https://www.gengyong.com.cn',
				good: {}
			}
		},
		created(){
            this._initScroll();
		},
		methods: {
			_initScroll() {
				this.$nextTick( () => {
					if (!this.scroll) {
						this.scroll = new BScroll( '.detail-contain', {
							probeType: 3,
							click: true
						} );
					} else {
						this.scroll.refresh()
					}
				} )
			},
			show(id) {
				this.toggle = true
				this.$nextTick( ()=>{
					this.axios.get( `${this.url}/api/goods-detail`, {
						params: {
							goodsId: id
						}
					} ).then((res)=>{
						if ( res.data.status === 1 ) {
							this.good = res.data.info;
							//console.log(this.good)
						}
					});	
				} )
			},
			hidden(event) {
				if (!event._constructed) {
					return;
				}
				this.toggle = false
			},
			add () {
				if (!this.good.count) {
					Vue.set(this.good, 'count', 1);
				}
				let _this = this;
				this.axios.get( `${this.url}/api/add-cart-index`, {
					params: {
						user_id: 8,
						goods_id: _this.good.id
					}
				} ).then((res)=>{
					if ( res.data.status === 1 ) {
						//console.log(res.data);
						let instance = Toast({
							message: res.data.info,
							position: 'bottom'
						});
						setTimeout(() => {
						  instance.close();
						}, 2000);
					}
				})
			}
		},
		components: {
			ScrollTab
		}
	}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
    .detail
        position: fixed
        top: 0
        left: 0
        bottom: 0
        width: 100%
        background: #fff
        z-index: 40
        .detail-contain
        	position: fixed
        	top: 0
        	left: 0
        	right: 0
        	bottom: 52px
        	overflow: hidden
	        .detail-content
	        	margin: 20px
	        	line-height: 25px
				.price
					display: inline-block
					color: red
				.count
					display: inline-block
					position: relative
					left: 150px
					font-size: 14px
					color: #999
			.back
				position: absolute
				top: 10px
				left: 10px
				padding: 10px
				box-sizing: border-box
				background: #000
				border-radius: 50%
				.glyphicon
					font-size: 23px
					color: #fff
			.tab
				.nav
					display: flex
					width: 100%
					.button
						flex: 1
						display: inline-block
		&.detail-enter-active, &.detail-leave-active
			transition: all .5s
			transform: translate3d(0,0,0)
		&.detail-enter, &.detail-leave-to
			transform: translate3d(100%,0,0)
	.footer
		position: fixed
		bottom: 0
		left: 0
		right: 0
		display: flex
		text-align: center
		font-size: 0
		.talk, .collect
			flex: 0 0 70px
			width: 70px
			height: 50px
			margin: 0
			text-align: center
			font-size: 14px
			border-top: 1px solid #ccc
			&.talk
				border-right: 1px solid #ccc
			span
				display: block
				line-height: 30px
				font-size: 23px
		.add, .parchase
			flex: 1
			margin: 0
			line-height: 50px
			font-size: 16px
			color: #fff
			&.add
				background: orange
			&.parchase
				background: red
</style>