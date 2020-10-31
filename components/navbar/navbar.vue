<template>
	<view class="navbar">
		<view class="navbar-fixed">
			<!-- 状态栏 -->
			<view :style="{height:statusBarHeight+'px'}"></view>
			<!-- 导航栏 -->
			<view class="navbar-content" :style="{height:navBarHeight+'px',width:windowWidth+'px'}">
				<view class="navbar-search">
					<view class="navbar-search-icon">
						<uni-icons type="search" size="16" color="#999"></uni-icons>
					</view>
					<view class="navbar-search-text">uni-app、vue</view>
				</view>
			</view>
			
		</view>
		<view :style="{height:(statusBarHeight+navBarHeight)+'px'}"></view>
	</view>
	
</template>

<script>
	export default {
		data() {
			return {
				statusBarHeight:20,
				navBarHeight:45,
				windowWidth:375,
				
			}
		},
		methods: {
			
		},
		created() {
			// 获取手机系统信息
			const info = uni.getSystemInfoSync();
			// 设置状态栏高度
			this.statusBarHeight = info.statusBarHeight
			this.windowWidth = info.windowWidth
			
			// #ifndef H5 || APP-PLUS || MP-ALIPAY
			// 获取胶囊的位置
			const menuButtonInfo = uni.getMenuButtonBoundingClientRect()
			
			console.log(info,menuButtonInfo)
			
			// （胶囊底部高度 - 状态栏的高度）+（胶囊顶部高度 - 状态栏内的高度） = 导航栏的高度
			this.navBarHeight =(menuButtonInfo.bottom - info.statusBarHeight) + (menuButtonInfo.top - info.statusBarHeight)
			this.windowWidth = menuButtonInfo.left
			// #endif
		}
	}
</script>

<style lang="scss">
	@import '../../common/css/icons.css';
.navbar{
	.navbar-fixed{
		position: fixed;
		top:0px;
		left:0px;
		right:0px;
		z-index: 99;
		
		background-color: $mk-base-color;
		.navbar-content{
			height:45px;
			padding:0px 15px;
			box-sizing: border-box;
			display: flex;
			justify-content: center;
			align-items: center;
			width:100%;
			.navbar-search{
				height:30px;
				background-color: #fff;
				padding:0px 10px;
				box-sizing: border-box;
				width:100%;
				display: flex;
				align-items: center;
				border-radius: 30px;
				.navbar-search-icon{
					color: #999;	
					margin-right:10px;
				}
				.navbar-search-text{
					font-size: 12px;
					color: #999;
				}
			}

		}
		
	}
	
}
</style>
