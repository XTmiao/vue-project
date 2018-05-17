<template>
	<div class="cart">
		<ul class="items">
			<li class="item" v-for="(food,index) in foods" :key="index">
				<div class="content">
					<div class="choose">
						<span class="glyphicon glyphicon-ok" :class="{hiden: onOff[index]}" @click="choose(index)"></span>
					</div>
					<img :src="url+food.thumb_img" width="60" height="60">
					<div class="des">
						<p class="title">{{food.name}}</p>
						<p class="price">￥{{food.price}}</p>
					</div>
					<div class="close" @click="remove($event,food,index)">
						<span class="glyphicon glyphicon-remove"></span>
					</div>
					<cartControl :food="food" str="num"></cartControl>
				</div>
			</li>
		</ul>
		<div class="box">
			<div class="choose">
				<span class="glyphicon glyphicon-ok" :class="{hiden: toggle}" @click="chooseAll($event)"></span>
			</div>
			<div class="word">
				全选<span>￥{{total}}</span>
			</div>
			<span class="pay" @click="pay()">立即结算</span>
		</div>
		<pay :chooseFoods="chooseFood" :total="total" ref="pay"></pay>
	</div>
</template>
<script>
	import cartControl from '../cartcontrol/cartcontrol'
	import pay from '../pay/pay'
	import BScroll from 'better-scroll'
	import Vue from 'vue'
	export default{
		data () {
			return {
				url: 'https://www.gengyong.com.cn',
				foods: [],
				toggle: true,
				onOff: [],  //控制单个选择按钮
				origin: 0,  //total的初始值
				chooseFood: []
			}
		},
		mounted() {
			this.$nextTick( () => {
				this._initScroll();
				this.getData();
			} )			
		},
		computed: {
			total () {
				this.origin = 0;
				let arr = [];  //保存选中的index
				this.onOff.forEach( (item,index)=>{
					if (!item)
						arr.push(index);
				} );
				//console.log(arr)
				this.foods.forEach( (item,index) => {
					arr.forEach( (num)=>{
						if(num===index) {
							this.origin += item.num*item.price
						}
					} )
				} );
				return this.origin;
			}
		},
		methods: {
			_initScroll () {
				if ( !this.scroll ) {
					this.scroll = new BScroll( '.cart', {
						click: true
					} )
				} else {
					this.scroll.refresh();
				}
			},
			getData () {
				this.axios.get( `${this.url}/api/cart-list`, {
					params: {
						user_id: 8
					}
				} ).then( (res) => {
					if ( res.data.status === 1 ) {
						this.foods = res.data.info;
						//console.log(this.foods);
						for( let i=0; i<this.foods.length; i++ ){
							this.onOff.push(true);  //初始选项为隐藏状态
						}
					}
					
				} );
			},
			remove (event,food,indexCurrent) {
				if(!event._constructed) {
					return;
				}
				this.axios.get( `${this.url}/api/cart-delete`, {
					params: {
						cartId: food.id
					}
				} ).then( (res)=>{
					if ( res.data.status === 1 ) {
						//console.log(res.data)
						this.getData();
						this.onOff.splice(indexCurrent,1); //移除
					}
				} );
			},
			chooseAll (event) {
				if (!event._constructed) {
					return;
				}
				this.toggle = !this.toggle;
				this.onOff.forEach( (item,index)=>{
					Vue.set(this.onOff,index,this.toggle)
				} )
			},
			choose (index) {
				Vue.set(this.onOff, index, !this.onOff[index]);
				//当直接设置数组的值的时候，vue不能检测变动的数组，需要用set或者splice方法触发视图更新
				for( let j=0; j<this.onOff.length; j++ ) {
					if (this.onOff[j]) {
						this.toggle = true;
						return;
					}
				}
				this.toggle = false;
			},
			pay () {
				this.chooseFood = [];
				let _this = this;
				//this.axios.get( `${this.url}/api/orders/cart-buy` )
				this.onOff.forEach((item,index)=>{
					if (!item){
						this.chooseFood.push(this.foods[index]);
					}
				});
				this.$refs.pay.show();
			}
		},
		components: {
			cartControl,
			pay
		}
	}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
	@import '../../assets/styl/mixin.styl'
	.cart
		position: absolute
		top: 30px
		left: 0
		right: 0
		bottom: 120px
		overflow: hidden
		.items
			width: 100%
			list-style: none
			.item
				height: 65px
				margin: 10px
				padding-bottom: 5px
				border-1px(#eee)
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
		.box
			position: fixed
			bottom: 70px
			left: 0
			right: 0
			height: 35px
			line-height: 35px
			padding: 0 0 0 10px
			display: flex
			border-top: 1px solid #eee
			.choose
				flex: 0 0 25px
				width: 25px
				height: 25px
				margin-top: 5px
				margin-right: 10px
				border: 2px solid #ccc
				border-radius: 50%
				text-align: center
				line-height: 25px
			& .word
				flex: 1
				font-size: 15px
				span
					color: red
			& .pay
				flex: 0 0 100px
				width: 100px
				background: orange
				color: #fff
				font-size: 18px
				font-weight: 700
				text-align: center
	.hiden
		opacity: 0
</style>