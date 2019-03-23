//Map setup

var map = L.map('map', {
  center: [39.8283, -98.5795],
  zoom: 4
});
var Stamen_TonerLite = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 20,
  ext: 'png'
}).addTo(map);

//Varaoble declarations
var dataURL = "https://opendata.arcgis.com/datasets/a2817bf9632a43f5ad1c6b0c153b0fab_0.geojson";
var parsedData;
var slideNum = 0;

//Data aquisition
aquireData(dataURL);

// var slides = [
//   {title: "Distribution of All Hospitals", text: "Access to acute medical care", filter: "", center: [39.8283, -98.5795], zoom: 4},
//   {title: "General Acute Care Hospitals", text: "Slide 2 test", filter: "none", center: [39.8283, -98.5795], zoom: 4},
//   {title: "Children's Hospitals", text: "Slide 3 test", filter: "none", center: [39.8283, -98.5795], zoom: 4},
//   {title: "Self Exploration", text: "", filter: "none", center: [39.8283, -98.5795], zoom: 4},
//   {title: "Conclusion", text: "Slide 5 test", filter: "none", center: [39.8283, -98.5795], zoom: 4}
// ]

buildSlide(slides[slideNum]);

$("#nxt").click(() => {
  slideNum = slideNum + 1;
  buildSlide(slides[slideNum]);

});

$('#bck').click(() => {
  slideNum = slideNum - 1;
  buildSlide(slides[slideNum]);
});
