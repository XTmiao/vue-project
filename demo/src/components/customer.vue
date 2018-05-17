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
						title: 'Q&A',
						detail: [ '常见问题' ]
					},
					{
						title: '联系我们',
						detail: [ '联系我们' ]
					},
					{
						title: '意见反馈',
						detail: [ '意见反馈' ]
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