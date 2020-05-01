<template>
  <v-layout column justify-center align-center>
    <GenderMap />
    <v-card>
      <MapData />
    </v-card>
  </v-layout>
</template>

<script>
import GenderMap from '@/components/GenderMap.vue'
import MapData from '@/components/MapData.vue'
export default {
  components: {
    GenderMap,
    MapData
  }
}
</script>
