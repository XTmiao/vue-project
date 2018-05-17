<template>
	<div class="R_content">
		<dl v-for="item in data">
			<dt>{{item.title}}</dt>
			<!-- <dd>> 账户类型</dd>
			<dd>> 开户流程</dd>
			<dd>> 杠杆及保证金</dd> -->
			<dd v-for="detail in item.detail">> {{detail}}</dd>
		</dl>
		<slot name="btn"></slot>
	</div>
</template>

<script>
	export default{
		props:{
			data: {
				type: Array
			}
		}
	}
</script>

<style>
	/*@import '../../../static/css/change.css'; 继承父级css*/
</style>