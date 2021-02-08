# CHANGELOG

## 0.2 - 08.02.2021

### Added

* i18n: added translations for the german and english language:
  * updated all components to use translations.

### Changed

* Contact.vue:
  * got feedback and changed behaviour of e-mail input.
  * added ```<textarea />```.
* Home.vue:
  * added explanation of localzon(e).
* navigation_bar: added locales option.


## 0.1.5 - 04.02.2021

### Added

* search.vue: now more user-friendly.

### Changed

* Contact.vue: 
  * testing contact form.
  * added eMail regex.
* icons: added fonts awesome icon pack.
* css: 
  * ```noselect``` on most elements.
  * fixed css on mobile.


## 0.1.4 - 04.02.2021

### Added

* search.vue: added reusable search component.

### Changed

* 404.vue: changed text of 404.
* navigation_bar.vue: removed logo.
* css: small style changes. Biggest: dark navigation bar... idk anything about colors...

## 0.1.3 - 04.02.2021

### Added

* PageNotFound.vue: added 404 page.

### Changed

* navigation_bar.vue: now works on mobile too.
* index.html: added meta information.  
* css: small style changes.

## 0.1.2.1 - 03.02.2021

### Changed

* Contact.vue and Logo.png: git did not pick up the name change. This caused a dependency problem for travis. Should be
  fixed now!

## 0.1.2.1 - 03.02.2021

### Changed

* Contact.vue and Logo.png: git did not pick up the name change. This caused a dependency problem for travis. Should be
  fixed now!

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

