<template>
	<div class="my">
		<div class="head">
			<div class="avatar"></div>
			<span>111</span>
		</div>
		<div class="allOrder">
			<span class="order">全部订单</span><span class="see" @click="see(0)">查看全部订单 ></span>
		</div>
		<div class="handle">
			<div @click="see(0)"><i class="icon-newspaper"></i>待付款<span>({{orders[0]}})</span></div>
			<div @click="see(1)"><i class="icon-bubble"></i>待上菜<span>({{orders[1]}})</span></div>
			<div @click="see(2)"><i class="icon-truck"></i>待评价<span>({{orders[2]}})</span></div>
			<div @click="see(3)"><i class="icon-grin"></i>已完成<span>({{orders[3]}})</span></div>
		</div>
		<div class="operation">
			<span>地址管理</span><span class="more">></span>
		</div>
		<div class="operation">
			<span>我的积分</span><span class="more">0</span>
		</div>
		<div class="operation">
			<span>联系客服</span><span class="more">></span>
		</div>
		<order ref="order" :num="num"></order>
	</div>
</template>
<script>
	import order from '../order/order'
	export default{
		data() {
			return {
				url: 'https://www.gengyong.com.cn',
				orders: [],
				num: 0
			}
		}, 
		components: {
			order
		},
		mounted() {
			this.getData();
		},
		methods: {
			see(n) {
				this.num = n;
				this.$refs.order.show();
			},
			getData() {
				this.axios.get( `${this.url}/api/orders/num`, {
					params: {
						user_id: 7
					}
				} ).then( (res)=>{
					if (res.data.status === 1) {
						this.orders = res.data.info;
					}
				} )
			}
		}
	}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
	@import '~assets/styl/mixin.styl'
	@import '../../assets/style.css'
	.my
		.head
			height: 150px
			padding-top: 20px
			background: lightgreen
			text-align: center
			.avatar
				margin: 0 auto 10px auto
				width: 80px
				height: 80px
				border: 2px solid #fff
				border-radius: 50%
				background: #fff
		.allOrder
			padding: 0 10px
			height: 40px
			line-height: 40px
			border-1px(#eee)
			.see
				display: inline-block
				float: right
				color: #999
		.handle
			display: flex
			padding: 10px 0
			text-align: center
			color: #999
			div
				flex: 1
				i
					margin: 0 auto 5px auto
					display: block
					font-size: 22px
				span
					color: red
		.operation
			padding: 0 10px
			height: 40px
			line-height: 40px
			border-1px(#eee)
			.more
				display: inline-block
				float: right
				color: #999
</style>