<template>
	<div>
		<ImgBox :src3="src"></ImgBox>
		<MainView :items="content"></MainView>
	</div>
</template>
<script>
	import ImgBox from './imgBoxThree'
	import MainView from './main'

	let content = [
		{
			title: '关于杠杠',
			description: [ '通过使用交易杠杆，您可以放大交易账户中的交易头寸。交易杠杆金额以比率计算, 比如 50:1或者100：1 , 最高500倍杠杆', '交易杠杆', '根据您在EAST LODGE注册的账户类型，杠杆的比例可以从1:1到500:1。保证金需求在一个星期内不会改变，也不会在一夜之间或一个周末后扩大。在EAST LODGE您可以自由选择提高或降低您的已选杠杆。', '交易杠杆风险', '一方面，即使您的初始投资额相对较小，您也可以通过交易杠杆获取相当可观的利润。另一方面，如果您未能进行适当的风险管理，您的亏损也可能加剧。', 'EAST LODGE提供了交易杠杆的范围，能够帮助客户选择喜欢的风险水准。同时，我们也不建议交易杠杆接近500：1的交易，因为风险比较高。' ]
		},
		{
			title: '关于保证金',
			description: [ '保证金是交易操作期间投保任何信贷风险的抵押金额。', '保证金以头寸大小百分比计（比如：5%或1%），交易账户需要入金的唯一原因就是确保保证金足够。例如：保证金为2%时，价值1,000,000美元的头寸所需的保证金为20,000美元。' ]
		}
	]

	export default{
		data(){
			return {
				content: content,
				src: {
					src: '../../../static/img/15-1.jpg',
					path: '/change/lever',
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