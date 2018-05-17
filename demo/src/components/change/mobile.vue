<template>
	<div>
		<ImgBox :src2="src"></ImgBox>
		<MainView :items="content">
			<div slot="diff">
				<PlatformCon :data="data" style="margin-top: -70px;"></PlatformCon>
				<MainView :item="title">
					<div slot="diff">
						<PlatformCon :data="dataC"></PlatformCon>
					</div>
				</MainView>
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
			title: 'iphone客户端',
			description: []
		}
	];

	let data = {
		title: 'iPhone交易平台有何优势',
		description: [ 'iPhone能够全面管理交易账户，发出所有类型的订单。不管您身在何地、在做什么，都能接触外汇行情。 综合走势图助您分析外汇报价的当前动态，交易历史为您呈现之前的交易记录，强大的交易系统帮您发出新交易。完美融入您的繁忙生活。' ],
		detail: [ '随时随地交易', '实时更新报价', '走势图（即时、1分钟、5分钟、15分钟、30分钟、60分钟、日）', '设置走势图指标' ]
	};

	let title = [
		{
			title: '安卓客户端',
			description: []
		}
	];

	let dataC = {
		title: 'MT4 安卓交易平台有何优势',
		description: ['MetaTrader4 安卓功能齐全，配备了交易订单、交易历史、互动图表功能，支持多种移动设备，轻松随时随地交易。不 管您身在何地、在做什么，都能接触外汇行情。综合走势图助您分析外汇报价的当前动态，交易历史为您呈现之前的交易记录，强大的交易系统帮您发出新交易。完美融入您的繁忙生活。'],
		detail: [ '查看账户详细信息', '发出市场订单、限价挂单和止损挂单', '建仓、平仓、对冲', '执行止损单和限价单', '更改订单数量', '完全移除订单', '实时更新报价', '走势图（即时、1分钟、5分钟、15分钟、30分钟、60分钟、日）', '设置走势图指标' ]
	}

	export default{
		data(){
			return {
				content: content,
				src: {
					src: '../../../static/img/20-1.jpg',
					path: '/change/mobile',
					isChange: false
				},
				data: data,
				title: title,
				dataC: dataC
			}
		},
		components: {
			ImgBox,
			MainView,
			PlatformCon
		}
	}
</script>