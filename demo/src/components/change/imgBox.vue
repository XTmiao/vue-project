<template>
	<div id="imgBox">
		<a class="box">
			<router-link tag="img" class="one" :src="src1" to="/change/oil"></router-link>
			<!-- <img :src="src1" class="one"> -->
			<!-- <img src="../../../static/img/1-1.jpg" class="two"> -->
		</a>
		<a class="box">
			<router-link tag="img" class="one" :src="src2" to="/change/wai"></router-link>
			<!-- <img :src="src2" class="one"> -->
		</a>
		<a class="box">
			<router-link tag="img" class="one" :src="src3" to="/change/metal"></router-link>
			<!-- <img :src="src3" class="one"> -->
			<!-- <img src="../../../static/img/3-1.jpg" class="two"> -->
		</a>
		<a class="box">
			<router-link tag="img" class="one" :src="src4" to="/change/futures"></router-link>
			<!-- <img :src="src4" class="one"> -->
			<!-- <img src="../../../static/img/4-1.jpg" class="two"> -->
		</a>
		<a class="box">
			<router-link tag="img" class="one" :src="src5" to="/change/stock"></router-link>
			<!-- <img :src="src5" class="one"> -->
			<!-- <img src="../../../static/img/5-1.jpg" class="two"> -->
		</a>
	</div>
</template>
<script>
	export default{
		props:{
			src1:{  
				type:String,
				default:"../../../static/img/1-0.jpg"
			},
			src2:{
				type:String,
				default:"../../../static/img/2-0.jpg"
			},
			src3:{
				type:String,
				default:"../../../static/img/3-0.jpg"
			},
			src4:{
				type:String,
				default:"../../../static/img/4-0.jpg"
			},
			src5:{
				type:String,
				default:"../../../static/img/5-0.jpg"
			},
			num:{
				type:Number //图片的位置，从0开始
			}
		}, 
		mounted(){
			this.loading( this.num );
		},
		methods:{
			/*elContains( a, b ){   //判断a是否包含b    true表示包含
				return a.contains ? a != b && a.contains( b ) : !!( a.compareDocumentPosition( b ) & 16 );
			},
			loading1(){
				let _this = this;
				let arrOne = $('.one');
				let arrA = $('#imgBox .box');

				for( let i=0; i<arrOne.length-1; i++ ){
					arrA[i].onmouseover = function(e){
						var a = this, b = e.relatedTarget;
						if( !_this.elContains( a,b ) && a!=b ){
							arrOne[i].style.display = 'none';
							console.log(1)
						}
						
						
					};
					arrA[i].onmouseout = function(e){
						var a = this, b = e.relatedTarget;
						if( !_this.elContains( a,b ) && a!=b ){
							arrOne[i].style.display = 'block';
							console.log(2)
						}
					}
				}
			},*/
			/*loading2(){
				let box = $('.box');
				if(typeof(HTMLElement) != "undefined"){ 
					HTMLElement.prototype.contains = function(obj) 
					{ 
						while(obj != null && typeof(obj.tagName) != "undefind") 
						{ 
							if(obj == this) 
							return true; 
							obj = obj.parentNode; 
						} 
						return false; 
					}; 
				} 
				for( let i=0; i<box.length; i++ ){
					move( box[i] )
				}
				function move( box ){
					box.onmouseover = function(e){
						//if(!this.contains(event.fromElement)){
							let one = this.getElementsByTagName('img')[0];
							let two = this.getElementsByTagName('img')[1];
							one.style.display = 'none';
							two.style.display = 'block';
							//console.log(1)
						//} 
						
						
					};
					box.onmouseout = function(e){
						//console.log(111)
						//if(!this.contains(event.fromElement)){
							let one = this.getElementsByTagName('img')[0];
							let two = this.getElementsByTagName('img')[1];

							one.style.display = 'block';
							two.style.display = 'none';
							//console.log(2)
						//} 
					}
				}
			}*/
			loading( n ){
				let aImg = $('.one');
				
				for( let i=0;i<aImg.length;i++ ){
					if( i != n ){
						move(aImg[i],i)
						//console.log(i)
					}
				};
				
				function move(oImg,i){
					oImg.onmousemove=function(){
						oImg.src="../../../static/img/"+(i+1)+"-1.jpg";
					};
					oImg.onmouseout=function(){
						oImg.src="../../../static/img/"+(i+1)+"-0.jpg";
					};
				}
			}
		}
	}
</script>
<style>
	@import '../../../static/css/change.css';
</style>