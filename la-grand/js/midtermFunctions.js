/* ================================
Functions + Signatures
================================ */
// Instantiate global geojson layer
var toMap = L.geoJSON();

// Every time a button is clicked, update the page by reading updated slide number
// And map data accordingly
function updateSlide(data) {
  map.removeLayer(toMap);
  map.setZoom(15);
  show('nav-prev');
  show('nav-next');

  if (currSlide == 0) { hide('nav-prev'); }
  else if (currSlide == slideDeck.length-1) { hide('nav-next'); }

  $('.slide-title').text(slideDeck[currSlide].title);
  $('#p1').text(slideDeck[currSlide].text[0]);
  $('#p2').text(slideDeck[currSlide].text[1]);

  switch(currSlide) {
    case 0:
      map.setZoom(18);
      aes(data, "mixed-use");
      break;
    case 1:
      map.setZoom(16);
      aes(data, "transit");
      break;
    case 2:
      aes(data, "grocery");
      break;
    case 3:
      aes(data, "park");
      break;
    case 4:
      aes(data, "museum");
      break;
    default:
      console.log('Invalid slide number.');
  }
}

// Main mapping function
function aes(data, key) {
  toMap = L.geoJSON(data, {
    filter: function(d) { return d.properties.type==key || d.properties.type=="mixed-use"; },
    onEachFeature: onEachFeature,
    style: styler,
    pointToLayer: marks
  }).addTo(map);
}

// Define markers as circle markers
function marks(point, coords) {
    return L.circleMarker(coords);
}

// Figure out which color to make markers
function styler(feature) {
  switch (feature.properties.type) {
    case 'mixed-use': return { color: '#D1495B', weight: 5, radius: 15 };
    case 'transit': return { color: '#118AB2', weight: 1 };
    case 'grocery': return { color: '#133C55', weight: 1 };
    case 'park': return { color: '#5FAD56', weight: 1 };
    case 'museum': return { color: '#231F20', weight: 1 };
    default: return { color: '#F8FFE5', weight: 1 };
  }
}

// Add names when clicked
function onEachFeature(feature, layer) {
  layer.bindPopup(feature.properties.name);
}

// Select element by ID and change display style to none to hide from page
function hide(elem) {
  document.getElementById(elem).style.display = 'none';
}

// Select element by ID and change display style to make visible
function show(elem) {
  document.getElementById(elem).style.display = 'inline-block';
}
