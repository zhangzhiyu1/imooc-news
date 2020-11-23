<template>
	<view class="label">
		<view class="label-box">
			<view class="label-header">
				<view class="label-title">我的标签</view>
				<view class="label-edit">编辑</view>
			</view>
			<view class="label-content">
				<view class="label-content-item" v-for="item in 5" :key="item">
					{{item}}标签
					<uni-icons class="icons-close" type="clear" size="20" color="red"></uni-icons>
				</view>
			</view>
			
		</view>
		<!-- 推荐 -->
		<view class="label-box">
			<view class="label-header">
				<view class="label-title">标签推荐</view>
				
			</view>
			<view class="label-content">
				<view class="label-content-item" v-for="item in 5" :key="item">{{item}}标签</view>
			</view>
			
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
	page{
		background-color: #f5f5f5;
	}
	.label{
		.label-box{
			background-color: #fff;
			margin-bottom:10px;
			.label-header{
				justify-content: space-between;
				display: flex;
				padding:10px 15px;
				font-size: 14px;
				color:#666;
				border-bottom:1px solid #f5f5f5;
				.label-edit{
					color:#30b33a;
					font-weight:bold;
				}
			}
			.label-content{
				display: flex;
				flex-wrap: wrap;
				padding:15px;
				padding-top:0px;
				.label-content-item{
					padding:2px 5px;
					margin-top:12px;
					margin-right:10px;
					border-radius: 5px;
					border:1px solid #666;
					font-size: 12px;
					color:#666;
					position: relative;
					.icons-close{
						position: absolute;
						right:-8px;
						top:-8px;
						background-color: #fff;
						border-radius: 50%;
					}
				}
			}
		}
	}
</style>
