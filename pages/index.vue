<template>
  <v-layout column justify-center align-center>
    <client-only>
      <GenderMap name="genderMap" @positionChanged="onPositionChanged" />
    </client-only>
    <v-card>
      <MapData />
    </v-card>
  </v-layout>
</template>

<script>
import { mapState } from 'vuex'
import GenderMap from '@/components/GenderMap.vue'
import MapData from '@/components/MapData.vue'

export default {
  components: {
    GenderMap,
    MapData
  },
  computed: {
    ...mapState({ position: 'city/position' })
  },
  methods: {
    onPositionChanged(coord) {
      this.$store.dispatch('city/setPosition', coord)
    }
  }
}
</script>
