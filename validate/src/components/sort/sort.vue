<template>
	<div class="sort">
		<ul class="menu">
			<li :class="{'active':currentIndex===index}" @click="selectCate(index,cate.id)" v-for="(cate,index) in cateList">{{cate.name}}</li>
		</ul>
		<ul class="meunContent">
			<li v-for="food in foodList">
				<img :src="url+food.main_img" width="90" height="90">
				<div class="content">
					<span class="title">{{food.name}}</span>
					<p class="price">单价：￥<span>{{food.price}}</span></p>
					<p class="count">销量：<span>{{food.num}}</span></p>
				</div>
				<cartControl :food="food"></cartControl>
			</li>
		</ul>
	</div>
</template>
<script>
	import cartControl from '../cartcontrol/cartcontrol'
	export default{
		data() {
			return {
				url: 'https://www.gengyong.com.cn',
				cateList: [],
				currentIndex: 0,
				foodList: []
			}
		},
		components: {
			cartControl
		},
		mounted() {
			this.$nextTick( ()=>{
				this.axios.get( `${this.url}/api/cate-list` ).then( (res)=>{
					//console.log(res.data.info.cateInfo)
					this.cateList = res.data.info.cateInfo;
					this.selectCate(0, this.cateList[0].id)
				} );
				
			} )
		},
		methods: {
			selectCate (num, id) {
				this.currentIndex = num;
				this.axios.get( `${this.url}/api/goods-list`, {
					params: {
						cate_id: id
					}
				} ).then( (res)=>{
					if ( res.data.status === 1 ) {
						//console.log(res.data.info)
						this.foodList = res.data.info;
					}
				} )
			}
		}
	}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
	@import '../../assets/styl/mixin.styl'
	.sort
		position: absolute
		top: 10px
		bottom: 60px
		width: 100%
		overflow: hidden
		display: flex
		.menu
			flex: 0 0 80px
			width: 80px
			height: 100%
			text-align: center
			background: #eee
			li
				height: 45px
				line-height: 45px
				font-size: 14px
				&.active
					background: #fff
		.meunContent
			margin-right: 10px
			flex: 1
			li
				padding-bottom: 20px
				margin-bottom: 10px
				display: flex
				border-1px(#eee)
				img
					display: inline-block
					flex: 0 0 90px
					margin-right: 10px
				.content
					flex: 1
					font-size: 0
					.title
						height: 30px
						line-height: 30px
						font-size: 15px
					.price
						margin: 0
						height: 30px
						line-height: 30px
						font-size: 15px
					.count
						margin: 0
						height: 30px
						line-height: 30px
						font-size: 15px

</style>