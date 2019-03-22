var filter0 = (feature) => {
  return true;
}

var filter1 = (feature) => {
  return feature.properties.Line == 'Thorndale' || feature.properties.Line == 'Cynwyd'
}

var filter2 = (feature) => {
  return feature.properties.Line == 'Thorndale' || feature.properties.Line == 'Cynwyd'
}

var filter3 = (feature) => {
  return feature.properties.Line == 'Thorndale' || feature.properties.Line == 'Cynwyd'
}

var filter4 = (feature) => {
  return feature.properties.Line == 'Thorndale' || feature.properties.Line == 'Cynwyd'
}

var filter0s = (feature) => {
  return feature.properties.Station_Na == "Suburban Station" || feature.properties.Station_Na == "Malvern"
}

var filter1s = (feature) => {
  return feature.properties.Line_Name == 'Paoli Thorndale Line'
}

var filter2s = (feature) => {
  return feature.properties.Line_Name == 'Paoli Thorndale Line'
}

var filter3s = (feature) => {
  return feature.properties.Line_Name == 'Paoli Thorndale Line'
}

var filter4s = (feature) => {
  return feature.properties.Line_Name == 'Paoli Thorndale Line'
}

var filter0a = () => {

}

var filter1a = () => {
  _.each(apartments, function(obj){
    L.circleMarker(L.latLng(parseFloat(obj["Location"].split(',')[0]),parseFloat(obj["Location"].split(',')[1])), apartmentMarkerOptions).addTo(layerApartment);
  })
}

var filter2a = () => {
  _.each(apartments, function(obj){
    L.circleMarker(L.latLng(parseFloat(obj["Location"].split(',')[0]),parseFloat(obj["Location"].split(',')[1])), apartmentMarkerOptionsChoropleth(obj)).addTo(layerApartment);
  })
}

var filter3a = () => {
  _.each(apartments, function(obj){
    if(obj["6-month Lease?"] == 'Y'){
    L.circleMarker(L.latLng(parseFloat(obj["Location"].split(',')[0]),parseFloat(obj["Location"].split(',')[1])), apartmentMarkerOptionsChoropleth(obj)).addTo(layerApartment);
    }
  })
}

var filter4a = () => {
  _.each(apartments, function(obj){
    if(obj["6-month Lease?"] == 'Y'){
    L.circleMarker(L.latLng(parseFloat(obj["Location"].split(',')[0]),parseFloat(obj["Location"].split(',')[1])), apartmentMarkerOptionsChoropleth(obj)).addTo(layerApartment);
    }
  })
}

var openPopup = () => {
  _.each(apartments, function(obj){
    if(obj["6-month Lease?"] == 'Y'){
    L.circleMarker(
      L.latLng(parseFloat(obj["Location"].split(',')[0]),parseFloat(obj["Location"].split(',')[1])),
       apartmentMarkerOptionsChoropleth(obj)).addTo(layerApartment)
       .bindPopup("<b>Name: </b>" + obj["Name"] + "<br>" + "<b>Total Rent (Est.): </b>" + obj["Total Rent (Est.)"] + "<br>" + "<b>Nearest Stop: </b>" + obj["Nearest Stop"] + "<br>" + "<b>Contact: </b>" + obj["Contact"] + "<br>"  +"<b>Appointment: </b>" + obj["Visiting Hour"] )
       .openPopup();
    }
  })
}
