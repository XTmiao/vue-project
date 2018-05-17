<template>
	<div class="index_news">	
		<a href="javascript:;"><img src="../../static/img/news1.jpg" alt=""></a>
		<a href="javascript:;"><img src="../../static/img/news2.png" alt=""></a>
		<a href="javascript:;"><img src="../../static/img/news3.png" alt=""></a>
		<a href="javascript:;" class="news_btn Next"><</a>
		<a href="javascript:;" class="news_btn Prev">></a>
	</div>
</template>

<script>
	export default{
		mounted(){
			this.loading();
		},
		methods:{
			loading(){
				var Body = document.getElementsByTagName('body')[0];
				var indexNews = document.querySelector('.index_news'),
					aImg = indexNews.querySelectorAll('img'),
					btnNext = indexNews.querySelector('.Next'),
					btnPrev = indexNews.querySelector('.Prev');
				var now = 1;
				var timer = null;

				fn(now)
				timer = setInterval( function(){
					goNext();
				},5000 )

				btnPrev.onclick = function(){
					clearInterval(timer);
					goPrev()	
					timer = setInterval( function(){
						goNext();
					},5000 )
				} 
				btnNext.onclick = function(){
					clearInterval(timer);
					goNext()	
					timer = setInterval( function(){
						goNext();
					},5000 )
				} 

				function goNext(){
					now ++;
					if( now>aImg.length-1 )
						now = 0;
					fn(now);
				}
				function goPrev(){
					now -- ;
					if( now < 0 )
						now = aImg.length-1;
					fn(now);
				}
				function fn(n){
					for( var i=0; i<parseInt(aImg.length/2); i++ ){
						var Left = n - 1 - i;
						if( Left<0 ){
							Left += aImg.length;
						}
						aImg[Left].style.transform = aImg[Left].style.webkitTransform = 'translateX(' + (-250*(i+1)) + 'px) translateZ(' + (50-i*10) + 'px)';
						var Right = n + 1 +i;
						if( Right>aImg.length-1 )
							Right -= aImg.length;
						aImg[Right].style.transform = aImg[Right].style.webkitTransform = 'translateX(' + (250*(i+1)) + 'px) translateZ(' + (50-i*10) + 'px)';
					}
					aImg[n].style.transform = aImg[n].style.webkitTransform = 'translateZ(200px)';
					aImg[n].style.zIndex ++;
					aImg[n].style.boxShadow = '0 0 10px #fff';
				}
			}
		}
	}
</script>