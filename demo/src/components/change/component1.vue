<template>
	<div class="con">
		<div class="group" v-for="data in datas">
			<p>Q: {{data[0]}}</p>
			<p>A: {{data[1]}}</p>
		</div>
	</div>
</template>

<script>
	export default{
		props:{
			datas:{
				type: Array
			}
		}
	}
</script>

<style scoped>
	.con{margin-top: 40px; margin-bottom: 150px;}
	.group{margin-bottom: 30px; }
	.group p{line-height: 30px;}
</style>
