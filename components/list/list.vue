<template>
	<swiper class="home-swiper" :current="activeIndex" @change="changeSwiper">
		<swiper-item v-for="(item, index) in tab" :key = "index" class="swiper-item"> 
			<listItem :list="listCatchData[index]" :load="load[index]" @loadmore="loadmore" ></listItem>
		</swiper-item>
		<!-- <swiper-item class="swiper-item">
			<listItem></listItem>
		</swiper-item>
		<swiper-item class="swiper-item">
			<listItem></listItem>
		</swiper-item> -->
	</swiper>
</template>

<script>
	import listItem from './list-item.vue'
	export default {
		props:{
			tab:{
				type:Array,
				default:[]
			},
			activeIndex:{
				type:Number,
				default:0
			}
		},
		components:{
			listItem
		},
		
		data() {
			return {
				list:[],
				listCatchData:{},
				load:{},
				pageSize:5
			};
		},
		watch:{
			tab(newVal,oldVal){
				if(newVal.length===0){
					return
				}
				this.getList(this.activeIndex);
				this.listCatchData = {}
				this.load = {}
			}
		},
		// onload 只能在页面里面写，created在组建里面写
		created(){
			// tab 可能还没有赋值
			
		},
		methods:{
			// 上啦事件
			loadmore(){
				if(this.load[this.activeIndex].loading === 'noMore') return
				this.load[this.activeIndex].page++;
				console.log('触发上拉');
				this.getList(this.activeIndex)
			},
			changeSwiper(e){
				const  current  = e.detail.current;
				// console.log(this.tab[current].name)
				this.$emit('change',current)
				// TODO 做一个判断--没有数据再去加载数据
				if( !this.listCatchData[current] || this.listCatchData[current].length==0 ){
					this.getList(current)
				}
				
				
			},
			getList(current){
				if(!this.load[current]){
					this.load[current]={
						page: 1 ,
						loading:'loading'
					}
					
				}
				console.log(this.load[current].page)
				this.$api.get_list({
					name:this.tab[current].name,
					page:this.load[current].page,
					pageSize:this.pageSize
				})
				.then(res=>{
					const {data} = res
					console.log('请求数据：',data);
					if(data.length === 0 ){
						let oldLoad = {}
						oldLoad.loading = 'noMore';
						oldLoad.page = this.load[current].page
						this.$set(this.load,current,oldLoad)
						// 强制渲染页面
						this.$forceUpdate()
						return
					}
					// 初次渲染是个空数组==undefind  需要处理一下判断为空
					let oldList = this.listCatchData[current] || []
					oldList.push(...data)
					// this.listCatchData[current] = data;
					// $set 通知页面数据改变了  参数 (目标元素，下标，值) -- 数据懒加载
					this.$set(this.listCatchData,current,oldList)
					
					
					// 数据缓存会触发报错，在页面更新的时候缓存未删除--这里需要监听tab这个模块发生变化的时候进行处理
					
					
					
				})
			},
		}
	}
</script>

<style lang="scss">
.home-swiper{
	height:100%;
	.swiper-item{
		height:100%;
		overflow: hidden;
		.list-scroll{
			height:100%;
		}
	}
}
</style>
