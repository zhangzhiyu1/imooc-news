'use strict';
// 获取数据库的引用
const db = uniCloud.database();
exports.main = async (event, context) => {
	//接收分类，通过分类去筛选数据
	const {
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
	
	// 聚合的操作：更细化的进行处理数据 求和，分组，指定那些字段
	const list = await db.collection('article')
	.aggregate()
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
