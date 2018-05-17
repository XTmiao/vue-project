<template>
	<div>
		<ImgBox :src3="src"></ImgBox>
		<MainView :items="content">
			<div slot="diff">
				<PlatformCon :data="data"></PlatformCon>
			</div>
		</MainView>
	</div>
</template>

<script>
	import ImgBox from './imgBoxThree2'
	import MainView from './main'
	import PlatformCon from './platform_con'

	let content = [
		{
			title: '平板电脑客户端下载',
			description: []
		}
	];

	let data = {
		title: '如何安装MT4 Windows版本',
		description: [ '支持MQL语言创建EA（Expert Advisor）程序，您可以完全按照自己的交易模式，实现自动化交易，轻松定制管理多样的交易。', '步骤：' ],
		detail: [ '点击下面按钮下载终端 (eastlodge4setup.exe file)', '下载完成后运行eastlodge4setup.exe文件', '第一次运行程序，您会看到登录窗口', '输入真实账户或模拟账户的注册信息。' ],
		imgUrl: '../../../static/img/mt4-pc-small.png',
		btn: true
	}

	export default{
		data(){
			return {
				content: content,
				src: {
					src: '../../../static/img/19-1.jpg',
					path: '/change/tablet',
					isChange: false
				},
				data: data
			}
		},
		components: {
			ImgBox,
			MainView,
			PlatformCon
		}
	}
</script>
