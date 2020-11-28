<template>
	<view class="listCard-box" @click="open()">
		<!-- 基础卡片 -->
		<view v-if="item.mode==='base'" class="listCard">
			<view class="listCard-image">
				<image :src="item.cover[0]" mode="aspectFill"></image>
			</view>
			<view class="listCard-content">
				<view class="listCard-content-title">
					<text>
						{{item.title}}
					</text>
					<!-- 收藏按钮 -->
					<likes :item="item"></likes>
				</view>
				<view class="listCard-content-des">
					<view class="listCard-content-des-label">
						<view class="listCard-content-des-label-item">{{item.classify}}</view>
					</view>
					<view class="listCard-content-des-browse">{{item.browse_count}}浏览</view>
				</view>
			</view>
		</view>
		
		 <!-- 多图模式 -->
		<view v-if="item.mode==='column'" class="listCard mode-column">
			
			<view class="listCard-content">
				<view class="listCard-content-title">
					<text>
						{{item.title}}
					</text>
					<likes :item="item"></likes>
				</view>
				<view class="listCard-image">
					<view class="listCard-image-item" v-if="imgIndex<3"  v-for="(img,imgIndex) in item.cover"  :key="imgIndex">
						<image :src="img" mode="aspectFill"></image>
					</view>
				</view>
				<view class="listCard-content-des">
					<view class="listCard-content-des-label">
						<view class="listCard-content-des-label-item">{{item.classify}}</view>
					</view>
					<view class="listCard-content-des-browse">{{item.browse_count}}浏览</view>
				</view>
			</view>
		</view>
		
		<!-- 大图模式 -->
		<view v-if="item.mode==='image'" class="listCard mode-image">
			<view class="listCard-image">
				<image :src="item.cover[0]" mode="aspectFill"></image>
			</view>
			<view class="listCard-content">
				
				<view class="listCard-content-title">
					<text>
						{{item.title}}
					</text>
					<likes :item="item"></likes>
				</view>
				
				<view class="listCard-content-des">
					<view class="listCard-content-des-label">
						<view class="listCard-content-des-label-item">{{item.classify}}</view>
					</view>
					<view class="listCard-content-des-browse">{{item.browse_count}}浏览</view>
				</view>
			</view>
		</view>
		
		
	</view>
</template>

<script>
	export default {
		props:{
			
			item:{
				type:Object,
				default(){
					return {}
				}
			}
		},
		data() {
			return {
				
			}
		},
		methods: {
			open(){
				this.$emit('click',this.item)
				console.log('打开详情页',this.item)
				uni.navigateTo({
					url:'/pages/home-detail/home-detail'
				})
			}
		}
	}
</script>

<style lang="scss">
	.listCard-box{
		padding-bottom:10px;
		&::before,&::after{
			content:'';
			display: table;
		}
		.listCard{
			display: flex;
			padding:10px;
			margin:10px 10px 0px;
			box-sizing: border-box;
			border-radius: 5px;
			box-shadow: 0 0 5px 1px rgba(0,0,0,.1);
			.listCard-image{
				width: 60px;
				height:60px;
				border-radius: 5px;
				flex-shrink: 0;
				overflow: hidden;
				image{
					width:100%;
					height:100%;
				}
			}
			.listCard-content{
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				padding-left: 10px;
				box-sizing: border-box;
				width:100%;
				.listCard-content-title{
					font-size: 14px;
					color: #333;
					font-weight: 400;
					line-height: 1.2;
					position: relative;
					text {
						padding-right:20px;
						box-sizing: border-box;
						overflow: hidden;
						text-overflow: ellipsis;
						display: -webkit-box;
						-webkit-line-clamp:2;
						-webkit-box-orient:vertical;
					}
					.icons{
						position: absolute;
						right:0px;
						top:0px;
						display:flex;
						justify-content: center;
						align-items: center;
						width:20px;
						height:20px;
						
					}
				}
				.listCard-content-des{
					display: flex;
					justify-content: space-between;
					font-size: 12px;
					.listCard-content-des-label{
						display: flex;
						.listCard-content-des-label-item{
							padding:0px 5px;
							margin-right:5px;
							border-radius: 15px;
							color: $mk-base-color;
							border:1px solid $mk-base-color;
						}
					}
					.listCard-content-des-browse{
						color:#999;
						line-height: 1.5;
					}
				}
			}
		
		
			&.mode-column{
				.list-content{
					width:100%;
					padding-left:0px;
				}
				.listCard-image{
					display: flex;
					margin-top:10px;
					width:100%;
					height:70px;
					.listCard-image-item{
						margin-left:10px;
						width:100%;
						border-radius: 5px;
						overflow: hidden;
						&:first-child{
							margin-left:0px;
						}
						image{
							width:100%;
							height:100px;
							height:100%;
						}
					}
				}
				.listCard-content-des{
					margin-top:10px;
				}
			}
			&.mode-image{
				flex-direction: column;
				.listCard-image {
					width:100%;
					height:100px;
				}
				.listCard-content{
					padding-left:0px;
					margin-top:10px;
					.listCard-content-des{
						display: flex;
						align-items: center;
						margin-top:10px;
					}
				}
			}
		}
		
		
	
	
	}
	
</style>
