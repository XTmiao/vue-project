<template>
	<div>
		<ImgBox :num="1" :src2="src"></ImgBox>
		<MainView :items="content"></MainView>
		<!-- <CatelogView></CatelogView> -->
	</div>
</template>

<script>
	//import '../../../static/js/change'
	import CatelogView from './catalog'
	import MainView from './main'
	import ImgBox from './imgBox'

	let content = [
		{
			title:'外汇市场',
			description:[ '外币（或外汇）交易指的是在线上外汇市场买入或卖出货币，也就是说，一种货币交易另外一种货币，以获得盈利。', '外汇市场是全球最大的投资市场之一，汇率关乎国家整体经济利益，汇率的走势来源于国家整体经济的 盛衰，不受个人财团、机构的操控。同时也是世界上流动性最高的市场，方便购买和出售金额资产而不大幅度地影响资产价格变动。目前外汇市场日成交额超过5万亿美元，其中80%的增长都是归功于通过金融机构操作的交易活动。主要的市场参与者包括各大中央银行、投资机构（大型投资证券和其他资产的机构组织）、外汇投机客、政府、金融服务提供商（比如投资银行、信托公司、保险公司）以及零售投资者。', '外汇市场的公平、公正使其成为金融市场最受欢迎的投资产品之一。' ]
		},
		{
			title:'外汇市场的特色',
			description:[ '随着经济全球化自由化，一体化的趋势，外汇交易作为国际金融领域的重要环节，特别是中国强大的外汇储备背景，中国的外汇市场就象股票市场一样，从无到有迅速发展起来，并具有非常大的发展空间。', '主要特色：双向交易，赚钱机会多；24小时全天候交易(对中国投资者最有利，外汇交易的黄金时间是欧洲和美洲白天市场最活跃点恰是北京时间的20点至24点）；投资少，起点低；市场公平公正，不易受人为操控；随时随地都可进行交易；杠杆效应，以小博大；货币种类有限，分析成本低；止损止盈，获利巨大。' ]
		},
		{
			title:'当今中国外汇市场',
			description:[ '美股，即美国股市。', '我国外汇市场是伴随着我国经济体制改革的深化和对外开放的不断扩展而产生并发展起来的。我国外汇市场发展首先面临的新形势是，随着我国市场开放的步伐进一步加快，外贸外资的总量、流向和结构都发生了显著变化，从而对市场外汇的供求产生影响。一方面表现为对外贸易和直接投资的规模大幅增加，外汇供求在数量、币种和交易主体上都达到了前所未有的规模；另一方面是外汇风险随着对外交往的扩大而增加，交易主体迫切需要通过外汇市场来规避和化解风险。其次，信息技术推动金融市场一体化发展。国际金融发展的一个新趋势就是经济和金融国际化推动着金融市场的一体化，因特网技术的发展将使一体化的进程不断加快，金融市场的电子化程度极大提高。' ]
		}
	]
	export default{
		components:{
			MainView,
			ImgBox,
			CatelogView
		},
		data(){
			return {
				content: content,
				src: '../../../static/img/2-1.jpg'
			}
		}
	}
</script>

<style scoped>
	@import '../../../static/css/change.css';
	/* #main{width: 80%; margin:30px auto;}
	#imgBox{width: 100%; margin:70px auto; height: 220px;}
	#imgBox a{display: inline-block; width: 11%; margin-right: 10%;}
	#imgBox .box img{width: 100%;}
	.two{display: none;}
	
	.L_content{width: 70%; float: left;}
	.content{width: 100%; margin-bottom: 100px;}
	.content h3{background: url(../../../static/img/bg.jpg) no-repeat; padding-left: 40px; height: 50px; line-height: 50px; font-weight: normal; font-size: 20px; margin-top: 45px; margin-bottom: 30px;}
	.content p{text-indent: 2em; line-height: 28px; margin-bottom: 10px; font-size: 15px;}
	
	.R_content{width: 12%; float: left; margin-left: 12%; margin-top: 80px; padding-left: 5%; height: 500px; border-left: 1px solid #999}
	.R_content dl dt{font-size: 23px; color: #F9DB89; line-height: 50px;}
	.R_content dl dd{font-size: 14px; line-height: 30px; cursor: pointer;}
	.R_content .btn{background: #F2CC72; border: none; width: 100%; height: 45px; margin-top: 30px; cursor: pointer;} */
	
</style>