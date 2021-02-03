# CHANGELOG

## 0.1.2 - 03.02.2021

### Added
* navigation_bar.vue: added navigation bar with search functionality.
* css: added bulma.
* contact.vue: added contact to route.

### Changed
* search: moved search to navigation bar. Communication works via events and injections.

## 0.1.1 - 02.01.2021

### Added
* osm_main.vue: wrapper for osm_coordinates and osm_map.
* osm_coordinates.vue: takes a location as String and outputs coordinates.

### Changed
* header_greeting.vue: removed logo
* structure: added map folder that contains all files related to osm_map.


## 0.1 - 02.01.2021

### Added
* osm_map.vue: added map using osm and [maptiler cloud service](https://cloud.maptiler.com/).

### Changed
* body.vue: renamed body to osm_map.
* header_greeting.vue: removed numbers and fixed logo problem.
* npm: installed ol [OpenLayers](https://openlayers.org/).
* index.html: added ol css files.
* CHANGELOG.md: started changelog.

