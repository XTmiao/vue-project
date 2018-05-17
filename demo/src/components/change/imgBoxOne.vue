<template>
	<div id="imgBox">
		<a>
			<router-link tag="img" class="one" :src="src.src" :to="src.path"></router-link>
		</a>
	</div>
</template>
<script>
	export default{
		props:{
			src:{  
				type:Object
			}
		}
	}
</script>
<style>
	@import '../../../static/css/change.css';
</style>