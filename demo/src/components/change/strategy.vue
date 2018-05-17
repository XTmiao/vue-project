<template>
	<div>
		<ImgBox :src="src"></ImgBox>
		<MainView :items="content"></MainView>
	</div>
</template>

<script>
	import ImgBox from './imgBoxOne'
	import MainView from './main'

	let content = [
		{
			title: '每日交易策略',
			description: []
		}
	]

	export default{
		data(){
			return {
				content: content,
				src: {
					src: '../../../static/img/33-1.jpg',
					path: '/educ/strategy'
				}
			}
		},
		components: {
			ImgBox,
			MainView
		}
	}
</script>