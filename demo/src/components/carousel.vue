<template>
	<div class="Carousel">
		<div id="slidershow" class="carousel slide" data-ride="carousel" data-interval="5000">
	    	<ol class="carousel-indicators">
	        	<li class="active" data-target="#slidershow" data-slide-to="0"></li>
	        	<li data-target="#slidershow" data-slide-to="1"></li>
	        	<li data-target="#slidershow" data-slide-to="2"></li>
	    	</ol>
	    	<div class="carousel-inner">
	        	<div class="item  active">
	            		<img src="../../static/img/banner_1.jpg" class="img">
	            		<div class="carousel-caption">
	            			<span class="hr_left"></span><span class="hr_right"></span>
	                		<h3>我们希望你成功</h3>
	                		<a href="javascript:;" class="set">建立详细账户</a>
	            		</div>
	        	</div>
	        	<div class="item">
	            		<img src="../../static/img/banner_2.jpg" class="img">
	            		<div class="carousel-caption" style="bottom:26%!important;">
	            			<span class="hr_left"></span><span class="hr_right"></span>
	                		<h3>交易订单直接到国际银行</h3>
	                		<p>闪电式交易</p>
	                		<p>可靠的流通性</p>
	                		<p>15层订单执行深度</p>
	                		<a href="javascript:;" class="set" style="top: 150px!important;">建立详细账户</a>
	            		</div>
	        	</div>
	        	<div class="item">
	            		<img src="../../static/img/banner_3.jpg" class="img">
	            		<div class="carousel-caption">
	            			<span class="hr_left"></span><span class="hr_right"></span>
	                		<h3>随时随地轻松交易，把握机会</h3>
	                		<a href="javascript:;" class="set">建立详细账户</a>
	            		</div>
	        	</div>
	        </div>
	    	<a class="left carousel-control" href="#slidershow" role="button" data-slide="prev">
	        	<span class="glyphicon glyphicon-chevron-left"></span>
	    	</a>
	    	<a class="right carousel-control" href="#slidershow" role="button" data-slide="next">
	        	<span class="glyphicon glyphicon-chevron-right"></span>
	    	</a>
		</div>
	</div>
</template>

<script>
	import '../../static/js/jQuery';
	import '../../static/js/bootstrap';
	export default{
		
	}
</script>

<style scoped>
	@import '../../static/css/bootstrap.css';
	@import '../../static/css/Carousel.css';
	#slidershow{
		position: absolute;
		left: 0;
		top: 0;
	}
</style>