<template>
	<div>
		<ImgBox :num="0" :src1="src"></ImgBox>
		<MainView :items="content"></MainView>
		<!-- <CatalogView></CatalogView> -->
	</div>
</template>

<script>
	import ImgBox from './ImgBox'
	import MainView from './main'
	import CatalogView from './catalog'

	let content = [
		{
			title:'原油市场',
			description:[ '美股，即美国股市。原油现货市场是进行原油现货交易的市场。20世纪70年代以前，这些市场仅作为由各大原油公司相互调剂余缺和交换油品的手段，原油现货交易量只占世界原油贸易总量的5%以下，现货价格只反映长期合同超产的销售价格。因此，这个阶段的原油现货市场，称为“剩余市场”。', '70年代原油危机后，随着现货交易量及其在世界原油市场中所占比例逐渐增加，原油现货市场由单纯的剩余市场演变为反映原油的生产、炼制成本、利润的“边际市场” (Marginal Market)。现货价格也逐渐成为原油公司，原油消费国政府制定原油政策的重要依据。' ]
		},
		{
			title:'原油市场的特色',
			description:[ '现货原油投资作为一种全球性的投资品种，具有相对的稳定性和安全性。由于现货原油与世界接轨，影响其价格的因素是全球性的。', '主要特色：全天24小时连续交易，获利机会较多；全球市场无庄家操控；种类有限，无选择困难；双向交易，双向获利；行情易把握，具有避险保值的功能。' ]
		},
		{
			title:'当今中国原油市场',
			description:[ '原油投资在国际上属于相当成熟的市场投资，但在中国才刚刚起步，市场上对于原油的需求量是很大的，是与我们生活密不可分得使得原油价格波动比较大，主要取决于市场供求关系。造就了原油的国际投资热度，原油在国内市场差不多有两年时间之久了，刚刚属于刚刚起步的状态，在未来原油投资将优异的投资选择。' ]
		}
	];
	export default{
		components:{
			ImgBox,
			MainView,
			CatalogView
		},
		data(){
			return {
				content:content,
				src: '../../../static/img/1-1.jpg'
			}
		}
	}
</script>

<style></style>