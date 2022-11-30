<template>
  <v-container>

  </v-container>
</template>

<script>
import { createMap } from "maplibre-gl-js-amplify";
import "maplibre-gl/dist/maplibre-gl.css";

  export default {
    name: 'HelloWorld',
    methods:{
      async initializeMap() {
    const map = await createMap({
        container: "map", // An HTML Element or HTML element ID to render the map in https://maplibre.org/maplibre-gl-js-docs/api/map/
        center: [-123.1187, 49.2819], // [Longitude, Latitude]
        zoom: 11,
    })
}
    }

  }
</script>
