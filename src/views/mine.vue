<template>
	<div id="mine">
		<!--标注的地方如无特殊说明即为数据插入的地方-->
		<!--插入组件MyWorld,插入vant插件,项目合并时记得添加组件信息-->
		<div id="mine_home" ref="mine_home">
			<div class="mine_header">
				<div class="mine_header_left">
					<!--头像:数据可变换-->
					<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576336671336&di=2ebfbbf2d905993b6b7f8a2697083e12&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Ffashion%2Fcrawl%2F728%2Fw550h978%2F20191118%2F2ec5-iipztfe5698591.jpg" />
				</div>
				<div class="mine_header_center">
					<p>
						<!--账号-->t_1506611275820_0451</p>
					<p class="nc">昵称:
						<!--昵称--><span class="nicheng">九条命(***)</span>
					</p>
					<p>
						<a class="gerenzhuye" href="#">个人主页></a>
					</p>
				</div>
				<!--设置:路由-->
				<div class="mine_shezhi" @click="jump_mine_slidebar">
					<a href="#">
						<svg class="icon" aria-hidden="true">
							<use xlink:href="#icon-shezhi"></use>
						</svg>
					</a>

				</div>
			</div>
			<div class="mine_container">
				<div class="mine_banner">
					<!--三个新路由-->
					<li>
						<a href="#">0超赞</a>
					</li>
					<li>
						<a href="#">0关注</a>
					</li>
					<li>
						<a href="#">1粉丝</a>
					</li>
				</div>
				<div class="mine_sale">
					<!--<MyWorld>
					<template v-slot:todo>mytodo</template>
					<template v-slot:Youto>myYouto</template>
				</MyWorld>-->
					<h5>卖在闲鱼</h5>
					<div class="sale_container">
						<a href="#">
							<div class="sale_min">
								<p class="sale_min_img">
									<svg class="icon" aria-hidden="true">
										<use xlink:href="#icon-wofabude"></use>
									</svg>
								</p>
								<p class="sale_min_section"><span>我发布的1</span></p>
							</div>
						</a>
						<a href="#">
							<div class="sale_min">
								<p class="sale_min_img">
									<svg class="icon" aria-hidden="true">
										<use xlink:href="#icon-jinqian"></use>
									</svg>
								</p>
								<p class="sale_min_section"><span>我卖出的0</span></p>
							</div>
						</a>
						<a href="#">
							<div class="sale_min">

							</div>
						</a>
					</div>
					<div class="sale_foot">
						<svg class="icon" aria-hidden="true">
							<use xlink:href="#icon-zhimaxinyongtianchong-blue"></use>
						</svg>
						<span class="sale_span">授权芝麻信用，宝贝更快卖出</span>
						<a href="#">去授权</a>
					</div>
				</div>
				<div class="buy">
					<h5>买在闲鱼</h5>
					<div class="sale_container">
						<a href="#">
							<div class="sale_min">
								<p class="sale_min_img">
									<svg class="icon" aria-hidden="true">
										<use xlink:href="#icon-mai-"></use>
									</svg>
								</p>
								<p class="sale_min_section"><span>我买到的0</span></p>
							</div>
						</a>
						<a href="#">
							<div class="sale_min">
								<p class="sale_min_img">
									<svg class="icon" aria-hidden="true">
										<use xlink:href="#icon-shoucang"></use>
									</svg>
								</p>
								<p class="sale_min_section"><span>我收藏的0</span></p>
							</div>
						</a>
						<a href="#">
							<div class="sale_min">
								<p class="sale_min_img">
									<svg class="icon" aria-hidden="true">
										<use xlink:href="#icon-x"></use>
									</svg>
								</p>
								<p class="sale_min_section"><span>我租到的0</span></p>
							</div>
						</a>
					</div>
				</div>
				<div class="play">
					<h5>玩在闲鱼</h5>
					<div class="play_container">
						<div class="play_container_top">
							<a href="#">
								<div class="sale_min">
									<p class="sale_min_img">
										<svg class="icon" aria-hidden="true">
											<use xlink:href="#icon--wodexianyubi"></use>
										</svg>
									</p>
									<p class="sale_min_section"><span>闲鱼币</span></p>
								</div>
							</a>
							<a href="javascript:void(0);">
								<div class="sale_min">
									<p class="sale_min_img">
										<svg class="icon" aria-hidden="true">
											<use xlink:href="#icon--wodeyutang"></use>
										</svg>
									</p>
									<p class="sale_min_section"><span>我的鱼塘</span></p>
								</div>
							</a>
							<a href="#">
								<div class="sale_min">
									<p class="sale_min_img">
										<svg class="icon" aria-hidden="true">
											<use xlink:href="#icon-icon_wodetiezi"></use>
										</svg>
									</p>
									<p class="sale_min_section"><span>我的帖子</span></p>
								</div>
							</a>
							<a href="#">
								<div class="sale_min">
									<p class="sale_min_img">
										<svg class="icon" aria-hidden="true">
											<use xlink:href="#icon-jinbidefuben"></use>
										</svg>
									</p>
									<p class="sale_min_section"><span>边逛边赚钱</span></p>
								</div>
							</a>
						</div>
						<div class="play_container_top">
							<a href="#">
								<div class="sale_min">
									<p class="sale_min_img">
										<svg class="icon" aria-hidden="true">
											<use xlink:href="#icon-zhuanqian"></use>
										</svg>
									</p>
									<p class="sale_min_section"><span>天天赚钱</span></p>
								</div>
							</a>
							<a href="#">
								<div class="sale_min">
									<p class="sale_min_img">
										<svg class="icon" aria-hidden="true">
											<use xlink:href="#icon-jinlinbaoxiang_icon"></use>
										</svg>
									</p>
									<p class="sale_min_section"><span>百币夺宝</span></p>
								</div>
							</a>
							<a href="#">
								<div class="sale_min">
									<p class="sale_min_img">
										<svg class="icon" aria-hidden="true">
											<use xlink:href="#icon-biaodetubiao-"></use>
										</svg>
									</p>
									<p class="sale_min_section"><span>助卖宝卡</span></p>
								</div>
							</a>
							<a href="#">
								<div class="sale_min">
									<p class="sale_min_img">
										<svg class="icon" aria-hidden="true">
											<use xlink:href="#icon-songxiaoyang"></use>
										</svg>
									</p>
									<p class="sale_min_section"><span>参与的免费送</span></p>
								</div>
							</a>
						</div>

					</div>
					<div class="sale_foot">
						<svg class="icon" aria-hidden="true">
							<use xlink:href="#icon--wodexianyubi"></use>
						</svg>
						<span class="sale_span">已签到0天，连签7天得550闲鱼币</span>
						<a href="#">去签到</a>
					</div>
				</div>
				<div class="else">
					<h5>其他工具</h5>
					<div class="else_container">
						<div class="play_container_top">
							<a href="#">
								<div class="sale_min">
									<p class="sale_min_img">
										<svg class="icon" aria-hidden="true">
											<use xlink:href="#icon-wodezuji"></use>
										</svg>
									</p>
									<p class="sale_min_section"><span>我的足迹</span></p>
								</div>
							</a>
							<a href="#">
								<div class="sale_min">
									<p class="sale_min_img">
										<svg class="icon" aria-hidden="true">
											<use xlink:href="#icon-zhaoshangguanli"></use>
										</svg>
									</p>
									<p class="sale_min_section"><span>认证招商</span></p>
								</div>
							</a>
							<a href="#">
								<div class="sale_min">
									<p class="sale_min_img">
										<svg class="icon" aria-hidden="true">
											<use xlink:href="#icon-gongyue"></use>
										</svg>
									</p>
									<p class="sale_min_section"><span>安全中心</span></p>
								</div>
							</a>
							<a href="#">
								<div class="sale_min">
									<p class="sale_min_img">
										<svg class="icon" aria-hidden="true">
											<use xlink:href="#icon-wode-kefuzhongxin"></use>
										</svg>
									</p>
									<p class="sale_min_section"><span>客服中心</span></p>
								</div>
							</a>
						</div>
						<div class="play_container_top">
							<a href="#">
								<div class="sale_min">
									<p class="sale_min_img">
										<svg class="icon" aria-hidden="true">
											<use xlink:href="#icon-zhuanqian"></use>
										</svg>
									</p>
									<p class="sale_min_section"><span>天天赚钱</span></p>
								</div>
							</a>
							<a href="#">
								<div class="sale_min">
									<p class="sale_min_img">
										<svg class="icon" aria-hidden="true">
											<use xlink:href="#icon-jinlinbaoxiang_icon"></use>
										</svg>
									</p>
									<p class="sale_min_section"><span>百币夺宝</span></p>
								</div>
							</a>
							<a href="#">
								<div class="sale_min">
									<p class="sale_min_img">
										<svg class="icon" aria-hidden="true">
											<use xlink:href="#icon-biaodetubiao-"></use>
										</svg>
									</p>
									<p class="sale_min_section"><span>助卖宝卡</span></p>
								</div>
							</a>
							<a href="#">
								<div class="sale_min">
									<p class="sale_min_img">
										<svg class="icon" aria-hidden="true">
											<use xlink:href="#icon-songxiaoyang"></use>
										</svg>
									</p>
									<p class="sale_min_section"><span>参与的免费送</span></p>
								</div>
							</a>
						</div>
						<div class="play_container_top">
							<a href="#">
								<div class="sale_min">
									<p class="sale_min_img">
										<svg class="icon" aria-hidden="true">
											<use xlink:href="#icon-anquanzhongxin"></use>
										</svg>
									</p>
									<p class="sale_min_section"><span>咸鱼公约</span></p>
								</div>
							</a>
							<a href="#">
								<div class="sale_min">
									<p class="sale_min_img">
										<svg class="icon" aria-hidden="true">
											<use xlink:href="#icon-shirentonghangzheng"></use>
										</svg>
									</p>
									<p class="sale_min_section"><span>实人通行证</span></p>
								</div>
							</a>
							<a href="#">
								<div class="sale_min">
									<p class="sale_min_img">
										<svg class="icon" aria-hidden="true">
											<use xlink:href="#icon-huiyuanquanyi"></use>
										</svg>
									</p>
									<p class="sale_min_section"><span>物流权益</span></p>
								</div>
							</a>
							<a href="#">
								<div class="sale_min">
									<p class="sale_min_img">
										<svg class="icon" aria-hidden="true">
											<use xlink:href="#icon-xianyuFamily"></use>
										</svg>
									</p>
									<p class="sale_min_section"><span>咸鱼family</span></p>
								</div>
							</a>
						</div>
						<div class="contt">
							<a href="#" v-for="(i,ind) in list" :Key="ind">
								<div class="sale_min">
									<p class="sale_min_img">
										<svg class="icon" aria-hidden="true">
											<use :xlink:href="'#'+i.icon"></use>
										</svg>
									</p>
									<p class="sale_min_section"><span>{{i.title}}</span></p>
								</div>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div id="min_sidebar" ref="min_sidebar">
			<van-nav-bar title="设置" left-text=""  left-arrow @click-left="onClickLeft"/>
			<div class="content">
				<li v-for="(i,idx) in min_sidebar_list.no1" :key="idx"><p>{{i.title}}</p><span>{{i.icon}}</span></li>
			</div>
			<div class="content">
				<li v-for="(i,idx) in min_sidebar_list.no2" :key="idx"><p>{{i.title}}</p><span>{{i.icon}}</span></li>
			</div>
			<div class="content">
				<li v-for="(i,idx) in min_sidebar_list.no3" :key="idx"><p>{{i.title}}</p><span>{{i.icon}}</span></li>
			</div>
			<div class="content">
				<li v-for="(i,idx) in min_sidebar_list.no4" :key="idx"><p>{{i.title}}</p><span>{{i.icon}}</span></li>
			</div>
			<div class="footer">
				<mt-button type="primary" size="large">退出登录</mt-button>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				list: {
					no1: [{
						name: 'zhangsan',
						icon: "ss"
					}, {
						name: 'zhangsan',
						icon: "dss"
					}],
					no2: [{
						name: 'zhangsan',
						icon: "ss"
					}, {
						name: 'zhangsan',
						icon: "dss"
					}]
				},
				min_sidebar_list:{
					no1:[{title:"个人资料设置",icon:'>'},{title:"收货地址",icon:'>'},{title:"鱼塘设置",icon:'>'},{title:"黑名单",icon:'>'}],
					no2:[{title:"全局自动回复设置",icon:'>'},{title:"图片质量设置",icon:'>'},{title:"自动播放视频设置",icon:'>'},{title:"语音通话设置",icon:'>'},{title:"隐私",icon:'>'}],
					no3:[{title:"关于闲鱼",icon:'>'},{title:"把咸鱼分享给朋友",icon:'>'},{title:"咸鱼社交公约",icon:'>'},{title:"安全中心",icon:'>'}],
					no4:[{title:"清除缓存"},{title:"我的二维码"},{title:"退出关闭应用"}],
				}
			}
		},
		mounted() {
			console.log(this.list)
		},
		methods: {
			jump_mine_slidebar() {
				var num = 0
				var tab = document.getElementsByClassName('footer')
				this.$refs.min_sidebar.style.left = '0';
				this.$refs.mine_home.style.transform = 'translateX(10%)'
//				console.log(this.$refs.mine_home)
				console.log(tab)
				

				var time=setInterval(()=>{
					num++
					console.log(num)
					if(num==2){
						clearTimeout(time)
				this.$refs.mine_home.style.display = "none"
//				this.$refs.min_sidebar.style.display="block";
				
					}
				},100)
			},
			onClickLeft(){
				this.$refs.min_sidebar.style.left = '100%';
				this.$refs.mine_home.style.transform = 'translateX(0%)'
				this.$refs.mine_home.style.display = "block"
//				this.$refs.min_sidebar.style.display="none";
				
			},
		}
	}
