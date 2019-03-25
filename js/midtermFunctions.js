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
  if(stInput != "") {
    return 'feature.properties.STATE == "' + stInput.toUpperCase() + '"';
  } else { return 'feature.properties.STATE !=""'; }
};

var makeTypeFilter = () => {
  var typeInput = $('#typeFilter').val();
  if(typeInput != "") {
    return 'feature.properties.TYPE == "' + typeInput.toUpperCase() + '"';
  } else { return 'feature.properties.TYPE != ""'; }

};

var myFilter = function(feature) {
  //console.log(feature.properties.TYPE);
  //return feature.properties.TYPE == hospType;
  //return eval(!(makeStateFilter()));
  return eval( makeStateFilter() + " & " + makeTypeFilter() );
};


function createCircleMarker( feature, latlng ){
  // Change the values of these options to change the symbol's appearance
  let options = {
    radius: 4,
    fillColor: "#000080",
    color: "#000080",
    weight: 0,
    opacity: 0.4,
    fillOpacity: 0.4
  }
  return L.circleMarker( latlng, options );
}


var updateMap = () => {
  if (typeof featureGroup != "undefined") {map.removeLayer(featureGroup);};

  featureGroup = L.geoJson(parsedData, {
      pointToLayer: createCircleMarker,
      filter: myFilter

    }).addTo(map);
};

var buildSlide = (slideObject) => {
  $('#typeFilter').val(slideObject.typeFilter);
  $('#stateFilter').val(slideObject.stateFilter);
  //hospType = slideObject.hospType;
  cngTitle(slideObject.title);
  cngText(slideObject.text);
  updateMap();
  map.fitBounds(featureGroup.getBounds());
  //map.setView(slideObject.center, slideObject.zoom);
  if(slideNum > 0) {$("#bck").show();} else {$("#bck").hide();}
  if(slideNum < 4) {$("#nxt").show();} else {$("#nxt").hide();}
  if(slideNum != 4) {$('#filters').css("visibility", "hidden");} else {$('#filters').css("visibility", "visible");}


};
