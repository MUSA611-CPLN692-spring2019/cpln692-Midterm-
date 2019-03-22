/* =====================
Leaflet Configuration
===================== */
var map = L.map('map', {
  center: [34.05488610928646, -118.2489502429962],
  zoom: 15
});

basemapURL = "http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png";

var Stamen_TonerLite = L.tileLayer(basemapURL, {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: 'abcd',
  minZoom: 6,
  maxZoom: 18,
  ext: 'png'
}).addTo(map);

/* ================
Read data and update page
==================*/
var dataURL = 'https://raw.githubusercontent.com/mayutanaka/la-grand/master/grandLA.geojson';
var grandLA = $.getJSON(dataURL).done(function(res) {
  // Update content based on user input (button clicking next/previous)
  $(document).ready(function() {
    updateSlide(res);
    $('#nav-prev').click(function() {
      currSlide-=1;
      updateSlide(res);
    });
    $('#nav-next').click(function() {
      currSlide+=1;
      updateSlide(res);
    });
  });
});
