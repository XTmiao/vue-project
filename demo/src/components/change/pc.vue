<template>
	<div>
		<ImgBox :src1="src"></ImgBox>
		<MainView :items="content">
			<div slot="diff">
				<PlatformCon :data="data1" style="margin-top: -70px;"></PlatformCon>
				<PlatformCon :data="data2"></PlatformCon>
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
			title: 'PC客户端下载',
			description: []
		}
	];

	let data1 = {
		title:'iPad交易平台有何优势',
		description: ['iPad能够全面管理交易账户，发出所有类型的订单。不管您身在何地、在做什么，都能接触外汇行情。综 合走势图助您分析外汇报价的当前动态，交易历史为您呈现之前的交易记录，强大的交易系统帮您发出新交易。完美融入您的繁忙生活。'],
		detail: [ '随时随地交易', '所有类型订单', '查看账户详细信息', '发出市场订单、限价挂单和止损挂单', '建仓、平仓、对冲', '执行止损单和限价单' ]
	};

	let data2 = {
		title: '如何使用MT4 iPad客户端',
		description: ['使用与您在PC或者Mac系统上相同的账号和密码登陆到MT4 iPad客户端。', '步骤：'],
		detail: [ '点击下面按钮下载终端', '下载完成后运行文件', '第一次运行程序，您会看到登录窗口', '输入真实账户或模拟账户的注册信息。' ],
		imgUrl: '../../../static/img/mt4-android.png',
		btn: true
	}

	export default{
		data(){
			return {
				content: content,
				src: {
					src: '../../../static/img/21-1.jpg',
					path: '/change/pc',
					isChange: false
				},
				data1: data1,
				data2: data2
			}
		},
		components: {
			ImgBox,
			MainView,
			PlatformCon
		}
	}
</script>