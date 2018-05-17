<template>
	<div>
		<ImgBox :src="src"></ImgBox>
		<MainView :items="content">
			<div slot="diff">
				<SrcContent style="margin-top:-70px;"></SrcContent>
			</div>
		</MainView>
	</div>
</template>

<script>
	import ImgBox from './imgBoxOne'
	import MainView from './main'
	import SrcContent from './src_con'

	let content = [
		{
			title: '教育资源',
			description: []
		}
	]

	export default{
		data(){
			return {
				content: content,
				src: {
					src: '../../../static/img/39-1.jpg',
					path: '/educ/src'
				}
			}
		},
		components: {
			ImgBox,
			MainView,
			SrcContent
		}
	}
</script>