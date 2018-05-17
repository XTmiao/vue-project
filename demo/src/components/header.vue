<template>
	<header>
		<div class="zhezhao"></div>
		<div class="header_logo"><img src="img/logo.png" alt=""></div>
		<ul class="header_ul">
			<!-- <li class="header_li"><a href="javascript:;">首页</a></li> -->
			<router-link tag="li" to="/" class="header_li">
				<a>首页</a>
			</router-link>
			<li class="header_li"><a href="javascript:;">关于我们</a></li>
			<li class="header_li"><a href="javascript:;">在线交易</a></li>
			<li class="header_li"><a href="javascript:;">教育资源</a></li>
			<li class="header_li"><a href="javascript:;">教育工具</a></li>
			<li class="header_li"><a href="javascript:;">客户支持</a></li>
		</ul>
		<div class="header_btn">
			<input type="button" value="登录">
			<input type="button" value="注册">
		</div>
		<div class="header_hidden">
			<div class="hidden_div">
				<ul class="hidden_ul">
					<li class="header_hid_title"><h3>我们的优势</h3></li>
					<!-- <li><a href="##">公司简介</a></li>
					<li><a href="##">寄语客户</a></li>
					<li><a href="##">EAST LODGE优势</a></li> -->
					<router-link tag="li" to="/about">
						<a>客户支持</a>
					</router-link>
					<router-link tag="li" to="/about">
						<a>寄语客户</a>
					</router-link>
					<router-link tag="li" to="/about">
						<a>EAST LODGE优势</a>
					</router-link>
				</ul>
			</div>
			<div class="hidden_div">
				<ul class="hidden_ul">
					<li class="header_hid_title"><h3>交易产品</h3></li>
					<!-- <li><a href="change/wai">外汇品种</a></li>
					<li><a href="change/gui">贵金属</a></li>
					<li><a href="change/yuan">原油</a></li>
					<li><a href="change/qi">期货合约</a></li>
					<li><a href="change/mei">美股</a></li> -->
					<router-link to="/change/wai" tag="li">
						<a>外汇品种</a>
					</router-link>
					<router-link to="/change/metal" tag="li">
						<a>贵金属</a>
					</router-link>
					<router-link to="/change/oil" tag="li">
						<a>原油</a>
					</router-link>
					<router-link to="/change/futures" tag="li">
						<a>期货合约</a>
					</router-link>
					<router-link to="/change/stock" tag="li">
						<a>美股</a>
					</router-link>
				</ul>
				<ul class="hidden_ul">
					<li class="header_hid_title"><h3>交易账户</h3></li>
					<!-- <li><a href="change/zhanghu">账户类型</a></li>
					<li><a href="change/kaihu">开户流程</a></li>
					<li><a href="change/ganggan">杠杆及保证金</a></li> -->
					<router-link to="/account/account" tag="li">
						<a>账户类型</a>
					</router-link>
					<router-link to="/account/flow" tag="li">
						<a>开户流程</a>
					</router-link>
					<router-link to="/account/lever" tag="li">
						<a>杠杆及保证金</a>
					</router-link>
				</ul>
			</div>
			<div class="hidden_div">
				<ul class="hidden_ul">
					<li class="header_hid_title"><h3>投资研究</h3></li>
					<!-- <li><a href="educate/education">交易策略</a></li> -->
					<router-link to="/educ/strategy" tag="li">
						<a>交易策略</a>
					</router-link>
				</ul>
				<ul class="hidden_ul">
					<li class="header_hid_title"><h3>学习中心</h3></li>
					<!-- <li><a href="educate/educate_detail">学习资料</a></li> -->
					<router-link to="/educ/src" tag="li">
						<a>学习资料</a>
					</router-link>
				</ul>
			</div>
			<div class="hidden_div">
				<ul class="hidden_ul">
					<li class="header_hid_title"><h3>PC客户端</h3></li>
					<!-- <li><a href="javascript:;">windows客户端</a></li> -->
					<router-link to="/platform/pc" tag="li">
						<a>window客户端</a>
					</router-link>
				</ul>
				<ul class="hidden_ul">
					<li class="header_hid_title"><h3>手机客户端</h3></li>
					<!-- <li><a href="javascript:;">安卓客户端</a></li>
					<li><a href="javascript:;">iphone客户端</a></li> -->
					<router-link to="/platform/mobile" tag="li">
						<a>安卓客户端</a>
					</router-link>
					<router-link to="/platform/mobile" tag="li">
						<a>iPhone客户端</a>
					</router-link>
				</ul>
				<ul class="hidden_ul">
					<li class="header_hid_title"><h3>平板电脑客户</h3></li>
					<!-- <li><a href="javascript:;">ipad客户端</a></li>
					<li><a href="javascript:;">安卓平板电脑客户端</a></li> -->
					<router-link to="/platform/tablet" tag="li">
						<a>ipad客户端</a>
					</router-link>
					<router-link to="/platform/tablet" tag="li">
						<a>安卓平板客户端</a>
					</router-link>
				</ul>
			</div>
			<div class="hidden_div">
				<ul class="hidden_ul">
					<li class="header_hid_title"><h3>联系我们</h3></li>
					<!-- <li><a href="customer/">在线联系</a></li> -->
					<router-link to="/customer/contact" tag="li">
						<a>在线联系</a>
					</router-link>
				</ul>
				<ul class="hidden_ul">
					<li class="header_hid_title"><h3>FAQ</h3></li>
					<!-- <li><a href="customer/">常见问题</a></li> -->
					<router-link to="/customer/FAQ" tag="li">
						<a>常见问题</a>
					</router-link>
				</ul>
				<ul class="hidden_ul">
					<li class="header_hid_title"><h3>意见反馈</h3></li>
					<!-- <li><a href="customer/opinion">意见反馈</a></li> -->
					<router-link to="/customer/opinion" tag="li">
						<a>意见反馈</a>
					</router-link>
				</ul>
			</div>
		</div>
	</header>
