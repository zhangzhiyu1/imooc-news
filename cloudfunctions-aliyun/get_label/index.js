'use strict';
// 获取数据库的引用
const db = uniCloud.database()
const $ = db.command.aggregate
exports.main = async (event, context) => {
	// 获取label表的数据
	// let label = await db.collection('label').get()
	const {
		user_id
	} = event
	// 拿到用户表
	let userInfo = await db.collection('user').doc(user_id).get()
	userInfo = userInfo.data[0]
	// label_ids = ['label.id']
	let label = await db.collecctionw('label')
	.aggregate()
	// 添加字段
	.addFields({
		current: $.in(['$_id',userInfo.$.ifNull([userInfo.label_ids,[]])])
	})
	.end()
	
	
	//返回数据给客户端
	return {
		code:200,
		msg: '数据请求成功',
		data: label.data
	}
};
