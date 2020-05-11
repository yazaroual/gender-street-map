import ApiService from './api.service'

export default {
  reverseSearch(geoPosition) {
    ApiService.init('https://nominatim.openstreetmap.org/')
    const endpoint = `reverse?format=json&lon=${geoPosition[0]}&lat=${geoPosition[1]}`
    return ApiService.get(endpoint)
  }
}
