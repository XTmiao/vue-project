<template>
	<transition name="move">
		<div class="pay" v-show="toggle">
			<div class="back">
				<span class="glyphicon glyphicon-chevron-left" @click="hidden()"></span>
			</div>
			<div class="main">
				<ul class="items">
					<li v-for="food in chooseFoods" class="item">
						<div class="content">
							<img :src="url+food.thumb_img" width="60" height="60">
							<div class="des">
								<p class="title">{{food.name}}</p>
								<p class="price">￥{{food.price}}</p>
							</div>
							<div class="close">
								<span class="glyphicon glyphicon-remove"></span>
							</div>
							<cartControl :food="food" str="num"></cartControl>
						</div>
					</li>
				</ul>
			</div>
			<div class="submit">
				<p>总计：￥{{total}}</p>
				<button class="btn btn-primary" @click="submitOrder()">微信支付</button>
			</div>
		</div>
	</transition>
</template>
<script>
	import cartControl from '../cartcontrol/cartcontrol'
	import BScroll from 'better-scroll'
	import { Toast } from 'mint-ui';
	export default{
		props: {
			chooseFoods: {
				default: {}
			},
			total: {
				default: 0
			}
		},
		data() {
			return {
				toggle: false,
				url: 'https://www.gengyong.com.cn'
			}
		},
		mounted() {
			this.$nextTick( ()=>{
				this._initScroll();
			} )
		},
		methods: {
			_initScroll() {
				if (!this.scroll) {
					this.scroll = new BScroll( '.main', {
						click: true
					} )
				} else {
					this.scroll.refresh();
				}
			},
			hidden() {
				this.toggle = false;
			},
			show() {
				this.toggle = true;
			},
			submitOrder() {
				this.axios.get( `${this.url}/api/pay/cart-pay`, {
					params: {
						userId: 8,
						currentTab: 0,
						page: 0
					}
				} ).then( (res)=>{
					if (res.data.status === 1) {
						let instance = Toast({
                            message: '支付成功',
                            position: 'bottom'
                        });
                        setTimeout(() => {
                          instance.close();
                        }, 2000);
					}
					console.log(res.data.info);
				} )
			}
		},
		components: {
			cartControl
		}
	}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
	.hide 
		display: none
	.pay
		position: fixed
		top: 0
		left: 0
		height: 100%
		width: 100%
		background: #fff
		z-index: 40
		&.move-enter-active,&.move-leave-active
			transition: all .5s
			transform: translate3d(0,0,0)
		&.move-enter,&.move-leave-to
			transform: translate3d(100%,0,0)
		& .back
			padding: 10px
			font-size: 20px
		& .main
			position: absolute
			top: 40px
			left: 0
			right: 0
			bottom: 40px
			overflow: hidden
			.items
				width: 100%
				list-style: none
				.item
					position: relative
					height: 65px
					margin: 10px
					padding-bottom: 5px
					.content
						display: flex
						.choose
							flex: 0 0 25px
							margin-top: 25px
							margin-right: 10px
							width: 25px
							height: 25px
							border: 2px solid #ccc
							border-radius: 50%
							.glyphicon
								width: 100%
								text-align: center
								line-height: 20px
						img
							flex: 0 0 60px
							display: block
							margin-right: 10px
							vertical-align: top
						.des
							flex: 1
							.price
								margin: 20px 0 0 0
								color: orange
						.close
							position: absolute
							top: 0
							right: 10px
							.glyphicon
								font-weight: 100
								font-size: 15px
		& .submit
			position: fixed
			bottom: 20px
			left: 0
			right: 0
			text-align: center
			.btn
				width: 100%
</style>