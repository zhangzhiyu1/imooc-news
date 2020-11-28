<template>
	<view class="detail">
		<view class="detail-title">
			我是一个前端开发者，我们需不需要学习nodejs？
		</view>
		<view class="detail-header">
			<view class="detail-header-logo">
				<image src="../../static/logo.png" mode="aspectFill" alt="">
				</image>
			</view>
			<view class="detail-header-content">
				<view class="detail-header-content-title">
					meHaotian
				</view>
				<view class="detail-header-content-info">
					<text>2020-03-21 12:21:1 </text>
					<text>1234 浏览</text>
					<text>1234 赞</text>
				</view>
			</view>
		</view>
		<view class="detail-content">
			内容区域
		</view>
		<view class="detail-bottom">
			<view class="detail-bottom-input">
				<text>谈谈你的看法</text>
				<uni-icons type="compose" size="16" color="#F07373"></uni-icons>
			</view>
			<view class="detail-bottom-icons"></view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	.detail{
		padding:15px 0px 54px;
		.deail-title{
			padding:0px 15px;
			font-size: 18px;
			font-weight: bold;
			color:#333;
		}
		.detail-header{
			display:flex;
			align-items: center;
			margin-top:10px;
			padding:0px 15px;
			.detail-header-logo{
				flex-shrink:0;
				width:40px;
				height:40px;
				border-radius: 50%;
				overflow: hidden;
				image{
					width:100%;
					height:100%;
				}
			}
			.detail-header-content{
				width:100%;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				padding-left:10px;
				font-size: 12px;
				.detail-header-content-title{
					font-size: 14px;
					color:#333;
				}
				.detail-header-content-info{
					color:#999;
					text{
						margin-right:10px;
					}
				}
			}
		}
		.detail-content{
			height:1000px;
			border:1px solid red;
		}

	}
	
</style>
