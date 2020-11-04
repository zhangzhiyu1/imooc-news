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
		name,
		page = 1,
		pageSize = 2
	} = event
	// 全部
	let matchObj = {};
	if(name !== '全部'){
		matchObj = {
			classify: name
		}
	} 
	// 全部
	
	// let nam = event.name
	
	// .field({
	// 	// true表示 值返回这个字段。false 表示不返回
	// 	content:false
	// })
	// .get()
	
	
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
	.match(matchObj)
	.project({
		content:0
	})
	// 要跳过多少数据
	.skip(pageSize*(page-1))
	// 限制每次请求多少数据
	.limit(pageSize)
	.end()
	//返回数据给客户端,
	return {
		code:200,
		msg:'get_list数据请求成功',
		data:list.data
		
	}
};
