<template>
	<view class="detail">
		<view class="detail-title">
			{{formData.title}}
		</view>
		<view class="detail-header">
			<view class="detail-header-logo">
				<image :src="formData.author.avatar" mode="aspectFill" alt="">
				</image>
			</view>
			<view class="detail-header-content">
				<view class="detail-header-content-title">
					{{formData.author.author_name}}
				</view>
				<view class="detail-header-content-info">
					<text>{{formData.create_time}}</text>
					<text>{{formData.browse_count}} 浏览</text>
					<text>{{formData.thumbs_up_count}} 赞</text>
				</view>
			</view>
		</view>
		<view class="detail-content">
			<view class="detail-html">
				{{formData.content}}
			</view>
		</view>
		<view class="detail-bottom">
			<view class="detail-bottom-input">
				<text>谈谈你的看法</text>
				<uni-icons type="compose" size="16" color="#F07373"></uni-icons>
			</view>
			<view class="detail-bottom-icons">
				<view class="detail-bottom-icons-box">
					<uni-icons type="chat" size="22" color="#F07373"></uni-icons>
				</view>
				<view class="detail-bottom-icons-box">
					<uni-icons type="heart" size="22" color="#F07373"></uni-icons>
				</view>
				<view class="detail-bottom-icons-box">
					<uni-icons type="hand-thumbsup" size="22" color="#F07373"></uni-icons>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				formData:{},
				pageDetail:''
			}
		},
		onLoad(query) {
			console.log(JSON.parse(query.params))
			this.formData = JSON.parse(query.params)
			this.getDetail()
		},
		methods: {
			// 获取详情信息
			getDetail(){
				this.$api.get_detail({
					article_id: this.formData._id
				}).then((res)=>{
					console.log('res',res)
					this.pageDetail = res;
					const {data} = res;
					this.formData = data
				})
			}
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
			// height:1000px;
			margin-top:20px;
			.detail-html{
				
			}
		}

		.detail-bottom{
			position: fixed;
			bottom:0;
			left:0px;
			right:0px;
			display: flex;
			align-items: center;
			height:44px;
			border-top:1px #f5f5f5 solid;
			background-color: #fff;
			box-sizing: border-box;
			.detail-bottom-input{
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-left: 10px;
				padding:0px 10px;
				width:100%;
				height:30px;
				border:1px solid #ddd;
				border-radius: 3px;
				text{
					font-size: 14px;
					color:#999;
				}
			}
			.detail-bottom-icons{
				display: flex;
				flex-shrink: 0;
				padding:0px 10px;
				.detail-bottom-icons-box{
					position: relative;
					display: flex;
					align-items: center;
					width: 44px;
					text-align: center;
					justify-content: center;
				}
			}
		}
		
	}
	
</style>
