<template>
	<div id="main">
		<router-view></router-view>
		<CatalogView :data="data"></CatalogView>
	</div>
</template>

<script>
	import CatalogView from './change/catalog'
	export default{
		data(){
			return {
				data: [
					{
						title: '交易产品',
						detail: [ '外汇品种', '贵金属', '原油', '期货合约', '美股' ]
					}
				]
			}
		},
		components: {
			CatalogView
		}
	}
</script>

<style>
	@import '../../static/css/change.css'; 
</style>