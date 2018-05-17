<template>
	<div class="tab">  
		<div class="pagenumber">
	      	<div>图文详情</div>
	      	<div>用户评论</div>
	  	</div>
		<div id="viewport" class="viewport">
		    <div class="pageview">
		        <p class="name"> {{name}} </p>
		        <button id="testbtn" style="display:none"></button>
		    </div>
		    <div class="pageview">
		        <ul class="list">
		        	<li class="item" v-for="comment in comments">
		        		<span class="username">{{comment.username}}</span><span>{{comment.content}}</span>
		        	</li>
		        </ul>
		    </div>
	  	</div>
	</div> 
</template>
<script>
	import '../../assets/js/app.js'
	export default{
		props: {
			comments: Array,
			name: String
		}
	}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
	@import '../../assets/css/app.css'
	@import '../../assets/styl/mixin.styl'
	.name
		font-size: 20px
		text-align: center
		line-height: 50px
	.list
		list-style: none
		.item
			padding: 10px 0 10px 30px
			border-1px(#eee)
			.username
				display: inline-block
				margin-right: 10px
</style>