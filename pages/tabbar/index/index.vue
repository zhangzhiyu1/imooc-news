<template>
	<view class="home">
		<!-- 自定义组件 -->
		<navbar></navbar>
		<tab :list="tabList" :tabIndex="tabIndex" @tab="tab"></tab>
		<view class="home-list">
			<list :tab="tabList" :activeIndex="activeIndex" @change="change "></list>
		</view>
		<!-- <list-scroll>
			<list-card mode="base"></list-card>
			<list-card mode="column"></list-card>
			<list-card mode="image"></list-card>
		</list-scroll> -->
		
	</view>
</template>

<script>
	
	export default {
		data() {
			return {
				title: 'Hello',
				tabList:[],
				tabIndex:0,
				activeIndex:0,
			}
					
		},
		onLoad() {
			this.getLabel();
		},
		methods: {
		
			getLabel() {
				console.log("$api",this.$api)
				this.$api.get_label({
					name:'get_label'
				}).then(res => {
					
					const {data} = res;
					// console.log(data)
					data.unshift({
						name:'全部'
					})
					this.tabList = res.data;
				})
			},
			// swiper -> tab
			change(current){
				// console.log("swiper",current)
				this.tabIndex = current
				this.activeIndex = current
			},
			// tab -> swiper
			tab({data,index}){
				// console.log(data,index);
				this.activeIndex = index
			}
		}
	}
</script>

<style lang="scss">
	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
	page{
		height:100%;
		display: flex;
	}	
	.home{
		display: flex;
		flex-direction: column;
		flex:1;
		box-sizing: border-box;
		.home-list{
			flex:1;
			box-sizing: border-box;
			border:1px solid red;
			overflow-y: scroll;
		}
	}
</style>
