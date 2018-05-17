<template>
	<div class="cartBtn">
		<transition name='move'>
			<div class="minus" v-show="count&&notOnlyAdd" @click="minus()"><span class="glyphicon glyphicon-minus-sign"></span></div>
		</transition>
		<div class="count" v-show="count&&notOnlyAdd">{{count}}</div>
		
		<div class="add" @click.stop.prevent="addCount()"><span class="glyphicon glyphicon-plus-sign"></span></div>
	</div>
</template>
<script>
	import Vue from 'vue'
	import { Toast } from 'mint-ui';
	export default{
		props: {
			food: Object,
			notOnlyAdd: {
				default: true
			},
			str: {
				default: 'count'
			}
		},
		data () {
			return {
				url: 'https://www.gengyong.com.cn'
			}
		},
		methods: {
			addCount () {
				if (this.notOnlyAdd) {
					if(this.str==='count') {
						if( !this.food.count ) {
							Vue.set( this.food, 'count', 1 );
						} else {
							this.food.count ++;
						}
					} else {
						if(this.food.num)
							this.food.num ++;
						let _this = this;
						this.axios.get( `${this.url}/api/cart-reduce`, {
							params: {
								cartId: _this.food.id,
								num: _this.food.num
							}
						} ).then((res)=>{
							if ( res.data.status === 1 ) {
								console.log(res.data)
							}
						})
					}
				} else {
					let _this = this;
					this.axios.get( `${this.url}/api/add-cart-index`, {
						params: {
							user_id: 8,
							goods_id: _this.food.id
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
			minus () {
				if( this.str === 'count' ) {
					if (this.food.count) {
						this.food.count --;
					}
				} else {
					if (this.food.num) 
						this.food.num --;
					let _this = this;
					this.axios.get( `${this.url}/api/cart-reduce`, {
						params: {
							cartId: _this.food.id,
							num: _this.food.num
						}
					} );
				}
				
			}
		},
		computed: {
			count () {
				if(this.str==='count')
					return this.food.count
				else
					return this.food.num
			}
		}
	}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>	
	.cartBtn
		position: absolute
		right: 10px
		bottom: 5px
		div
			display: inline-block
			font-size: 15px
			text-align: center
			line-height: 20px
			color: #999
			&.minus,&.add
				width: 22px
				height: 22px
				vertival-align: top
				span
					display: inline-block
					font-size: 17px
			&.minus
				opacity: 1
				&.move-enter-active, &.move-leave-active
					transition: all .5s
					transform: translate3d(0,0,0) rotate(0)
				&.move-enter, &.move-leave-to
					opacity: 0
					transform: translate3d(35px,0,0) rotate(180deg)
			&.add
				margin-left: 10px
			&.count
				position: absolute
				top: -1px
				left: 25px
</style>