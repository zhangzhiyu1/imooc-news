#搜索逻辑实现
1.搜索历史记录页面和搜索结果界面 -- v-if
2.避免输入时重复请求 -- setTimeout(()=>{数据请求()},1000)
3.数据清空时请求的还是上一个ajax -- 做一个空判断
4.请求之后点击卡片的时候把历史记录存入vuex---这个时候在卡片组件的点击事件里面做操作