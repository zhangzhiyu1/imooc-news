<template>
	<list-scroll class="list-scroll" @loadmore = "loadmore">
		<list-card mode="base" :item="item" v-for="item in list" :key="item._id"></list-card>
		<uni-load-more iconType="snow" status="loading"></uni-load-more>
	</list-scroll>
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
		},
		methods:{
			loadmore(){
				this.$emit('loadmore')
			}
		}
		
	}
</script>

<style lang="scss">
	.list-scroll{
		height:100%;
	}
</style>
