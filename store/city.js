import NominatimService from '@/services/nominatim.service.js'
export const namespaced = true

export const state = () => ({
  position: [0, 0],
  geoCity: undefined,
  cityName: undefined
})

export const mutations = {
  SET_POSITION(state, value) {
    state.position = value
  },
  SET_GEO_CITY(state, value) {
    state.geoCity = value
  },
  SET_CITY_NAME(state, value) {
    state.cityName = value
  }
}

export const actions = {
  setPosition({ commit }, value) {
    commit('SET_POSITION', value)
    NominatimService.reverseSearch(value).then((response) => {
      commit('SET_GEO_CITY', response.data)
      commit('SET_CITY_NAME', response.data.address.city)
      // Call API to get street names and associated genders
      // How to limit that call based on city name to avoid complete redrawing ?
    })
  }
}
