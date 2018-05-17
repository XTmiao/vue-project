<template>
	<div>
		<ImgBox :src1="src"></ImgBox>
		<MainView :items="content">
			<div slot="diff" class="main">
				<AccountData v-for="account in accounts" :account="account" style="margin-top:-70px; float:left"></AccountData>
				<button>建立真实账户</button>
			</div>
		</MainView>
	</div>
</template>

<script>
	import ImgBox from './imgBoxThree'
	import MainView from './main'
	import AccountData from './account_data'

	let content = [
		{
			title: '账户类型表',
			description: []
		}
	];
	 

	let accounts = [
		{
			name:'MT4账户',
			data: [
				[ '最低入金', '100USD' ],
				[ '点差', '1.4-1.6' ],
				[ '杠杆', '1:500' ],
				[ '挂单距离限制', '50' ],
				[ '最小下单手数', '0.01标准手' ]
			]
		},
		{
			name:'ECN账户',
			data: [
				[ '最低入金', '500,00USD' ],
				[ '点差', '0.1-0.4' ],
				[ '杠杆', '1:100' ],
				[ '挂单距离限制', '50' ],
				[ '最小下单手数', '0.01标准手' ]
			]
		}
	]

	export default{
		data(){
			return {
				content: content,
				src:{
					src: '../../../static/img/14-1.jpg',
					path: '/change/account',
					isChange: false
				},
				accounts: accounts
			}
		},
		components:{
			ImgBox,
			MainView,
			AccountData
		}
	}
</script>
<style scoped>
	button{background: #F1CC73; width: 180px; height: 60px; font-size: 20px; border: none; border-radius: 5px; margin-left: 36%; margin-top: -30px; margin-bottom: 100px;}
</style>