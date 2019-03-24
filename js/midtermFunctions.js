//User derived functions for Midterm Project

var aquireData = function(datUrl) {
  var downloadData = $.ajax(datUrl).done((dat) => {
    console.log(dat);
    parsedData = dat;
  })
};

var cngTitle = (obTitle) => {
  $('#Title').text(obTitle);
};

var cngText = (obText) => {
  $('#slideText').text(obText);
};

var makeStateFilter = () => {
  var stInput = $('#stateFilter').val();
  return "STATE == " + stInput.toUpperCase();
};

var myFilter = function(feature) {
  //console.log(feature.properties.TYPE);
  return feature.properties.TYPE == hospType;
};

//takes in data list and writes returns array of markers
// var makeMarkers = function(pData) {
//   var tempMarkers = [];
//   _.each(pData, (dataLine) => {tempMarkers.push(L.circleMarker([dataLine.properties.LATITUDE, dataLine.properties.LONGITUDE],radius=2))});
//   return tempMarkers;
// };
//
// var plotMarkers = function(marker) {
//   _.each(marker, (mark) => {
//     mark.addTo(map);
//   });
// };

function createCircleMarker( feature, latlng ){
  // Change the values of these options to change the symbol's appearance
  let options = {
    radius: 4,
    fillColor: "lightgreen",
    color: "black",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
  }
  return L.circleMarker( latlng, options );
}


var updateMap = () => {
  if (typeof featureGroup != "undefined") {map.removeLayer(featureGroup);}
  featureGroup = L.geoJson(parsedData, {
      pointToLayer: createCircleMarker,
      filter: myFilter

    }).addTo(map);

};

var buildSlide = (slideObject) => {
  hospType = slideObject.hospType;
  cngTitle(slideObject.title);
  cngText(slideObject.text);
  updateMap();
  if(slideNum > 0) {$("#bck").show();} else {$("#bck").hide();}
  if(slideNum < 4) {$("#nxt").show();} else {$("#nxt").hide();}
  if(slideNum != 4) {$('#filters').hide();} else {$('#filters').show();}


};
