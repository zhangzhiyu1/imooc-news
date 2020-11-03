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
		methods:{
			likeTap(){
				this.like = !this.like;
				this.setUpdateLikes()
				console.log("收藏成功")
			},
			setUpdateLikes(){
				this.$api.update_like({
					user_id:'5f83cb3b37d16d0001ad8210',
					article_id:this.item._id
				}).then(res=>{
					console.log(res)
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
