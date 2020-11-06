<template>
	<view class="home">
		<navbar :isSearch="true" @input1="change"></navbar>
		<view class="home-list">
			<view v-if="is_history" class="label-box">
				<view class="label-header">
					<view class="label-title">搜索历史</view>
					<view class="label-clear">清空</view>
				</view>
				<view v-if="historyLists.length > 0" class="label-content">
					<view class="label-content-item" v-for="(item,index) in historyLists" :key="index">
						{{item.name}}
					</view>
				</view>
				<view v-else class="no-data">
					没有搜索历史
				</view>
				
			</view>

			<list-scroll v-else class="list-scroll">
				<list-card mode="base" :item="item" v-for="item in searchList" :key="item._id"></list-card>
				
			</list-scroll>
			
		</view>
	</view>
</template>

<script>
	import {mapState} from 'vuex'
	export default {
		data() {
			return {
				is_history:false,
				searchList:[]
			}
		},
		computed:{
			...mapState(['historyLists'])
		},
		onLoad() {
			// this.getSearch()
		},
		methods: {
			change(value){
				// this.getList(value)
				// console.log('接收的value',value)
				if(!value){
					clearTimeout(this.timer)
					this.mark = false
					this.getSearch(value)
					return
				}
				
				// 做标记
				if(!this.mark){
					this.mark = true;
					this.timer = setTimeout(()=>{
						this.mark = false;
						this.getSearch(value)
					},1000)
					
				}
			},
			testBtn(){
				this.$store.dispatch('set_history',{
					name:'test'
				})
			},
			getSearch(value){
				
				this.$api.get_search({
					value
				})
				.then(res=>{
					const {
						data
					} = res
					console.log(res)
					this.searchList = data
					
				})
			},
		}
	}
</script>

<style lang="scss">
	page{
		height:100%;
		display: flex;
		background-color: #f5f5f5;
	}
	.home{
		display: flex;
		flex-direction: column;
		flex:1;
		border:1px solid red;
		.home-list{
			.label-box{
				background-color: #fff;
				margin-bottom:10px;
				.label-header{
					display: flex;
					justify-content: space-between;
					font-size: 14px;
					color:#666;
					padding:10px 15px;
					border-bottom:1px solid #f5f5f5;
					.label-title{
						color:$mk-base-color;
					}
					.label-clear{
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
						padding:2px 10px;
						margin-top:12px;
						margin-right:10px;
						border-radius: 5px;
						border:1px solid #666;
						font-size: 14px;
						color:#666;
					}
				}
			}
		}
		
	}
	.no-data{
		height:200px;
		width:100%;
		line-height: 200px;
		text-align: center;
		color:#666;
		font-size: 12px;
	}
</style>
