<template>
  <div>
    <vl-map
      :load-tiles-while-animating="true"
      :load-tiles-while-interacting="true"
      data-projection="EPSG:4326"
      style="height: 500px; width:700px;"
    >
      <vl-view
        :zoom.sync="zoom"
        :center.sync="center"
        :rotation.sync="rotation"
      />
      <vl-geoloc @update:position="geolocPosition = $event">
        <template slot-scope="geoloc">
          <vl-feature v-if="geoloc.position" id="position-feature">
            <vl-geom-point :coordinates="geoloc.position"></vl-geom-point>
            <vl-style-box>
              <vl-style-icon
                src="_media/marker.png"
                :scale="1"
                :anchor="geolocPosition"
              ></vl-style-icon>
            </vl-style-box>
          </vl-feature>
        </template>
      </vl-geoloc>

      <vl-layer-tile id="osm">
        <vl-source-osm></vl-source-osm>
      </vl-layer-tile>
    </vl-map>
    <div style="padding: 20px">
      Zoom: {{ zoom }}
      <br />
      Center: {{ center }}
      <br />
      Rotation: {{ rotation }}
      <br />
      My geolocation: {{ geolocPosition }}
    </div>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  data() {
    return {
      zoom: 14,
      rotation: 0,
      center: [1.4210873, 43.602461],
      geolocPosition: undefined
    }
  },
  watch: {
    center: {
      deep: true,
      handler(newVal, oldVal) {
        this.changePosition(this.center)
      }
    }
  },
  methods: {
    changePosition: _.debounce(function(value) {
      this.$emit('positionChanged', value)
    }, 1000)
  }
}
</script>
