<template>
	<div>
		<ImgBox :src3="src"></ImgBox>
		<MainView :items="content">
			<div slot="diff" class="text">
				<h3>意见反馈表</h3>
				<p>请正确填写您的信息和您给我们的宝贵意见和建议，我们会尽快给您回复！</p>
				<div><input type="text" placeholder="主题"><span>*</span></div>
				<div><textarea placeholder="请填写意见"></textarea></div>
				<div><button>提交</button></div>
			</div>
		</MainView>
	</div>
</template>

<script>
	import ImgBox from './imgBoxThree2'
	import MainView from './main'

	let content = [
		{
			title: '意见反馈',
			description: []
		}
	]

	export default{
		data(){
			return {
				content: content,
				src: {
					src: '../../../static/img/29-1.jpg',
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
	.text{width: 100%; margin-top: -70px; background: #F2F2F2; padding-top: 20px; padding-bottom: 50px; text-align: center; margin-bottom: 100px;}
	.text h3{line-height: 50px;}
	.text p{color: #666;}
	.text div{width: 50%; margin: 0 auto; position: relative; font-size: 21px;}
	.text div:first-of-type{margin-top: 30px;}
	.text div input, .text div textarea{width: 90%; padding: 10px; border:none; margin:5px;}
	.text div textarea{height: 170px;}
	.text div span{position: absolute; right: -5px; top: 45%; font-size: 20px; color: red;}
	.text div button{width: 150px; height: 40px; background: #000; border: none; color: #F1CC73; border-radius: 5px; margin-top: 20px;}
</style>