<template>
	<view class="scroll">
		<scroll-view class="list-scroll" scroll-y="true" @scrolltolower="loadmore">
			<view>
				<slot></slot>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			loadmore(){
				
				this.$emit('loadmore')
			}
		}
	}
</script>

<style lang="scss">
	.scroll{
		flex:1;
		overflow: hidden;
		box-sizing: border-box;
		.list-scroll{
			flex:auto;
			height:100%;
			display: flex;
			flex-direction: column;
			padding-top:1px;
			box-sizing: border-box;
		}
	}
</style>