</script>
<style lang="scss" scoped>
	body {
		background: red;
	}
	#mine {
		padding-bottom:300px; 
		position:relative ;
		#mine_home {
			position: absolute;
			width: 100%;
			transition: .5s;
			.icon {
				width: 1em;
				height: 1em;
				vertical-align: -0.15em;
				fill: currentColor;
				overflow: hidden;
			}
			.mine_header {
				background: yellow;
				min-height: 70px;
				padding: 8px;
			}
			.mine_header_left {
				width: 18%;
				float: left;
			}
			.mine_header_left img {
				width: 100%;
				height: 70px;
			}
			.mine_header_center {
				font-size: 16px;
				font-family: "微软雅黑";
				float: left;
			}
			.mine_shezhi {
				float: right;
			}
			.gerenzhuye {
				width: 80px;
				background: #fff;
				display: inline-block;
				margin: 8px;
				border-radius: 8px;
				text-align: center;
			}
			.gerenzhuye:hover {
				color: #000000;
			}
			.mine_container {
				width: 100%;
				padding: 8px 8px 43px;
				box-sizing: border-box;
				background: gainsboro;
				overflow: hidden;
			}
			.mine_banner {
				display: flex;
				background: #fff;
				padding: 12px;
				border-radius: 12px;
			}
			.mine_banner li {
				flex: 1;
				text-align: center;
				font-size: 16px;
				border-right: 1px gainsboro solid;
			}
			.mine_banner li a:hover {
				color: #000000;
			}
			.mine_banner li:nth-of-type(3) {
				border: none;
			}
			/*卖在咸鱼*/
			.sale_container {
				display: flex;
			}
			.sale_container a {
				flex: 1;
				text-align: center;
			}
			.sale_min {
				display: inline-block;
				text-align: center;
			}
			.sale_min_img svg {
				font-size: 32px;
			}
			.mine_container h5 {
				font-size: 24px;
				font-weight: normal;
				margin: 10px 0;
			}
			.sale_foot {
				width: 90%;
				margin: 0 auto;
				padding: 0 20px;
				box-sizing: border-box;
				background: rgb(244, 249, 253);
				line-height: 40px;
			}
			.sale_foot svg {
				margin-right: 10px;
			}
			.sale_foot span {
				color: #1899c1;
				font-size: 12px;
			}
			.sale_foot a {
				/*width: 168px;
		height: 78px;*/
				display: inline-block;
				height: 32px;
				font-size: 12px;
				line-height: 32px;
				padding: 0 15px;
				border: 1px solid #d2dfe5;
				border-radius: 22px;
				color: #46aee1;
				float: right;
				margin-top: 5px;
			}
			.mine_sale,
			.buy,
			.play,
			.else {
				background: #fff;
				border-radius: 12px;
				/*padding: 8px 0 8px 0;*/
			}
			h5 {
				padding: 10px;
				box-sizing: border-box;
			}
			.else {
				padding-bottom: 10px;
			}
			.play_container_top {
				display: flex;
				margin-bottom: 15px;
			}
			.play_container_top a {
				flex: 1;
				display: inline-block;
				text-align: center;
			}
			.sale_min_section {
				color: #737373;
				font-size: 12px;
			}
			.mint-tabbar {
				position: fixed;
			}
		}
		#min_sidebar {
			/*line-height: 500px;*/
			/*height: 1000px;*/
			width: 100%;
			background: #cccccc;
			position:relative;
			top: 0;
			left: 100%;
			transition: 0.5s;
			padding-top:45px;
			margin-bottom: 30px;

			.van-nav-bar{
				position: fixed;
				width: 100%;
				top: 0;
			}
			.content{
				font-size: 16px;
				background: #FFFFFF;
				margin-top: 10px;
				li{
					display: flex;
					line-height: 31px;
					border-bottom: 1px solid #cccccc;
					p{
						flex: 8;
						padding-left: 15px;
					}
					span{
						text-align: center;
						flex: 2;
					}
				}
			}
			.footer{
				padding: 15px;
				background: #FFFFFF;
				.mint-button--primary{
					background: red;
				}
			}
		}
		
	}
</style>