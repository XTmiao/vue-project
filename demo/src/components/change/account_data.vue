<template>
	<div>
		<h4>{{account.name}}</h4>
		<ul>
			<li v-for="data in account.data">
				<span>{{data[0]}}</span>
				<span>{{data[1]}}</span>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		props: {
			account: {
				type: Object
			}
		}
	}
</script>

<style scoped>
	div{width: 45%; margin: 0 auto; margin-bottom: 100px; margin-right: 3%;}
	div h4{text-align: center; font-size: 20px; font-weight: normal; border-bottom: 1px solid #F1CC73; padding: 10px;}
	div ul {width: 80%; margin: 10px auto; }
	div ul li{margin-bottom: 10px;}
	div ul li span{display: inline-block;width: 40%; }
	div ul li span:nth-of-type(2){ float: right;text-align: center;}
</style>