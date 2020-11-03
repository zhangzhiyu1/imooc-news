'use strict';
const db = uniCloud.database();
const dbCmd = db.command

exports.main = async (event, context) => {
	// 收藏点击消失，点击显示
	// 1.后台获取一个用户ID，一个文章ID
	const {
		user_id,
		article_id
	} = event;
	// 2.拿到用户信息
	const userInfo = await db.collection('user').doc(user_id).get()
	// 3.默认第一个用户，获取他的article_likes_ids
	const article_id_ids = userInfo.data[0].article_likes_ids
	
	// 5.删除添加操作单独赋值给一个参数    根据之前3中获取的值  判断数据库中是否包含传过来的 article_id
	// 有就删除
	// 没有就添加
	let dbCmdFuns = null;
	if(article_id_ids.includes(article_id)){
		dbCmdFuns = dbCmd.pull(article_id)
	}else{
		dbCmdFuns = dbCmd.addToSet(article_id)
	}
	
	// 4.根据用户信息修改对应的收藏列表数据
	// dbCmd.pull  --- 删除
	// dbCmd.addToSet  --- 添加
	await db.collection('user').doc(user_id).update({
		article_likes_ids:dbCmdFuns
	})
	//event为客户端上传的参数
	console.log('event : ', event)
	
	//返回数据给客户端
	return {
		code:200,
		msg:'数据请求成功',
		data:userInfo.data[0]
	}
};
