var slides = [{
    title: "Apartment Hunting: A Journey",
    text: "Upon graduation, I need to find a new place to embrace new life. My dream apartment is at a convenient location to work (at Suburban Station), and close to my significant other (at Malvern). I'm willing to commute with the Regional Rail ",
    color: "red",
    zoom: 11,
    center: [39.9756178, -75.387641],
    filterLine: filter0,
    filterStation: filter0s,
    filterApartment: filter0a,
    popup: false
  },
  {
    title: "Focus on Thorndale/Paoli and Cynwyd Line",
    text: "After balancing distance to work and to friends, I chose to focus on apartments along the Thorndale/Paoli and Cynwyd Line. I used Google Map to find apartments close to stations and have decent reviews",
    color: "green",
    zoom: 13,
    center: [39.9974103, -75.2823513],
    filterLine: filter1,
    filterStation: filter1s,
    filterApartment: filter1a,
    popup: false
  },
  {
    title: "Estimate the Rent",
    text: "Prices are important. I called the leasing office or visited the apartment website to check the price for avaiable Studio/1B1B apartmetns. The price estimated by the rent and utilities that are included.",
    color: "blue",
    zoom: 13,
    center: [39.9974103, -75.2823513],
    filterLine: filter2,
    filterStation: filter2s,
    filterApartment: filter2a,
    popup: false
  },
  {
    title: "Short-term Lease Avaiability",
    text: "Flexibility is a dealbreaker for me. ",
    color: "blue",
    zoom: 13,
    center: [39.9974103, -75.2823513],
    filterLine: filter3,
    filterStation: filter3s,
    filterApartment: filter3a,
    popup: false
  },
  {
    title: "Let's Check Them Out!",
    text: "Show up their information, schedule appointments, and check them out!",
    color: "blue",
    zoom: 12,
    center: [39.9766077,-75.247239],
    filterLine: filter4,
    filterStation: filter4s,
    filterApartment: filter4a,
    popup: true
  }
]

var currentSlide = 0;

var addTitle = (title) => {
  $('#title1').text(title)
}

var addText = (text) => {
  $('#text1').text(text)
}

var setView = (center, zoom) => {
  map.setView(center, zoom);
}

var cleanup = () => {
  $('#title').remove()
  $('#text').remove()
}

var filterMapLine = (filterThis) => {
  if (layerLine) {
    map.removeLayer(layerLine)
  }
  layerLine = L.geoJSON(railLine, {
    filter: filterThis,
    style: lineMarkerOptions
  });
  layerLine.addTo(map);
}

var filterMapStation = (filterThis) => {
  if (layerStation) {
    map.removeLayer(layerStation)
  }
  layerStation = L.geoJSON(railStation, {
    filter: filterThis,
    pointToLayer: function(feature, latlng) {
      return L.circleMarker(latlng, stationMarkerOptions);
    }
  });
  layerStation.addTo(map);
}

var filterMapApartment = (filterThis) => {
  if (layerApartment) {
    layerApartment.clearLayers();
  }
  filterThis();
}

var showPopup = (popup) => {
  if (popup) {
    openPopup();
  }
}

var buildSlide = (slideObject) => {
  cleanup()
  addTitle(slideObject.title)
  addText(slideObject.text)
  setView(slideObject.center, slideObject.zoom)
  filterMapLine(slideObject.filterLine)
  filterMapStation(slideObject.filterStation)
  filterMapApartment(slideObject.filterApartment)
  showPopup(slideObject.popup)
}

var buttonChange = () => {
  if (currentSlide == 0) {
    $("#previous").hide()
  } else {
    $("#previous").show()
  }
  if (currentSlide == 4) {
    $("#next").hide()
  } else {
    $("#next").show()
  }
}

buildSlide(slides[currentSlide]);
buttonChange();
$("#next").click(() => {
  currentSlide = currentSlide + 1;
  buttonChange();
  buildSlide(slides[currentSlide]);
})
$("#previous").click(() => {
  currentSlide = currentSlide - 1;
  buttonChange();
  buildSlide(slides[currentSlide]);
})
