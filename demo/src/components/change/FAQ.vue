<template>
	<div>
		<ImgBox :src2="src"></ImgBox>
		<MainView :items="content">
			<div slot="diff" class="diff">
				<ul>
					<li @click="change(0)" :class="{active:currentNum === 0}">关于帐号问题</li>
					<li @click="change(1)" :class="{active:currentNum === 1}">关于交易问题</li>
					<li @click="change(2)" :class="{active:currentNum === 2}">关于外汇市场问题</li>
					<li @click="change(3)" :class="{active:currentNum === 3}">关于MT4问题</li>
				</ul>
				<component1 :datas="current"></component1>
			</div>
		</MainView>
	</div>
</template>

<script>
	import ImgBox from './imgBoxThree2'
	import MainView from './main'
	import Component1 from './component1'

	let content = [];

	let questiones = [
		[
			[ '如何建立一个真实交易帐户，我需要提供哪些认证资料？', '登录您的客户专区，填写开户申请，并上传证明文件；完成所有步骤并提交，总部依次审核证明文件，一旦审核通过，您将收到客户专区的登录信息和交易账户的登录信息；您的申请步骤已经完成，接下来即可以登录客户专区入金。' ],
			[ '建立一个真实交易账户需要花多长时间？', '您如果正确填写完所有资料，所需时间不超过5分钟。' ]
		], 
		[
			[ 'Midas迈达斯提供培训吗?', 'Midas迈达斯官网有研究与教育页面，专门提供外汇差价合约知识。 可查看外汇入门页面, 另外我们会有定期的讲座，我们将会公布在网站上' ]
		],
		[
			[ '什么是外汇?', '外汇交易是全球最大的金融市场，日平均交易量达3万亿美元。外汇交易是买进一种货币的同时卖出另一种货币，因此它总是成对交易。外汇报价也是根据市场需求和供给的关系而不断浮动。' ],
			[ '我该怎样通过外汇交易赚钱?', '赚钱的方法一般就是低买高卖或者高卖低买，由于Midas-Forex提供了杠杆，从而使您可以用更少的钱而参与到外汇交易市场中去，赚取更多的利润。' ],
			[ '外汇是一个公平的市场吗?', '外汇被认为是地球上最公平、最透明的市场，最主要的原因就是因为大量的市场参与者，庞大的规模和交易数量，使得没有一个单一国家或银行能够完全控制货币的方向。' ]
		],
		[
			[ '我如何成为你们的客户?', '成为客户的步骤简便快捷，点击客户登录、注册Midas，填写表格，完成之后您的注册邮箱中将马上收到登录信息，就可以登录我们的会员专区' ]
		]
	]
	

	export default{
		data(){
			return {
				content: content,
				src: {
					src: '../../../static/img/28-1.jpg',
					path: '/educ/strategy',
					isChange: false
				},
				current: questiones[0],
				currentNum: 0
			}
		},
		components: {
			ImgBox,
			MainView,
			Component1
		},
		methods: {
			change(n){
				this.currentNum = n;
				this.current = questiones[n];
				//console.log(n)
			}
		}
	}
</script>

<style scoped>
	.diff{width: 100%; }
	.diff ul{background: url(../../../static/img/bg.jpg) no-repeat; padding-left: 20px; height: 50px; width: 100%;}
	.diff ul li{height: 50px; line-height: 50px; font-weight: normal; font-size: 20px; margin-top: 45px; margin-bottom: 30px; float: left; margin:0; background: #fff; padding-right: 25px; padding-left: 25px; background: #F2F2F2; cursor: pointer;}
	.active{background: #F2CC72!important;}
</style>