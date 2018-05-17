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
						title: '投资研究',
						detail: [ '交易策略' ]
					},
					{
						title: '学习中心',
						detail: [ '学习资料' ]
					},
					{
						title: '联系我们',
						detail: [ '查看所有联系方式' ]
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