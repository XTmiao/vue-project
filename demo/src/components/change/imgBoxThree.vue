<template>
	<div id="imgBox">
		<a>
			<router-link tag="img" class="one" :src="src1.src" :to="src1.path"></router-link>
			<!-- <img :src="src1" class="one"> -->
			<!-- <img src="../../../static/img/1-1.jpg" class="two"> -->
		</a>
		<a>
			<router-link tag="img" class="one" :src="src2.src" :to="src2.path"></router-link>
			<!-- <img :src="src2" class="one"> -->
		</a>
		<a>
			<router-link tag="img" class="one" :src="src3.src" :to="src3.path"></router-link>
			<!-- <img :src="src3" class="one"> -->
			<!-- <img src="../../../static/img/3-1.jpg" class="two"> -->
		</a>
	</div>
</template>
<script>
	export default{
		props:{
			src1:{  
				type:Object,
				default:{
					src: "../../../static/img/14-0.jpg",
					path: '/account/account',
					isChange: true
				}
			},
			src2:{
				type:Object,
				default:{
					src: "../../../static/img/22-0.jpg",
					path: '/account/flow',
					isChange: true
				}
			},
			src3:{
				type:Object,
				default:{
					src: "../../../static/img/15-0.jpg",
					path: '/account/lever',
					isChange: true
				}
			}
		}, 
		mounted(){
			this.loading( [ this.src1, this.src2, this.src3 ] );
		},
		methods:{
			loading( arr ){
				let aImg = $('.one');

				let focus = arr.find( (item) => !item.isChange ).src.slice( 20, -6 );   //截取页面对应的图片的数字名称
				let arrNum = arr.map( (item) => item.src.slice( 20, -6 ) );  //arrNum用来存放每个img的数字名称
				//console.log( arrNum )
				
				for( let i=0;i<aImg.length;i++ ){
					if( arrNum[i] != focus ){
						move( aImg[i], arrNum[i] )
						//console.log(i)
					}
				};
				
				function move(oImg,i){
					oImg.onmousemove=function(){
						oImg.src="../../../static/img/"+i+"-1.jpg";
					};
					oImg.onmouseout=function(){
						oImg.src="../../../static/img/"+i+"-0.jpg";
					};
				}
			}
		}
	}
</script>
<style>
	@import '../../../static/css/change.css';
</style>