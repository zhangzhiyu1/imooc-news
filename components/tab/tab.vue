<template>
	<view class="tab">
		<scroll-view  class="tab-scroll"  scroll-x="true">
			<view class="tab-scroll-box">
				<view v-for="(item,index) in list" :key="index" 
				class="tab-scroll-item" 
				:class="{active:activeIndex == index}" 
				@click="clickTab(item,index)">{{item.name}}</view>
			</view>
		</scroll-view>
		<view class="tab-icons">
			<uni-icons type="gear" size="24" color="#666"></uni-icons>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			list:{
				type:Array,
				default () {
					return []
				}
			},
			tabIndex:{
				type:Number,
				default:0
			}
		},
		watch:{
			tabIndex(newVal,oldVal) {
				this.activeIndex = newVal;
			}
		},
		data() {
			return {
				activeIndex :0,
			}
		},
		methods: {
			clickTab(item,index){
				
				this.activeIndex = index
				this.$emit('tab',{
					data:item,
					index:index
				})
			}
		}
	}
</script>

<style lang="scss">
.tab{
	width: 750upx;
	display: flex;
	flex-direction: row;
	background-color: #fff;
	justify-content: center;
	align-items: center;
	border-bottom:1px solid #f5f5f5;
	
	.tab-scroll{
		
		overflow: hidden;
		flex:1;
		
		.tab-scroll-box{
			display: flex;
			height:45px;
			align-items: center;
			flex-wrap: nowrap;
			.tab-scroll-item{
				flex-shrink: 0;
				padding:0px 10px;
				color:#333;
				font-size: 14px;
				&.active{
					color:$mk-base-color
				}
			}
		}
		
	}
	.tab-icons{
		background-color: #fff;
		display: flex;
		align-items: center;
		justify-content: center;
		width:45px;
		
		position: relative;
		&::after {
			position: absolute;
			content: '';
			top:5px;
			bottom:5px;
			left:0;
			width:1px;
			background-color: #ddd;
		}
	}
}
</style>
