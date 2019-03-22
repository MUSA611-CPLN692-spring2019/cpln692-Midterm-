//Import map
var map = L.map('map', {
  center: [39.90900, 116.397411],
  zoom: 11
});
var Stamen_TonerLite = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 20,
  ext: 'png'
}).addTo(map);

var parsedData;
var featureGroup;

//Import data
var dataset = "https://raw.githubusercontent.com/MUSA611-CPLN692-spring2019/datasets/master/geojson/housingprice_Beijing.geojson";
$(document).ready(function() {
  $.ajax(dataset).done(function(data) {
    parsedData=JSON.parse(data);
    featureGroup = L.geoJson(parsedData, {
           pointToLayer: function(feature, latlng) {
           return L.circleMarker(latlng, myStyle0(feature));
     }
     }).addTo(map);
  })
});

//Define slides
var slides = [
  {title:"Housing Price of Beijing City", legend: $('#legend0'), text: "The housing price of Beijing rocketed during the past decades. This is a group of maps showing 78 samples of properties in Beijing. The following maps would show properties with different total prices, different unit prices, within school district 1 as well as built after 2000. You can also click the circles on the maps to check out their detailed information on the following slides!", color: "black"},
  {title:"Properties with Different Total Prices", text: "This map shows the properties with different total prices. Click on the circle to see its detailed information.", color: "black"},
  {title:"Properties with Different Unit Prices", text: "This map shows the properties with different unit prices. Click on the circle to see its detailed information.", color: "black"},
  {title:"Properties within School District 1", text: "This map shows the properties located within School District 1. Click on the circle to see its detailed information.", color: "black"},
  {title:"Properties Built after 2000", text: "After 2000, the housing price of Beijing has jumped to a new level. This map shows the properties built after 2000. Click on the circle to see its detailed information.", color: "black"}
];

//Build an array of legends
var legends = [
  $("#legend0"), $("#legend1"), $("#legend2"), $("#legend3"), $("#legend4")
];

//Designate the first object in the slides array
var currentSlide = 0;

//Simple function of adding text to #main
var addTitle = (title) => {
  $("#title").text(title)
};
var addText = (text) => {
  $('#main').text(text)
};

//Remove the layer
var remove = () => {
  map.removeLayer(featureGroup)
};

//Add filtered data in different styles to different slides
var addData = () => {
  featureGroup = L.geoJson(parsedData, {
    filter: function(feature) {
      switch (currentSlide) {
        case 0: return feature;
        case 1: return feature;
        case 2: return feature;
        case 3: return feature.properties.schooldistrict == 1;
        case 4: return feature.properties.yearbuilt > 2000;
    }},
    pointToLayer: function(feature, latlng) {
      switch (currentSlide) {
        case 0: return L.circleMarker(latlng, myStyle0(feature));
        case 1: return L.circleMarker(latlng, myStyle1(feature));
        case 2: return L.circleMarker(latlng, myStyle2(feature));
        case 3: return L.circleMarker(latlng, myStyle3);
        case 4: return L.circleMarker(latlng, myStyle4);
      }
    }
  }).addTo(map);
};

//Build Slide
var buildSlide = (slideObject) => {
  addTitle(slideObject.title)
  addText(slideObject.text)
};

buildSlide(slides[currentSlide]);

//Show the legend in slide[0]
$("#legend0").show();

//Hide the previous button on slide[0]
$("#previous").hide();

//Hide the box in slide[0]
$(".box").hide();

//Define next button
$("#next").click(() => {
  legends[currentSlide].hide();
  map.setView([39.90900, 116.397411],11);
  $('.image').hide();

  if(currentSlide < 4) {
    currentSlide = currentSlide + 1
  };
  if (currentSlide == 4) {
    $('#next').hide()
  };
  if (currentSlide == 3) {
    map.setView([39.90900, 116.397411],13)
  };

  $("#previous").show();
  legends[currentSlide].show();
  buildSlide(slides[currentSlide]);
  remove();
  addData();
  featureGroup.eachLayer(eachFeatureFunction);
  $("#info").hide();
  $(".box").hide();
});

