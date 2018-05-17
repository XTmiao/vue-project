<template>
	<div>
		<ImgBox :num="4" :src5="src"></ImgBox>
		<MainView :items="content"></MainView>
	</div>
</template>

<script>
	import ImgBox from './ImgBox'
	import MainView from './main'

	let content = [
		{
			title: '美股市场',
			description: [ '美股，即美国股市。', '广义：代表全球股市。开盘时间是每周一至周五，美国东部时间 9:30-16:00，国内时间是，美国夏令时是中国21：30－4：00，非夏令时是22：30－5：00 。与A股和港股不同，美股交易没有“手”的概念，美股交易的最小单位是1股。' ]
		},
		{
			title: '美股市场的特色',
			description: [ '美股没有涨幅限制；T+0交易； 门槛低；美股相对A股要更加成熟、正规，监管方面也更加严格，是非常不错的选择。' ]
		}
	];
	export default{
		components:{
			ImgBox,
			MainView
		},
		data(){
			return {
				content: content,
				src: '../../../static/img/5-1.jpg'
			}
		}
	}
</script>

<style></style>