// Vuex 状态管理
import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

const store = new Vuex.Store({
	// 数据源
	state: {
		historyLists: uni.getStorageSync("__history") || []
	},
	mutations:{
		// 修改hisyory
		SET_HISTORY_LIST(state,history){
			state.historyLists = history
		},
		// 清空history
		CLEAR_HISTORY(state,history){
			state.historyLists = []
		}
	},
	actions:{
		// 修改hisyory
		set_history({commit,state},history){
			let list = state.historyLists
			list.unshift(history)
			uni.setStorageSync('__history',list)
			commit('SET_HISTORY_LIST',list)
		},
		clearHistory({commit}){
			uni.setStorageSync('__history',[])
			commit('CLEAR_HISTORY')
		}
	}
})

export default store











