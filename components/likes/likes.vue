<template>
	
		<view class="icons" @click.stop="likeTap">
			<uni-icons :type="like? 'heart-filled':'heart'" color="#f07373" size="20"></uni-icons>
		</view>
	
</template>

<script>
	export default {
		props:{
			item: {
				type:Object,
				default(){
					return {}
				}
			}
		},
		data() {
			return {
				like:false
			};
		},
		// ����Ⱦlike�ֶε�ʱ����is_like��û�и�ֵ�ɹ�
		watch:{
			item(newVal){
				this.like = newVal.is_like
			}
		},
		created(){
			this.like = this.item.is_like
		},
		methods:{
			likeTap(){
				this.like = !this.like;
				this.setUpdateLikes()
				console.log("收藏成功")
			},
			setUpdateLikes(){
				uni.showLoading({
					
				})
				this.$api.update_like({
					user_id:'5f83cb3b37d16d0001ad8210',
					article_id:this.item._id
				}).then(res=>{
					uni.hideLoading()
					uni.showToast({
						title:this.like?'收藏成功':'取消收藏',
						icon:'none'
					})
					console.log(res)
				}).catch(err=>{
					uni.hideLoading()
				})
			}
		}
	}
</script>

<style>
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
</style>
