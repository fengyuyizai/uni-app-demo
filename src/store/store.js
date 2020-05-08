const store = {
  state: {
		userInfo: null
	},
  mutations: {
		userInfo(state, payload) {
			state.userInfo = {...payload}
		}
	}
}

export default store