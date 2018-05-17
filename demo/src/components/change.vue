<template>
	<div id="main">
		<router-view></router-view>
		<CatalogView :data="data">
			<button class="btn" slot="btn">真实账户</button>
		</CatalogView>
			
	</div>
</template>

<script>
	import CatalogView from './change/catalog'
	export default{
		data(){
			return {
				data:[
					{
						title: '交易账户',
						detail: [ '账户类型', '开户流程', '杠杆及保证金' ]
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