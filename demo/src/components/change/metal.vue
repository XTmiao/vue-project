<template>
	<div>
		<ImgBox :num="2" :src3="src"></ImgBox>
		<MainView :items="content"></MainView>
		<!-- <CatalogView></CatalogView> -->
	</div>
</template>

<script>
	import ImgBox from './imgBox'
	import MainView from './main'
	import CatalogView from './catalog'

	let content = [
		{
			title: '贵金属市场',
			description: [ '随着世界金融危机爆发，全球经济持续动荡并不断的演变，通货膨胀的威胁不断的加剧，具有避险保值性的贵金属投资呈现出爆发式的增长趋势。相对于传统的证券、期货、房产投资和银行储蓄，贵金属具有非常好的变现性和保值性，可以抵御通货带来的币值变动和物价上涨。投资贵金属一直是被看做未来最好的投资选择。' ]
		},
		{
			title: '贵金属市场的特色',
			description: [ '众所周知贵金属具有避险保值、抵抗通胀的功能。而黄金贵金属还具备其他的优势：价值久远、可以传承世袭，这也是老百姓把黄金白银作为压箱底的资产留给子孙的一个根本原因；无税收负担，国内外均对黄金税收有减免政策，没有房产股票交易时发生的印花税、契税等，也不征收遗产税；公认的抵押品种，在全世界流通自由、抵押方便、可随时兑现资产；产权转移便利，无需过户认证等手续；全天24小时连续的市场，公开透明，市场容量大，极难出现庄家操控，价格公平公正，便利灵活，选择余地大，风险可控。' ]
		},
		{
			title: '当今中国贵金属市场',
			description: [ '中国已成为世界上第四大黄金生产国，第三大黄金消费国，但我国人均年黄金消费量仅约0.26克，远远低于0.7克的世界平均水平，这反映出中国黄金投资市场潜力巨大。目前国内民众投资黄金的意识正在被唤醒，中国黄金市场在逐步开放后必将对全球黄金市场格局产生深远影响。我国黄金市场改革起始于1993年，这一年国务院63号函确立了黄金的市场化方向。2001年4月，当时的中国人民银行行长戴相龙宣布取消黄金“统购统配”的计划管理体制，在上海组建黄金交易所。2002年10月上海黄金交易所开业，标志着中国的黄金行业开始走向市场化。据初步统计，上海金交所会员单位年产金量约占全国的75%;用金量占全国的80%;冶炼能力占全国的90%。这些都体现了黄金市场化趋势的推进。', '估计今后几年中国的黄金消费量有望大幅增长至500吨，这对国际黄金市场的价格将产生重大影响。' ]
		}
	]
	export default{
		components:{
			ImgBox,
			MainView,
			CatalogView
		},
		data(){
			return {
				content: content,
				src: '../../../static/img/3-1.jpg'
			}
		}
	}
</script>

<style scoped>
	/*@import '../../../static/css/change.css';*/
</style>