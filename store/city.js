export const namespaced = true

export const state = () => ({
  position: [0, 0],
  name: undefined
})

export const mutations = {
  setPosition(state, value) {
    state.position = value
  }
}

export const actions = {
  setPosition({ commit }, value) {
    commit('setPosition', value)
  }
}
