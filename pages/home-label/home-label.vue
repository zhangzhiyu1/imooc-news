<template>
	<view class="label">
		<view class="label-box">
			<view class="label-header">
				<view class="label-title">我的标签</view>
				<view class="label-edit" @click="editLabel">{{is_edit?'完成':'编辑'}}</view>
			</view>
			<uni-load-more v-if="loading" status="loading" iconType="snow"></uni-load-more>
			<view v-if="!loading" class="label-content">
				<view class="label-content-item" v-for="(item, index) in labelList" :key="item._id">
					{{item.name}}
					<uni-icons v-if="is_edit" class="icons-close" type="clear" size="20" color="red" @click="del(index)"></uni-icons>
				</view>
			</view>
			<view v-show="labelList.length === 0 && !loading" class="no-data">
				当前没有数据
			</view>
			
		</view>
		<!-- 推荐 -->
		<view class="label-box">
			<view class="label-header">
				<view class="label-title">标签推荐</view>
				
			</view>
			<uni-load-more v-if="loading" status="loading" iconType="snow"></uni-load-more>
			<view v-if="!loading" class="label-content">
				<view class="label-content-item" v-for="(item, index) in list" :key="item._id" @click="add(index)">{{item.name}}</view>
			</view>
			<view v-show="list.length === 0 && !loading" class="no-data">
				当前没有数据
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				is_edit:false,
				labelList:[],
				list:[],
				loading:true
			}
		},
		onLoad(){
			this.getLabel();
			
			// 自定义事件--在标签发生变化时告诉首页页面发生变化了
			// this.$emit-向父组件发出信息   uni.$emit()-全局发送事件
		},
		methods: {
			// 修改列表
			editLabel(){
				// this.is_edit = !this.is_edit;
				if(this.is_edit){
					this.is_edit = false
					this.setUpdateLabel(this.labelList)
				}else{
					this.is_edit = true
					
				}
			},
			// 添加标签项
			add(index){
				if(!this.is_edit) return
				this.labelList.push(this.list[index])
				this.list.splice(index, 1)
			},
			// 删除标签项
			del(index){
				this.list.push(this.labelList[index])
				this.labelList.splice(index, 1)
			},
			// 获取标签列表
			getLabel(){
				this.loading = true
				this.$api.get_label({
					type:'all'
				}).then((res)=>{
					console.log(res)
					const {data} = res
					this.labelList = data.filter(item => item.current)
					this.list = data.filter(item => !item.current)
					this.loading = false
				})
			},
			// 提交修改后的标签列表
			setUpdateLabel(label){
				console.log(label)
				let newArrIds = []
				label.forEach(item => {
					newArrIds.push(item._id)
				})
				uni.showLoading()
				console.log(newArrIds)
				this.$api.update_label({
					user_id:'5f83cb3b37d16d0001ad8210',
					label:newArrIds
				}).then((res)=>{
					uni.hideLoading();
					uni.showToast({
						title:'更新成功',
						icon: 'none'
					})
					
					// 手动通知首页我们的标签改变了
					uni.$emit('labelChange','uniapp')
				})
			},
			
			
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
	.no-data{
		text-align: center;
		padding:50px 0px;
		color:#999;
		font-size: 14px;
		width:100%;
	}
</style>
