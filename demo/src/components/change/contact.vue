<template>
	<div>
		<ImgBox :src1="src"></ImgBox>
		<MainView :items="content">
			<div slot="diff" class="diff">
				<p>在线咨询</p>
				<p>客户服务团队，随时为您提供专业和诚挚的服务与支持！</p>
				<p>中文客户服务时间：周一至周五9: 30-24：00</p>
				<p>邮箱：11111111111</p>
			</div>
		</MainView>
	</div>
</template>

<script>
	import ImgBox from './imgBoxThree2'
	import MainView from './main'

	let content = [
		{
			title: '联系我们',
			description: []
		}
	]

	export default{
		data(){
			return {
				content: content,
				src: {
					src: '../../../static/img/27-1.jpg',
					path: '/educ/strategy',
					isChange: false
				}
			}
		},
		components: {
			ImgBox,
			MainView
		}
	}
</script>

<style scoped>
	.diff{text-align: center; margin-top: -50px; margin-bottom: 100px;}
	.diff p{line-height: 40px;}
	.diff p:nth-of-type(1){font-size: 21px;}
	.diff p:nth-of-type(3){margin-bottom: 20px;}
</style>