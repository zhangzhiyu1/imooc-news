# imooc-news
## 一、添加头部标签：全部 
# 1. data.unshift('全部') 然后把data值赋给 tabList
# 2. 在云函数中判断   如果传入的值 name!=='全部' 则match() 里加入条件判断 
# let matchObj = {};
# if(name !== '全部'){matchObj = {classify: name}}
## 二、tab切换反复请求数据
#  在tab切换的change方法中 加上一个条件判断 当数据内容不存在 这个时候再去请求数据
## 三、loading组件使用
# 1.使用loading组件
# 2.判断加载还是没有更多数据	
# 3.保证滑动切换和点击切换的index值是一样的
# 4.传入参数 页数和每一页的条数
# .skip(pageSize*(page-1))
# .limit(pageSize)
# 5.滚动加载，在scroll-view标签上 添加事件 @scrolltolower="loadmore"
# 6.列表数组，分页中的页码数组  要根据index分类
# 7.判断数据少于7个的时候不显示loading
### 如果$set() 不生效，则用 $forceUpdate() 强制渲染