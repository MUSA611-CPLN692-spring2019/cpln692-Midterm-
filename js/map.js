var map = L.map('map', {
  center: [40.000, -75.1090],
  zoom: 11
});

var Stamen_TonerLite = L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.{ext}', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 20,
  ext: 'png'
}).addTo(map);

var layerLine;
var layerStation;
var layerApartment = L.layerGroup().addTo(map);

var stationMarkerOptions = {
  radius: 10,
  fillColor: "#ff8080",
  weight: 0,
  opacity: 1,
  fillOpacity: 0.8
};

var lineMarkerOptions = {
  "color": "#ffb3b3",
  "weight": 5,
  "opacity": 0.5
};

var apartmentMarkerOptions = {
  radius: 20,
  fillColor: "#008080",
  weight: 0,
  opacity: 1,
  fillOpacity: 0.8
};

var apartmentMarkerOptionsChoropleth = function(feature) {
  /*
    if (feature["Total Rent (Est.)"] > 1300) {
      return {
        color: "#ff0000"
      };
    } else {
      return {
        color: "#0000ff"
      };
    }*/
  switch (true) {
    case feature["Total Rent (Est.)"] <= 1000:
      return {
        color: "#ccffff",
        radius: 20,
        weight: 0,
        opacity: 1,
        fillOpacity: 0.8
      };
    case feature["Total Rent (Est.)"] > 1000 && feature["Total Rent (Est.)"] <= 1200:
      return {
        color: "#33ffff",
        radius: 20,
        weight: 0,
        opacity: 1,
        fillOpacity: 0.8
      };
    case feature["Total Rent (Est.)"] > 1200 && feature["Total Rent (Est.)"] <= 1300:
      return {
        color: "#00e6e6",
        radius: 20,
        weight: 0,
        opacity: 1,
        fillOpacity: 0.8
      };
    default:
      return {
        color: "#008080",
        radius: 20,
        weight: 0,
        opacity: 1,
        fillOpacity: 0.8
      };
  }
};

//L.geoJSON(railLine).addTo(map);
//L.geoJSON(railStation).addTo(map);
