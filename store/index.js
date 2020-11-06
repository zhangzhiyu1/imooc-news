// Vuex 状态管理
import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

const store = new Vuex.Store({
	// 数据源
	state: {
		historyLists:[]
	},
	mutations:{
		// 修改hisyory
		SET_HISTORY_LIST(state,history){
			state.historyLists = history
		}
	},
	actions:{
		set_history({commit,state},history){
			let list = state.historyLists
			list.unshift(history)
			commit('SET_HISTORY_LIST',list)
		}
	}
})

export default store











