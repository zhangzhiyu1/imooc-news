'use strict';
// 获取数据库的引用
const db = uniCloud.database();
// 数据渲染时带上收藏状态
// 1.声明一个聚合的操作符
const $ = db.command.aggregate;

exports.main = async (event, context) => {
	//接收分类，通过分类去筛选数据
	const {
		user_id,
		value
	} = event
	
	// 3.获取用户表
	const userInfo = await db.collection('user').doc(user_id).get()
	const article_likes_ids = userInfo.data[0].article_likes_ids
	// 聚合的操作：更细化的进行处理数据 求和，分组，指定那些字段
	const list = await db.collection('article')
	.aggregate()
	// 2. 添加收藏的字段
	.addFields({
		is_like:$.in(['$_id',article_likes_ids])
	})
	.match({
		title: new RegExp(value)
	})
	.project({
		content:0
	})
	
	.end()
	//返回数据给客户端,
	return {
		code:200,
		msg:'get_search数据请求成功',
		data:list.data
		
	}
};
