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
						title: '平板端客户',
						detail: [ 'ipad客户端', '安卓平板电脑客户端' ]
					},
					{
						title: 'PC端客户',
						detail: [ 'Window客户端' ]
					},{
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