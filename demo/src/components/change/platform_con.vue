<template>
	<div>
		<p>{{data.title}}</p>
		<p v-for="des in data.description"> {{des}}</p>
		<ol>
			<li v-for="detail in data.detail">{{detail}}</li>
		</ol>
		<slot name="img"><img :src="data.imgUrl"></slot>
		<slot name="btn" v-if="data.btn"><button>点击下载</button></slot>
	</div>
</template>

<script>
	export default{
		props: {
			data: {
				type: Object
			}
		}
	}
</script>

<style scoped>
	div{width: 100%; margin-bottom: 50px;}
	div p{margin-bottom: 20px;}
	p:nth-of-type(1){font-size: 21px;line-height: 30px;margin-bottom: 10px;}
	p:nth-of-type(2){}
	div ol{padding: 0; margin-left: 20px; margin-top: 20px; display: inline-block;}
	div ol li{font-size: 15px; height: 40px;}
	div img{width: 30%; display: inline-block; float: right;}
	div button{border: none; width: 150px; height: 40px; color: #fff; background: #000; display: block; border-radius: 7px; margin-top: 30px;}
</style>