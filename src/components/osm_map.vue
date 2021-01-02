<template>
  <div id="map" class="map">
    <p><a href="https://www.maptiler.com/copyright/" target="_blank">© MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">© OpenStreetMap contributors</a></p>
  </div>
</template>

<script>
import {Map, View} from 'ol'
import {Tile} from "ol/layer"
import * as proj from "ol/proj";
import TileJSON from "ol/source/TileJSON";

export default {
  name: 'oms-map',
  data() {
    return {
      source: new TileJSON({
        url: 'https://api.maptiler.com/maps/streets/tiles.json?key=kIBJW5fNSTqo8BAOwiBH',
        tileSize: 512,
        crossOrigin: 'anonymous'
      })
    }
  },
  mounted() {
    new Map({
      layers: [
        new Tile({
          source: this.source
        })
      ],
      target: 'map',
      view: new View({
        constrainResolution: true,
        center: proj.fromLonLat([8, 47]),
        zoom: 15
      })
    })
  }
}
</script>

<style>
.map {
  width: 100%;
  height: 400px;
}
</style>