//Define previous button
$("#previous").click(() => {
  map.setView([39.90900, 116.397411],11);
  legends[currentSlide].hide();

  if(currentSlide > 0) {
    currentSlide = currentSlide - 1
  };
  if(currentSlide == 0) {
    $("#previous").hide()
  };
  if (currentSlide == 3) {
    map.setView([39.90900, 116.397411],13)
  };
  if (currentSlide == 0) {
    $('.image').show();
  };

  $("#next").show();
  legends[currentSlide].show();
  buildSlide(slides[currentSlide]);
  remove();
  addData();
  featureGroup.eachLayer(eachFeatureFunction);
  $("#info").hide();
  $(".box").hide();
});

//Marker style for slide[0]
var myStyle0 = function(feature) {
  switch(feature.properties.bedrooms) {
    case 1: return {
      radius: 8,
      fillColor: "ff7800",
      color: "#f6d122",
      weight: 1,
      opacity: 1,
      fillOpacity: 0.8
    };
    case 2: return {
      radius: 8,
      fillColor: "ff7800",
      color: "#f68b22",
      weight: 1,
      opacity: 1,
      fillOpacity: 0.8
    };
    case 3: return {
      radius: 8,
      fillColor: "ff7800",
      color: "#6cb931",
      weight: 1,
      opacity: 1,
      fillOpacity: 0.8
    };
    case 4: return {
      radius: 8,
      fillColor: "ff7800",
      color: "#31b9aa",
      weight: 1,
      opacity: 1,
      fillOpacity: 0.8
    };
  }
};

//Marker style for slide[1]
var myStyle1 = function(feature){
  if (feature.properties.totalprice < 200) {
    return {
      radius: 8,
      fillColor: "ff7800",
      color: "#f6d122",
      weight: 1,
      opacity: 1,
      fillOpacity: 0.8
    };
  }
  else if (feature.properties.totalprice >= 200 && feature.properties.totalprice < 400) {
    return {
      radius: 8,
      fillColor: "ff7800",
      color: "#f68b22",
      weight: 1,
      opacity: 1,
      fillOpacity: 0.8
    };
  }
  else if (feature.properties.totalprice >= 400 && feature.properties.totalprice < 600) {
    return {
      radius: 8,
      fillColor: "ff7800",
      color: "#6cb931",
      weight: 1,
      opacity: 1,
      fillOpacity: 0.8
    };
  } else {
    return {
      radius: 8,
      fillColor: "ff7800",
      color: "#31b9aa",
      weight: 1,
      opacity: 1,
      fillOpacity: 0.8
    };
  }
};

//Marker style for slide[2]
var myStyle2 = function(feature){
  if (feature.properties.priceperm2 < 25000) {
    return {
      radius: 8,
      fillColor: "ff7800",
      color: "#f6d122",
      weight: 1,
      opacity: 1,
      fillOpacity: 0.8
    };
  }
  else if (feature.properties.priceperm2 >= 25000 && feature.properties.priceperm2 < 35000) {
    return {
      radius: 8,
      fillColor: "ff7800",
      color: "#f68b22",
      weight: 1,
      opacity: 1,
      fillOpacity: 0.8
    };
  }
  else if (feature.properties.priceperm2 >= 35000 && feature.properties.priceperm2 < 45000) {
    return {
      radius: 8,
      fillColor: "ff7800",
      color: "#6cb931",
      weight: 1,
      opacity: 1,
      fillOpacity: 0.8
    };
  }
  else {
    return {
      radius: 8,
      fillColor: "ff7800",
      color: "#31b9aa",
      weight: 1,
      opacity: 1,
      fillOpacity: 0.8
    };
  }
};

//Marker style for slide[3]&[4]
var myStyle3 = {
  radius: 8,
  fillColor: "ff7800",
  color: "#f6d122",
  weight: 1,
  opacity: 1,
  fillOpacity: 0.8
};
var myStyle4 = myStyle3;

//Show property name when clicked
var eachFeatureFunction = function(layer) {
  layer.on('click', function (event) {
      $('#info').show();
      $('.box').show();
      $('#propertyName').text("The " + layer.feature.properties.floor + "-floor property is named " + layer.feature.properties.name + ".");
      $('#propertyArea').text("Its area is " + layer.feature.properties.area + " square meters " + "and has " + layer.feature.properties.bedrooms + " bedrooms.");
      $('#propertyPrice').text("Its total price is ￥" + layer.feature.properties.totalprice + " and unit price is ￥" + layer.feature.properties.priceperm2 + ".");
      $('#yearOfBuilt').text("It was built in " + layer.feature.properties.yearbuilt + ".");
    }
)};