</template>

<script>
	export default{
		mounted(){
			this.fn()
		},
		methods:{
			fn(){
				var timer = null;

				$('.header_li a').mouseover(function(){
					var index = $(this).parent().index()-1;

					if( index==-1 ){
						return;
					}

				
					$('.hidden_div').eq(index).css('display','block').siblings().css( 'display','none' );
					
				}).mouseout(function(){
					var index = $(this).parent().index()-1;

					timer = setTimeout( function(){
						$('.hidden_div').eq(index).css('display','none');
						$('.hidden_div').hover(function(){
							$(this).css( 'display','block' );
							clearTimeout(timer)
						},function(){
							$(this).css( 'display','none' );
						});
					},500 );
			
				});

				$(window).scroll(function(){
					if( $(this).scrollTop() == 0 ){
						$('.zhezhao').css( 'opacity',0 );
					}else{
						$('.zhezhao').css( 'opacity',0.5 );
					}
				})
			}
		}
	}
</script>

<style scoped>
	/* @import '../../static/css/index.css';   
	header{height: 78px;position: fixed;top: 0;left: 0;right: 0; padding-left:30px;padding-right: 30px;z-index: 10000;}
	.zhezhao{width: 100%;height: 100%;background:#000;position: absolute;left: 0;opacity: 0;transition:.3s;}
	.header_logo{width:195px;height: 78px;background: url('../assets/img/logo.png') no-repeat;margin-right: 20px;position: absolute;left: 60px;}
	.header_ul{list-style: none;height: 50px;line-height: 50px;width: 50%;float: left;display: -webkit-box;display: flex;color: #fff;position: absolute;left: 300px;top:13px;}
	.header_ul .header_li{float: left;-webkit-box-flex:1;flex-grow:1;font-size: 15px;}
	.header_ul .header_li a{display: inline-block;color: #fff;}
	.header_ul .header_li a:hover{border-bottom: 2px solid #EAC671;}
	.header_btn{position: absolute;right: 150px;}
	.header_btn input{width: 55px;height: 39px;background: none;border:1px solid #EAC671;margin:20px 30px;border-radius: 5px;color: #fff;}
	.header_btn input:nth-of-type(1){margin-right:0; }
	.header_btn input:hover{background: #EAC671;color: #000;}
	
	.hidden_div{position: absolute;top: 79px;left: 245px;background: url(http://pic.yupoo.com/yerui420/G1pZSUtm/sR7S4.png) repeat-x;padding-bottom: 80px;height: 400px;display: none;}
	.hidden_div:nth-of-type(1){width: 400px;}
	.hidden_div:nth-of-type(2){width: 830px;}
	.hidden_div:nth-of-type(2) .hidden_ul:nth-of-type(2),.hidden_div:nth-of-type(3) .hidden_ul:nth-of-type(2){border-left: 1px solid #F2CC72;margin-left: 130px;padding-left: 160px;padding-bottom: 60px;}
	.hidden_div:nth-of-type(3){width: 830px;}
	.hidden_div:nth-of-type(4){width: 830px;}
	.hidden_div:nth-of-type(5){width: 830px;}
	.hidden_div:nth-of-type(4) .hidden_ul,.hidden_div:nth-of-type(5) .hidden_ul{width: 17%;margin-left:50px;margin-top: 80px;border-left:1px solid #F2CC72;padding-left: 70px;padding-bottom: 30px; }
	.hidden_div:nth-of-type(4) .hidden_ul:nth-of-type(1),.hidden_div:nth-of-type(5) .hidden_ul:nth-of-type(1){border: none;margin-left:40px;}
	
	.hidden_ul{list-style: none;margin-left: 150px;width: 120px;margin-top: 80px;float: left;}
	.hidden_ul li{height: 30px;line-height: 30px;color: #F2CC72;}
	.hidden_ul li h3{font-weight: normal;line-height: 20px;height: 20px;}
	.hidden_ul li a{color: #F2CC72;font-size: 14px;}
	.hidden_ul li a:hover{color: #fff;} */
</style>