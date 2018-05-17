<template>
	<div>
		<ImgBox :src2="src"></ImgBox>
		<MainView :items="content"></MainView>
	</div>
</template>
<script>
	import ImgBox from './imgBoxThree'
	import MainView from './main'

	let content = [
		{
			title: '开户流程',
			description: []
		}
	];

	export default{
		data(){
			return {
				content: content,
				src: {
					src: '../../../static/img/22-1.jpg',
					path: '/change/flow',
					isChange: false
				}
			}
		},
		components:{
			ImgBox,
			MainView
		}
	}

</script>
<style></style>