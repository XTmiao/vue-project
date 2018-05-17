<template>
	<div id="index">
		<SelectView></SelectView>
		<IndexNew></IndexNew>
		<IndexProdect></IndexProdect>
	</div>
	
</template>

<script>
	import SelectView from './index_select';
	import IndexNew from './index_new'; 
	import IndexProdect from './index_prodect'
	export default{
		components:{
			SelectView,
			IndexNew,
			IndexProdect
		}
	}
</script>