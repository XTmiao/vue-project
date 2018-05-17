<template>
	<transition name="move">
		<div class="order" v-show="isShow">
			<div class="back" @click="hidden">
				<span class="glyphicon glyphicon-chevron-left"></span>
			</div>
			<div class="content">
				<div class="pagenumber">
			      	<div>代付款</div>
			      	<div>待上菜</div>
			      	<div>待评价</div>
			      	<div>已完成</div>
			  	</div>
				<div id="viewport" class="viewport">
				    <div class="pageview">
				        <h3>页面一</h3>
				    </div>
				    <div class="pageview">
				        <h3>页面二</h3>
				    </div>
				    <div class="pageview">
				        <h3>页面三</h3>
				    </div>
				    <div class="pageview">
				        <h3>页面四</h3>
				    </div>
			  	</div>
			</div>
		</div>
	</transition>
</template>
<script>
	//import '../../assets/js/app.js'
	import {fn} from '../../assets/js/app1.js'
	export default{
		props: {
			num: {
				default: 0
			}
		},
		data() {
			return {
				isShow: false,
				url: 'https://www.gengyong.com.cn'
			}
		},
		methods: {
			show() {
				this.isShow = true;
			},
			hidden() {
				this.isShow = false;
			},
			getData() {
				let _this = this;
				this.axios.get(`${this.url}/api/orders/index`,{
					params: {
						user_id: 8,
						currentTab: 0,  //四种订单状态
						page: 0
					}
				}).then( (res)=>{
					console.log(res.data)
				} )
			}
		},
		watch: {
			isShow: {
				handler: function() {
					fn(window,document,this.num);
					this.getData()
				}
			}
		}
	}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
	@import '../../assets/css/app1.css'
	.order
		position: fixed
		top: 0
		left: 0
		width: 100%
		height: 100%
		z-index: 40
		background: #fff
		&.move-enter-active,&.move-leave-active
			transition: all .5s
			transform: translate3d(0,0,0)
		&.move-enter,&.move-leave-to
			transform: translate3d(100%,0,0)
		& .back
			position: relative
			top: 10px
			left: 10px
			height: 20px
			width: 20px
		& .content
			position: relative
			top: 20px
			left: 0
			right: 0
			bottom: 0
			overflow: hidden
</style>